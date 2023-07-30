import React from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteIcon from '../../images/delete.png'
import editIcon from '../../images/edit.png'
import DeleteAddressHook from '../../CustomHook/User/DeleteAddressHook';

const UserAddressCard = ({item}) => {
    const [showDelete, handleCloseDelete, handleShowDelete, handleDelete] = DeleteAddressHook(item)

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
            <Row className="d-flex justify-content-between">
                <Col xs="1">
                    <div className="p-2">{item.alias}</div>
                </Col>
                <Col xs="4" className="d-flex d-flex justify-content-end">
                    <div className="d-flex gap-3 px-2 py-1">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={editIcon}
                                height="17px"
                                width="15px"
                            />
                            <Link to={`/user/edit-address/${item._id}`} style={{ textDecoration: "none" }}>
                                <p className="item-delete-edit"> تعديل</p>
                            </Link>
                        </div>
                        <div className="d-flex ">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteIcon}
                                height="17px"
                                width="15px"
                            />
                            <p onClick={handleShowDelete} className="item-delete-edit"> ازاله</p>
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
                        {item.details}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        اسم المدينة:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item.city}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3 pb-2">
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
                        {item.phone}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddressCard
