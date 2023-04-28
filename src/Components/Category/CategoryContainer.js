import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/CategoryAction';
const CategoryContainer = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const categoryData = useSelector(state => state.AllCategory.category)
    const loading = useSelector(state => state.AllCategory.loading)
    console.log(categoryData.data, loading)

    const colors = ['#ffd3eb', '#f4dba5', '#55cfdf', '#ff6262', '#0034ff', '#ffd3e8']

    return (
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
            {
                loading === false ?
                categoryData.data ? 
                    categoryData.data.map((item, index) => {
                        return (
                            <CategoryCard title={item.name} img={item.image} background={colors[Math.floor(Math.random() * 5 ) + 1]} key={index} />
                        )
                    })
                : <h3>لا يوجد تصنيفات</h3>
                : <Spinner className='mx-auto' animation="border" variant="primary" />
            }
            </Row>
        </Container>
    )
}

export default CategoryContainer
