import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
import { useDispatch } from 'react-redux'
import { createCategory } from '../../Redux/Actions/CategoryAction'

const AdminAddCategory = () => {
    const dispatch = useDispatch();

    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)

    // when image change save it
    const onImageChange = (e) => {
        if(e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }

    // when name change save it
    const onNameChange = (e) => {
        setName(e.target.value)
    }

    // save date in database
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);
        
        setLoading(true)
        setIsPress(true)
        console.log('جاري التحميل')
        await dispatch(createCategory(formData))
        setLoading(false)
    }

    useEffect(() => {
        if(loading === false) {
            setImg(avatar)
            setName('')
            setSelectedFile(null)
            setTimeout(() => setIsPress(false) , 3000)
            console.log('تم الانتهاء من التحميل')
        }
    }, [loading])
    

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
            {
                isPress ? loading ? <h3>جاري التحميل</h3> : <h3>تم الانتهاء</h3> : null
            }
        </div>
    )
}

export default AdminAddCategory
