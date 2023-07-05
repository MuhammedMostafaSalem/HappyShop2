import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../CustomHook/Auth/LoginHook'

const LoginPage = () => {
    const [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress] = LoginHook();

    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">تسجيل الدخول</label>
                        <input
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="الايميل..."
                            type="email"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
                            value={password}
                            onChange={onChangePassword}
                            placeholder="كلمه السر..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button className="btn-login mx-auto mt-4" onClick={onSubmit}>تسجيل الدخول</button>
                        <label className="mx-auto mt-4">
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>
                        <label className="mx-auto mt-3">
                            <Link to="/forget-password" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    نسيت كلمة السر ؟
                                </span>
                            </Link>
                        </label>

                        {
                            isPress === true ?
                                loading === true ?
                                    <Spinner className='mx-auto' animation="border" variant="primary" />
                                : null
                            : null
                        }

                    </Col>


                    <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            الدخول ادمن
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                            الدخول مستخدم
                        </span>
                    </Link>
                </label>
                </Row>
            </Container>
    )
}

export default LoginPage
