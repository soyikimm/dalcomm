import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Col, Card, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import SearchFeature from './Sections/SearchFeature';
import { categories } from './Sections/Datas';

function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [Filters, setFilters] = useState({ categories: [], price: []})
    const [SearchTerm, setSearchTerm] = useState("")

    useEffect(() => {

        let body = {
            skip: Skip,
            limit: Limit
        }

        getProducts(body)

    }, [])

    
    const getProducts = (body) => {
        axios.post('/api/product/products', body)
            .then(response => {
                if (response.data.success) {
                    if (body.loadMore) {
                        setProducts([...Products, ...response.data.productInfo])
                    } else {
                        setProducts(response.data.productInfo)
                    }
                } else {
                    alert(" 상품들을 가져오는데 실패 했습니다.")
                }
            })
    }

    // 더보기 메뉴
    const loadMoreHanlder = () => {

        let skip = Skip + Limit
        let body = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters
        }

        getProducts(body)
        setSkip(skip)
    }


    // 상품나열공간

    const renderCards = Products.map((product, index) => {

        console.log('product', product)

         return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                cover={<a href={`/product/${product._id}`}><ImageSlider images={product.images}/></a>} //썸네일
            >
               <Meta
                    title={product.title} //상품이름
                    description={`$${product.price}`} //상품가격
                />
            </Card>
        </Col>
    })

    const showFilteredResults = (filters) => {

        let body = {
            skip : 0,
            limit: Limit,
            filters: filters
        }

        getProducts(body)
        setSkip(0)
    
    }



    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

         newFilters[category] = filters

         showFilteredResults(newFilters)

    }

    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)

        let body = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerm(newSearchTerm)
        getProducts(body)

    }


 
    return (
       <div style={{ width: '75%', margin: '3rem auto' }}>

           <div style={{ textAlign: 'center'}}>
               <h2> Happy with Cookies! </h2>
           </div>

            
            {/* Fileter */}

            {/* CheckBox */}
            <Row gutter={[6, 6]}>
                <Col lg={10} xs={5}>
                <CheckBox list={categories} handleFilters={filters => handleFilters(filters, "categories")} />
            {/* RadioBox */}
                </Col>
            </Row>
            

            {/* Search */}
                <div style={{ display:'flex', justifyContent:'flex-end', margin: '1rem auto'}}>
                    <SearchFeature 
                        refreshFunction={updateSearchTerm}
                    />
                </div>
                


            {/* Cards */}
            <Row gutter={16, 16}>{renderCards}</Row>
                
       </div>
    )
}

export default LandingPage
