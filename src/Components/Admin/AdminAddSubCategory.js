import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AddSubCategoryhook from '../../CustomHook/SubCategory/AddSubCategoryhook'

const AdminAddSubCategory = () => {

    const [ id, name, categoryData, subCategory, handelChange, handelSubmit, onChangeName ] = AddSubCategoryhook();

    if(categoryData) {
        console.log(categoryData.data)
    }

    return (
        <div>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                        onChange={onChangeName}
                        value={name}
                    />
                    <select name="category" id="cat" className="select mt-3 px-2" onChange={handelChange}>
                        <option value="0">اختر تصنيف رئيسي</option>
                        {
                            categoryData.data ?
                                categoryData.data.map((item)=> {
                                    return (
                                        <option value={item._id} key={item._id}>{item.name}</option>
                                    )
                                })
                            : null
                        }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end">
                    <button className="btn-save d-inline mt-2" onClick={handelSubmit}>حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddSubCategory
