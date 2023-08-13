import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = ({orderItem}) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">
                    طلب رقم #{orderItem.id || 0} ...تم بتاريخ {formatDate(orderItem.createdAt)}
                </div>
            </Row>
            {
                orderItem.cartItems ?
                    orderItem.cartItems.map((item, index) => {
                        return (
                            <UserAllOrderCard key={index} item={item}/>
                        )
                    })
                : null
            }
            <Row>
                <Col xs="9" className="d-flex justify-content-between">
                    <div>
                        <div className="d-inline">الحالة</div>
                        <div className="d-inline mx-2 stat">
                            {
                                orderItem.isDelivered === true ?
                                    <div>تم التوصيل</div>
                                : <div>لم يتم التوصيل</div>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="d-inline">الدفع</div>
                        <div className="d-inline mx-2 stat">
                            {
                                orderItem.isPaid === true ?
                                    <div>تم الدفع</div>
                                : <div>لم يتم الدفع</div>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="d-inline">طريقة الدفع</div>
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
    )
}

export default UserAllOrderItem
