import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminAllOrdersItem = ({orderItem}) => {
    return (
        <Col sm="12">
            <Link
                to={`/admin/orders/${orderItem._id}`}
                className="cart-item-body my-2 p-3 d-flex"
                style={{ textDecoration: "none" }}>
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12">
                            <div className="d-inline pt-2 cat-text">طلب رقم #{orderItem.id}</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title">
                                طلب من : {orderItem.user.name}
                            </div>
                            <div className="d-inline pt-2 cat-rate me-2">{orderItem.user.email}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="9" className="d-flex justify-content-between">
                            <div>
                                <div className="d-inline text-dark">الحالة</div>
                                <div className="d-inline mx-2 stat">
                                    {
                                        orderItem.isDelivered === true ?
                                            <div>تم التوصيل</div>
                                        : <div>لم يتم التوصيل</div>
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="d-inline text-dark">الدفع</div>
                                <div className="d-inline mx-2 stat">
                                    {
                                        orderItem.isPaid === true ?
                                            <div>تم الدفع</div>
                                        : <div>لم يتم الدفع</div>
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="d-inline text-dark">طريقة الدفع</div>
                                <div className="d-inline mx-2 stat">
                                    {
                                        orderItem.paymentMethodType === 'cash' ?
                                            <div>كاش</div>
                                        : <div>بطاقة أئتمانية</div>
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col xs="3" className="d-flex justify-content-end">
                            <div>
                                <div className="barnd-text">{orderItem.totalOrderPrice || 0} جنيه</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Link>
        </Col>
    )
}

export default AdminAllOrdersItem
