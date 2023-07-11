import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import ResetPasswordHook from '../../CustomHook/Auth/ResetPasswordHook'

const ResetPasswordPage = () => {
    const [onChangePassword, onChangeConfirmPassword, password, confirmPassword, onSubmit, loading, isPress] = ResetPasswordHook()

    return (
        <Container style={{ minHeight: "680px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">ادخل كلمة السر الجديدة</label>
                    <input
                        value={password}
                        onChange={onChangePassword}
                        placeholder="كلمة السر الجديدة"
                        type="password"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <input
                        value={confirmPassword}
                        onChange={onChangeConfirmPassword}
                        placeholder="تأكيد كلمة السر الجديدة"
                        type="password"
                        className="user-input mt-3 text-center mx-auto"
                    />
                    <button className="btn-login mx-auto mt-3" onClick={onSubmit}>حفظ</button>
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

export default ResetPasswordPage