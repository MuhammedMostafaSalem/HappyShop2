import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import EditAddressHook from '../../CustomHook/User/EditAddressHook';

const UserEditAddress = () => {
    const {id} = useParams();
    const [alias, onChangAlias, detailsAddress, onChangDetailsAddress, phone, onChangPhone, city, onChangCity, onSubmit] = EditAddressHook(id)

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">تعديل العنوان </div>
                <Col sm="8">
                    <input
                        value={alias}
                        onChange={onChangAlias}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                    />
                    <textarea
                        value={detailsAddress}
                        onChange={onChangDetailsAddress}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="العنوان بالتفصيل"
                    />
                    <input
                        value={phone}
                        onChange={onChangPhone}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="رقم الهاتف"
                    />
                    <input
                        value={city}
                        onChange={onChangCity}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المدينة"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={onSubmit} className="btn-save d-inline mt-2">تعديل</button>
                </Col>
            </Row>
        </div>
    )
}

export default UserEditAddress
