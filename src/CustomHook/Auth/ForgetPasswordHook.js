import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from "../../Redux/Actions/AuthAction";
import { toast } from 'react-toastify';

const ForgetPasswordHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const validationValues = () => {
        if(email === '') {
            toast.error('حقل الايميل مطلوب')
            return;
        }
    }
    
    const onSubmit = async () => {
        validationValues()
        setIsPress(true)
        setLoading(true)
        await dispatch(forgetPassword({
            email,
        }))
        setLoading(false)
        setIsPress(false)
    }

    const res = useSelector(state => state.AuthReducer.forgetPassword)

    useEffect(() => {
        if(loading === false) {
            if(res) {
                console.log(res)
                if(res.data.status === 'Success') {
                    toast.success('تم ارسال الكود اللي الايميل')
                    setTimeout(() => {
                        navigate('/verify-code')
                    }, 2000)
                }
                if(res.data.status === 'fail') {
                    toast.error('هذا الحساب ليس موجود')
                }
            }
        }
    }, [loading])
    

    return [onChangeEmail, email, onSubmit, loading, isPress]
}

export default ForgetPasswordHook