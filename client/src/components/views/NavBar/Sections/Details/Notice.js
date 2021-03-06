import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import ImageSlider from "../../../../utils/ImageSlider";
import CheckBox from "../../../LandingPage/Sections/CheckBox";
import SearchFeature from "../../../LandingPage/Sections/SearchFeature";
import { continents } from "../../../LandingPage/Sections/Datas";

function Notice() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(16);
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

  // 상품나열공간

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={18} xs={24} key={index}>
        {/* 상품 이미지 */}

        {/* 상품 누르면 디테일로 가기 */}
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

      {/* CheckBox */}
      <div style={{ display: "none" }}>
        <Row gutter={[6, 6]}>
          <Col lg={10} xs={5}>
            <CheckBox list={continents} />
          </Col>
        </Row>
      </div>

      {/* Cards */}
      <Row gutter={(32, 32)}>
        <div style={{ margin: "2rem auto" }}> Notice </div>
        {renderCards}
      </Row>
      <br />
    </div>
  );
}

export default Notice;
