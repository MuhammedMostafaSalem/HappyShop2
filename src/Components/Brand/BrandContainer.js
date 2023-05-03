import React from 'react'
import BrandCard from './BrandCard'
import { Container, Row, Spinner } from 'react-bootstrap';
const BrandContainer = ({ brandData, loading }) => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل الماركات</div>
            <Row className='my-1 d-flex justify-content-between'>
                {
                    loading === false ?
                        brandData ?
                            brandData.map((item, index)=> {
                                return (
                                    <BrandCard img={item.image} key={index} />
                                )
                            })
                        : <h3>لا يوجد ماركات</h3>
                    : <Spinner className='mx-auto' animation="border" variant="primary" />
                }
            </Row>
        </Container>
    )
}

export default BrandContainer
