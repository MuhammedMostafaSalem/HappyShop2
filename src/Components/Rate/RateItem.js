import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import rate from '../../images/rate.png'
import deleteIcon from '../../images/delete.png'
import editIcon from '../../images/edit.png'
import DeleteRateHook from '../../CustomHook/rate/DeleteRateHook'
import EditRateHook from '../../CustomHook/rate/EditRateHook'
import ReactStars from "react-rating-stars-component";
const RateItem = ({review}) => {
    // console.log(review)
    // console.log(JSON.parse(localStorage.getItem('user')))
    const [isUser, handleClose, handleShow, handleDelete, showDelete]= DeleteRateHook(review);
    const [showEdit, handleCloseEdit, handleEdit, handleShowEdit, editRateText, onChangeRateText, editRateValue, onChangeRateValue]= EditRateHook(review);

    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: editRateValue,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            onChangeRateValue(newValue);
        }
    };

    return (
        <div>
            <Modal show={showDelete} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>تأكيد الازالة</Modal.Title>
                </Modal.Header>
                <Modal.Body>هل انت متأكد من ازالة التقييم ؟</Modal.Body>
                <Modal.Footer style={{borderTop: "none"}}>
                    <Button variant="danger" onClick={handleClose}>
                        اغلاق
                    </Button>
                    <Button variant="secondary" onClick={handleDelete}>
                        ازالة
                    </Button>
                </Modal.Footer>
            </Modal>
            
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header>
                    <Modal.Title>تعديل التقييم</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    <ReactStars {...setting} />
                    <input
                        value={editRateText}
                        onChange={onChangeRateText}
                        type='text'
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
            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="rate-name  d-inline ms-2">{review.user.name}</div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{review.rating}</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-flex justify-content-between me-4 pb-2">
                    <div className="rate-description d-inline ms-2">
                        {review.review}
                    </div>
                    {
                        isUser === true ?
                            <div className='d-flex gap-3'>
                                <img src={deleteIcon} onClick={handleShow} width='20px' height='20px' style={{cursor: 'pointer'}} alt=''/>
                                <img src={editIcon} onClick={handleShowEdit} width='20px' height='20px' style={{cursor: 'pointer'}} alt=''/>
                            </div>
                        : null
                    }
                </Col>
            </Row>
        </div>
    )
}

export default RateItem
