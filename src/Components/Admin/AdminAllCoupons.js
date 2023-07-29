import React from 'react'
import AdminCouponCard from './AdminCouponCard'
import { Row } from 'react-bootstrap'

const AdminAllCoupons = ({coupons}) => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الخصومات</div>
            <Row className='justify-content-start'>
                {
                    coupons ?
                        coupons.map((item, index) => {
                            return (
                                <AdminCouponCard key={index} item={item} />
                            )
                        })
                    : <h4>لا يوجد خصومات الان</h4>
                }
            </Row>
        </div>
    )
}

export default AdminAllCoupons