import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory } from '../../Redux/Actions/CategoryAction'
import { toast } from 'react-toastify'

const AdminAddCategory = () => {
    const dispatch = useDispatch();

    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(true)

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


    const res = useSelector(state => state.AllCategory.category)


    // save date in database
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(name === '' || selectedFile === null) {
            toast.warning('من فضلك اكمل البيانات')
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);
        
        setLoading(true)

        if(res) {
            toast.info('جاري التحميل')
        }

        await dispatch(createCategory(formData))
        setLoading(false)
    }

    useEffect(() => {
        if(loading === false) {
            setImg(avatar)
            setName('')
            setSelectedFile(null)

            if(res.status === 201) {
                toast.success('تم عملية الاضافة بنجاح')
            }else {
                toast.error('هناك مشكلة في عملية الاضافة')
            }

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
        </div>
    )
}

export default AdminAddCategory
