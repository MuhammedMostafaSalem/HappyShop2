import React, { useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import EditCouponHook from '../../CustomHook/Coupon/EditCouponHook';

const AdminEditCoupon = () => {
    const dateRef = useRef();
    const {id} = useParams();
    const [couponName, couponDate, couponValue, onChangCouponName, onChangCouponDate, onChangCouponValue, onSubmit] = EditCouponHook(id);
    return (
        <div>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">تعديل الكوبون</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الكوبون"
                        value={couponName}
                        onChange={onChangCouponName}
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="تارخ الانتهاء"
                        ref={dateRef}
                        value={couponDate}
                        onChange={onChangCouponDate}
                        onFocus={() => dateRef.current.type = 'date'}
                        onBlur={() => dateRef.current.type = 'text'}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="نسبة الخصم"
                        value={couponValue}
                        onChange={onChangCouponValue}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end">
                    <button onClick={onSubmit} className="btn-save d-inline mt-2">تعديل</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminEditCoupon