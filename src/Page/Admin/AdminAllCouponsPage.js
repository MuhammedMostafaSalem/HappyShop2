import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllCoupons from '../../Components/Admin/AdminAllCoupons'
import ViewAllCouponsHook from '../../CustomHook/Coupon/ViewAllCouponsHook'

const AdminAllCouponsPage = () => {
    const [coupons] = ViewAllCouponsHook();
    return (
        <Container>
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllCoupons coupons={coupons} />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllCouponsPage