import React, { useState } from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from '../../images/prod1.png'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteProducts } from '../../Redux/Actions/ProductAction'
import { toast } from 'react-toastify'
const AdminAllProductsCard = ({item}) => {

    // delete admin product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handleDelete = async () => {
        await dispatch(deleteProducts(item._id))
        toast.success('تمت عملية الازالة بنجاح')
        setShow(false);
        window.location.reload()
    }

    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>تأكيد الازالة</Modal.Title>
                </Modal.Header>
                <Modal.Body>هل انت متأكد من عملية الازالة ؟</Modal.Body>
                <Modal.Footer style={{borderTop: "none"}}>
                    <Button variant="danger" onClick={handleClose}>
                        اغلاق
                    </Button>
                    <Button variant="secondary" onClick={handleDelete}>
                        ازالة
                    </Button>
                </Modal.Footer>
            </Modal>

            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
                        <Link to={`/admin/edit-product/${item._id}`} style={{ textDecoration: "none" }}>
                            <div className="d-inline item-delete-edit">تعديل</div>
                        </Link>
                    </Col>
                </Row>
                <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                {item.title}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">{item.ratingsQuantity}</div>
                                <div className="d-flex">
                                    <div className="card-price">
                                        {
                                            item.priceAfterDiscount >= 1 ? 
                                                <div>
                                                    <span style={{textDecoration: "line-through", fontSize: '15px'}}>{item.price}</span> {item.priceAfterDiscount}
                                                </div>
                                            : item.price
                                        }
                                    </div>
                                    <div className="card-currency mx-1">جنيه</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard
