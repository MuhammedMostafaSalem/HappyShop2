import React from 'react'
import { Row,Col } from 'react-bootstrap'
import UserAllOrderItem from './../User/UserAllOrderItem';
import { useParams } from 'react-router-dom';
import GetOrderDetalisHook from '../../CustomHook/Admin/GetOrderDetalisHook';
import ChangeOrderStatusHook from '../../CustomHook/Admin/ChangeOrderStatusHook';

const AdminOrderDetalis = () => {
    const { id } = useParams()
    const [orderData, cartItems] = GetOrderDetalisHook(id)
    const [onChangePaid, onChangeDeliver, changePayOrder, changeDeliverOrder, formatDate] = ChangeOrderStatusHook(id)

    return (
        <div>
            <UserAllOrderItem orderItem={orderData} />

            <Row className="justify-content-center mt-4 p-3 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text pb-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {
                            orderData ?
                                orderData.user ? orderData.user.name : null
                            : null
                        }
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {
                            orderData ?
                                orderData.user ? orderData.user.phone : null
                            : null
                        }
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {
                            orderData ?
                                orderData.user ? orderData.user.email : null
                            : null
                        }
                    </div>
                </Col>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50"
                        onChange={onChangePaid}
                    >
                        <option value="val">الدفع</option>
                        <option value="true">تم</option>
                        <option value="false">لم يتم</option>
                    </select>
                    <button onClick={changePayOrder} className="btn-a px-3 d-inline mx-2">حفظ </button>
                </div>

                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50"
                        onChange={onChangeDeliver}
                    >
                        <option value="val">التوصيل</option>
                        <option value="true">تم</option>
                        <option value="false">لم يتم</option>
                    </select>
                    <button onClick={changeDeliverOrder} className="btn-a px-3 d-inline mx-2">حفظ </button>
                </div>
            </Row>
        </div>
    )
}

export default AdminOrderDetalis
