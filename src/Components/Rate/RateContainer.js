import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import Pagination from '../Uitily/Pagination';
import RateItem from './RateItem';
import RatePost from './RatePost';
import { useParams } from 'react-router-dom';
import ViewAllRateHook from '../../CustomHook/rate/ViewAllRateHook';
const RateContainer = ({rateAvg, rateQty}) => {
    const {id} = useParams();
    const [allRate, getPage, pageCount] = ViewAllRateHook(id);
    return (
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
                    <div className="rate-count d-inline p-1 pt-2">({`${rateQty} تقييم`})</div>
                </Col>
            </Row>
            <RatePost />
            {
                allRate.data ?
                    allRate.data.map((review, index)=> {
                        return (
                            <RateItem key={index} review={review} />
                        )
                    })
                : <h6>لا يوجد تقيمات الان</h6>
            }

            {
                pageCount > 1 ?
                    <Pagination pageCount={pageCount} onPress={getPage}/>
                : null
            }
        </Container>
    )
}

export default RateContainer
