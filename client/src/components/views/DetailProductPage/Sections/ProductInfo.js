import React from 'react'
import { Button, Descriptions, Badge } from 'antd';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../_actions/user_actions';

function ProductInfo(props) {
    const dispatch = useDispatch();


    const clickHandler = () => {

        //필요한 정보를 Cart add에 넣어줌
        //redux를 이용한 카트정보들 관리
        dispatch(addToCart(props.detail._id))

    }
    
    return (
        <div style={{ padding:50, textalign:'center', justifyContent:'center'}}>
            
            <Descriptions title={props.detail.title}>
                <Descriptions.Item label="판매가">{props.detail.price}원</Descriptions.Item>
                <Descriptions.Item label="조회수">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="제품정보">{props.detail.description}</Descriptions.Item>
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
