import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import VerifyPasswordHook from '../../CustomHook/Auth/VerifyPasswordHook'

const VerifyPasswordPage = () => {
    const [onChangeCode, code, onSubmit, loading, isPress] = VerifyPasswordHook()

    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">ادخل الكود المرسل</label>
                    <input
                        value={code}
                        onChange={onChangeCode}
                        placeholder="الكود"
                        type="email"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <button className="btn-login mx-auto mt-3" onClick={onSubmit}>تأكيد</button>
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

export default VerifyPasswordPage