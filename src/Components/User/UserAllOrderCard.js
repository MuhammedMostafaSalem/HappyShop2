import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import { Link } from 'react-router-dom';
const UserAllOrderCard = ({item}) => {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <Link to={`/products/${item.product._id}`}>
                        <img width="93px" height="120px" src={item.product.imageCover || mobile} alt="" />
                    </Link>
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 cat-title">
                        {item.product.title}
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2">{item.product.ratingsAverage ?
                        item.product.ratingsAverage : 0}</div>
                    <div className="rate-count d-inline p-1 pt-2">({`${item.product.ratingsQuantity}` || 0} تقييم)</div>
                    <div className="mt-3 d-flex gap-2">
                        <div className="cat-text d-inline">الكميه :</div>
                        <p>{item.count}</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard
