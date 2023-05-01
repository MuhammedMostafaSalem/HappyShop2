import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import HomeBrandHook from '../../CustomHook/Brand/HomeBrandHook';

const BrandFeatured = ({ title, btntitle }) => {

    const [ brandData, loading ] = HomeBrandHook();

    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
                {
                    loading === false ?
                        brandData.data ?
                            brandData.data.slice(0, 6).map((item, index) => {
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

export default BrandFeatured
