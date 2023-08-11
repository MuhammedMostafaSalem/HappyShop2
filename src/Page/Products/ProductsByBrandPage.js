import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useParams } from 'react-router-dom'
import AllProductsByBrandHook from '../../CustomHook/Products/AllProductsByBrandHook'

const ProductsByBrandPage = () => {
    const {id} = useParams();
    const [items, pagination, onPress] = AllProductsByBrandHook(id);

    if(pagination) {
        var pageCount = pagination;
    }
    else {
        pageCount = 0;
    }

    return (
        <div style={{ minHeight: '670px' }}>
            <Container>
                <Row className='d-flex flex-row'>
                    <Col>
                        <CardProductsContainer products={items} title="" btntitle=""/>
                    </Col>
                </Row>
                {
                    pageCount > 1 ? <Pagination pageCount={pageCount} onPress={onPress} /> : null
                }
            </Container>
        </div>
    )
}

export default ProductsByBrandPage