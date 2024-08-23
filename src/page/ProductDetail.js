import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown, Alert } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  const getProductDetail = async () => {
    setLoading(true);
    try {
      let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
    } catch (err) {
      setError("상품 정보를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="product-detail-card">
      <Row>
        <Col xs={12} md={6} className="product-detail-img">
          <img src={product.img} alt={product.title} />
        </Col>
        <Col xs={12} md={6}>
          <div className="product-info">{product.title}</div>
          <div className="product-info">₩ {product.price}</div>
          <div className="choice">
            {product.choice ? "Conscious choice" : ""}
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item, index) => (
                  <Dropdown.Item key={index} href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
