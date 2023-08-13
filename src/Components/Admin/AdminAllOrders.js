import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import UserGetAllOrderHook from '../../CustomHook/User/UserGetAllOrderHook'
import Pagination from '../Uitily/Pagination'

const AdminAllOrders = () => {
    const [userName, results, paginate, orderData, onPress] = UserGetAllOrderHook()

    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
                {
                    orderData.length >= 1 ?
                        orderData.map((orderItem, index) => {
                            return (
                                <AdminAllOrdersItem key={index} orderItem={orderItem} />
                            )
                        })
                    : <h6>لا يوجد طلبات حتى الان</h6>
                }
            </Row>
            <Row>
                <Col>
                    {
                        paginate.numberOfPages > 2 ? <Pagination pageCount={paginate.numberOfPages} onPress={onPress} /> : null
                    }
                </Col>
            </Row>
        </div>
    )
}

export default AdminAllOrders
