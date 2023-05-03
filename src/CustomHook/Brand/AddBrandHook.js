import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createBrand } from './../../Redux/Actions/BrandAction';
import avatar from '../../images/avatar.png';

const AddBrandHook = () => {

    const dispatch = useDispatch();

    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(true)

    // when image change save it
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }

    // when name change save it
    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const res = useSelector(state => state.AllBrand.brand)

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

        await dispatch(createBrand(formData))

        setLoading(false)
    }

    useEffect(()=> {
        if(loading === false) {
            setImg(avatar)
            setName('')

            if(res.status === 201) {
                toast.success('تم عملية الاضافة بنجاح')
            }else {
                toast.error('هناك مشكلة في عملية الاضافة')
            }
        }
    }, [loading])
    return [
        img,
        name,
        loading,
        onImageChange,
        onNameChange,
        handleSubmit,
    ]
}

export default AddBrandHook