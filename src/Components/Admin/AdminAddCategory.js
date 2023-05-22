import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AddCategoryHook from '../../CustomHook/Category/AddCategoryHook'

const AdminAddCategory = () => {

    const [ img, name, loading, onImageChange, onNameChange, handleSubmit, ] = AddCategoryHook();
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                    <div>
                        <label htmlFor='upload-photo'>
                            <img src={img} alt="" height="100px" width="120px" style={{cursor: "pointer"}} />
                        </label>
                        <input type='file' name='photo' id='upload-photo' onChange={onImageChange} />
                    </div>

                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                        onChange={onNameChange}
                        value={name}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end">
                    <button className="btn-save d-inline mt-2" onClick={handleSubmit}>حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddCategory
