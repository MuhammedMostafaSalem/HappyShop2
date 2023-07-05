import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import ForgetPasswordHook from '../../CustomHook/Auth/ForgetPasswordHook'

const ForgetPasswordPage = () => {
    const [onChangeEmail, email, onSubmit, loading, isPress] = ForgetPasswordHook()

    return (
        <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
            <Col sm="12" className="d-flex flex-column ">
                <label className="mx-auto title-login">نسيت كلمة السر</label>
                <input
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="الايميل..."
                    type="email"
                    className="user-input mt-3 text-center mx-auto"
                />
                <button className="btn-login mx-auto mt-3" onClick={onSubmit}>ارسال الكود</button>
                {
                    isPress === true ?
                        loading === true ?
                            <Spinner className='mx-auto mt-5' animation="border" variant="primary" />
                        : null
                    : null
                }
            </Col>
        </Row>
    </Container>
    )
}

export default ForgetPasswordPage