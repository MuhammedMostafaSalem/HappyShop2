import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import deleteIcon from '../../images/delete.png'
import editIcon from '../../images/edit.png'
import DeleteCouponHook from '../../CustomHook/Coupon/DeleteCouponHook'

const AdminCouponCard = ({item}) => {
    const [showDelete, handleCloseDelete, handleShowDelete, handleDelete] = DeleteCouponHook(item);

    // To change the date format
    const dateString = item.expire;

    const formatDate = (dateString) => {
    // numeric = number, long = name
    const options = { year: "numeric", month: "numeric", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="user-address-card my-3 px-2">
            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header>
                    <Modal.Title>تأكيد الازالة</Modal.Title>
                </Modal.Header>
                <Modal.Body>هل انت متأكد من عملية الازالة ؟</Modal.Body>
                <Modal.Footer style={{borderTop: "none"}}>
                    <Button variant="danger" onClick={handleCloseDelete}>
                        اغلاق
                    </Button>
                    <Button variant="secondary" onClick={handleDelete}>
                        ازالة
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row className="d-flex justify-content-between  ">
                <Col xs="6">
                    <div className="p-2">اسم الكوبون: {item.name}</div>
                </Col>
                <Col xs="6" className="d-flex d-flex justify-content-end">
                    <div className="d-flex gap-3 p-2">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={editIcon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> تعديل</p>
                        </div>
                        <div className="d-flex">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteIcon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit" onClick={handleShowDelete}> ازاله</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "14px",
                        }}>
                        تاريخ الانتهاء: {formatDate(dateString)}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className='d-flex'>
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        نسبة الخصم:
                    </div>
                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item.discount} %
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AdminCouponCard