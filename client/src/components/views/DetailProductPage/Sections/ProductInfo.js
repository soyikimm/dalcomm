import React from 'react'
import { Button, Descriptions, Badge } from 'antd';

function ProductInfo(props) {
    
    const clickHandler = () => {

    }
    
    return (
        <div>
            <Descriptions title="상품정보">
                <Descriptions.Item label="제품명">{props.detail.title}</Descriptions.Item>
                <Descriptions.Item label="가격">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="이게뭐지">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="설명">{props.detail.description}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
            </Descriptions>

        <br />
        <br />
        <br />
            <div style={{ display:'flex', justifyContent:'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>Add to Cart</Button>
            </div>

        </div>
        
        
    )
}

export default ProductInfo
