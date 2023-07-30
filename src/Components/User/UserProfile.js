import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import editIcon from '../../images/edit.png'
import ProfileHook from '../../CustomHook/User/ProfileHook'

const UserProfile = () => {
    const [user, showEdit, handleCloseEdit, handleShowEdit, handleEdit, name, onChangeName, email, onChangeEmail, phone, onChangePhone, oldPassword, onChangeOldPass, newPassword, onChangeNewPass, confirmNewPassword, onChangeConfirmPass, changePassword] = ProfileHook()

    return (
        <div>
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header>
                    <Modal.Title>تعديل بيانات المستخدم</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    <input
                        value={name}
                        onChange={onChangeName}
                        type='text'
                        placeholder='اسم المستخدم'
                        className='w-100'
                        style={{borderRadius: '20px', padding: '5px 20px'}}
                    />
                    <input
                        value={phone}
                        onChange={onChangePhone}
                        type='number'
                        placeholder='رقم الهاتف'
                        className='w-100'
                        style={{borderRadius: '20px', padding: '5px 20px'}}
                    />
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        type='email'
                        placeholder='الايميل'
                        className='w-100'
                        style={{borderRadius: '20px', padding: '5px 20px'}}
                    />
                </Modal.Body>
                <Modal.Footer style={{borderTop: "none"}}>
                    <Button variant="danger" onClick={handleCloseEdit}>
                        اغلاق
                    </Button>
                    <Button variant="secondary" onClick={handleEdit}>
                        تعديل
                    </Button>
                </Modal.Footer>
            </Modal>
        
            <div className="admin-content-text">الصفحه الشخصية</div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">الاسم:</div>
                        <div className="p-1 item-delete-edit">{user.name}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={editIcon}
                                height="17px"
                                width="15px"
                            />
                            <p onClick={handleShowEdit} className="item-delete-edit"> تعديل</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">رقم الهاتف:</div>
                        <div className="p-1 item-delete-edit">{user.phone}</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">الايميل:</div>
                        <div className="p-1 item-delete-edit">{user.email}</div>
                    </Col>
                </Row>
            </div>
            <Row className="mt-5">
            <Col xs="10" sm="8" md="6" className="">
                <div className="admin-content-text">تغير كملة المرور</div>
                <input
                    value={oldPassword}
                    onChange={onChangeOldPass}
                    type="password"
                    className="input-form d-block mt-1 px-3"
                    placeholder="ادخل كلمة المرور القديمة"
                />
                <input
                    value={newPassword}
                    onChange={onChangeNewPass}
                    type="password"
                    className="input-form d-block mt-3 px-3"
                    placeholder="ادخل كلمة المرور الجديده"
                />
                <input
                    value={confirmNewPassword}
                    onChange={onChangeConfirmPass}
                    type="password"
                    className="input-form d-block mt-3 px-3"
                    placeholder="تاكيد كلمة المرور الجديده"
                />
            </Col>
        </Row>

        <Row>
            <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                <button onClick={changePassword} className="btn-save d-inline mt-2 ">حفظ كلمة السر</button>
            </Col>
        </Row>
        </div>
    )
}

export default UserProfile
