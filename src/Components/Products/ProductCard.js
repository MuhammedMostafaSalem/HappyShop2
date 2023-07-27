import React from 'react'
import { Card, Col } from 'react-bootstrap'
import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';
import ProductCardHook from '../../CustomHook/Fav Products/ProductCardHook';

const ProductCard = ({item, favProd}) => {
    const [handleFav, favImg, addToWishListData, removeToWishListData]= ProductCardHook(item, favProd)
    
    return (
        <Col xs="6" sm="6" md="4" lg="3" className="d-flex">

            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "345px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
                </Link>
                
                <Card.Body>
                    <Card.Title style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="card-title">
                            {item.title}
                        </div>

                        <div >
                            <img
                                onClick={handleFav}
                                src={favImg}
                                alt=""
                                className="text-center"
                                style={{
                                    height: "24px",
                                    width: "26px",
                                    cursor: 'pointer'
                                }}
                            />
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">{item.ratingsAverage}</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-price">{item.price}</div>
                                <div className="card-currency mx-1">جنيه</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard
