import React, { useRef } from 'react'
import { Col, Row } from 'react-bootstrap';

const AdminAddCoupon = () => {
    const dateRef = useRef();

    return (
        <div>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">اضافه كوبون</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الكوبون"
                    />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="تارخ الانتهاء"
                        ref={dateRef}
                        onChange={(e) => console.log(e.target.value)}
                        onFocus={() => dateRef.current.type = 'date'}
                        onBlur={() => dateRef.current.type = 'text'}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="نسبة الخصم"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end">
                    <button className="btn-save d-inline mt-2">حفظ</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddCoupon