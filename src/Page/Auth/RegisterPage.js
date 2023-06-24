import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegisterHook from '../../CustomHook/Auth/RegisterHook'

const RegisterPage = () => {
  const [ name, eMail, phone, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword, onSubmit ] = RegisterHook();
  
    return (
        <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
            <input
              value={name}
              onChange={onChangeName}
              placeholder="اسم المستخدم..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={eMail}
              onChange={onChangeEmail}
              placeholder="الايميل..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={phone}
              onChange={onChangePhone}
              placeholder="الهاتف..."
              type="phone"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={password}
              onChange={onChangePassword}
              placeholder="كلمه السر..."
              type="password"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              placeholder="تأكيد كلمة السر..."
              type="password"
              className="user-input mt-3 text-center mx-auto"
            />
            <button onClick={onSubmit} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
            <label className="mx-auto my-4">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    )
}

export default RegisterPage
