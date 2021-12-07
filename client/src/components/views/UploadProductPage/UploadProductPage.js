import React, { useState }  from 'react'
import { Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload.js'
import Axios from 'axios';

const { TextArea } = Input;
const Categories = [
    { key: 1, value: "OUTER" },
    { key: 2, value: "TOP" },
    { key: 3, value: "BOTTOM" },
    { key: 4, value: "DRESS" },
    { key: 5, value: "SHOES" },
    { key: 6, value: "E.T.C" },
]

function UploadProductPage(props) {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Category, setCategory] = useState(1)
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const CategoryChangeHandler = (event) => {
        setCategory(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!Title || !Description || !Price || !Category || Images.length === 0) {
            return alert("빈칸없이 넣어주세요!")
        }
    

    //서버에 채운 값들을 request로 보냄

    const body = {
        //로그인 된 사람의 ID 
        writer: props.user.userData._id,
        title: Title,
        description: Description,
        price: Price,
        images: Images,
        category: Category
    }

    Axios.post('/api/product', body)
    .then(response => {
        if (response.data.success) {
            alert('상품 업로드에 성공 했습니다.')
            props.history.push('/')
        } else {
            alert('상품 업로드에 실패 했습니다.')
        }
    })
}


return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2> 상품 업로드</h2>
        </div>

        <Form>
                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <label>가격($)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price} />
                <br />
                <br />
                <select onChange={CategoryChangeHandler} value={Category}>
                    {Categories.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
                    ))}
                </select>
                <br />
                <br />
                <Button onClick={submitHandler}>확인</Button>
                </Form>

    </div>
    )
}

export default UploadProductPage