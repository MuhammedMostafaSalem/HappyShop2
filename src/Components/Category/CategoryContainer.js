import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';

const CategoryContainer = ({categoryData, loading}) => {

    const colors = ['#ffd3eb', '#f4dba5', '#55cfdf', '#ff6262', '#0034ff', '#ffd3e8']

    return (
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
            {
                loading === false ?
                categoryData ? 
                    categoryData.map((item, index) => {
                        return (
                            <CategoryCard title={item.name} img={item.image} background={colors[Math.floor(Math.random() * 5 ) + 1]} key={index} id={item._id} />
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
