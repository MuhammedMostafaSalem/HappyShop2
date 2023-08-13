import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'
import UserGetAllOrderHook from '../../CustomHook/User/UserGetAllOrderHook'
import Pagination from '../Uitily/Pagination'

const UserAllOrder = () => {
    const [userName, results, paginate, orderData, onPress] = UserGetAllOrderHook()

    return (
        <div>
            <div className="admin-content-text pb-4">عدد الطلبات #{results}</div>
            <Row className='justify-content-between'>
                {
                    orderData.length >= 1 ?
                        orderData.map((orderItem, index) => {
                            return (
                                <UserAllOrderItem key={index} orderItem={orderItem} />
                            )
                        })
                    : <h6>لا يوجد طلبات حتى الان</h6>
                }

                {
                    paginate.numberOfPages > 2 ? <Pagination pageCount={paginate.numberOfPages} onPress={onPress} /> : null
                }
            </Row>
        </div>
    )
}

export default UserAllOrder
