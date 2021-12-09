import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Card, Image } from "antd";
import Meta from "antd/lib/card/Meta";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import SearchFeature from "./Sections/SearchFeature";
import { continents } from "./Sections/Datas";
import { Carousel } from "react-bootstrap";

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [Filters, setFilters] = useState({ continents: [], price: [] });
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(body);
  }, []);

  const getProducts = (body) => {
    axios.post("/api/product/products", body).then((response) => {
      if (response.data.success) {
        if (body.loadMore) {
          setProducts([...Products, ...response.data.productInfo]);
        } else {
          setProducts(response.data.productInfo);
        }
      } else {
        alert(" 상품들을 가져오는데 실패 했습니다.");
      }
    });
  };

  // 더보기 메뉴
  //   const loadMoreHanlder = () => {
  //     let skip = Skip + Limit;
  //     let body = {
  //       skip: skip,
  //       limit: Limit,
  //       loadMore: true,
  //       filters: Filters,
  //     };

  //     getProducts(body);
  //     setSkip(skip);
  //   };

  // 상품나열공간

  const renderCards = Products.map((product, index) => {
    console.log("product", product);

    return (
      <Col lg={6} md={8} xs={24} key={index}>
        {/* 상품 이미지 */}

        <div>
          <a href={`/product/${product._id}`}>
            <ImageSlider images={product.images} />
          </a>
        </div>
        <Meta
          style={{ margin: "1rem auto" }}
          title={product.title} //상품이름
          description={`${product.price}원`} //상품가격
        />
      </Col>
    );
  });

  const showFilteredResults = (filters) => {
    let body = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };

    getProducts(body);
    setSkip(0);
  };

  //카테고리
  const handleFilters = (filters, continent) => {
    const newFilters = { ...Filters };

    newFilters[continent] = filters;

    showFilteredResults(newFilters);
  };

  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);

    let body = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerm(newSearchTerm);
    getProducts(body);
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      {/* 대문 */}

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/main/1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/main/2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/main/3.jpg" alt="Thrid slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Search */}
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "1rem auto",
        }}
      >
        <SearchFeature refreshFunction={updateSearchTerm} />
      </div>
      <br />

      {/* Fileter */}

      {/* CheckBox */}
      <Row gutter={[6, 6]}>
        <Col lg={10} xs={5}>
          <CheckBox
            list={continents}
            handleFilters={(filters) => handleFilters(filters, "continents")}
          />
          {/* RadioBox */}
        </Col>
      </Row>

      {/* Cards */}
      <Row gutter={(16, 16)} style={{ margin: "3rem auto" }}>
        <div style={{ margin: "2rem auto" }}> special moment with you</div>
        {renderCards}
      </Row>
      <br />
    </div>
  );
}

export default LandingPage;
