import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetPassword } from "../../Redux/Actions/AuthAction";

const ResetPasswordHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const validationValues = () => {
        if(password === '') {
            toast.error('من فضلك ادخل كلمة السر')
            return;
        }
        if(password !== confirmPassword) {
            toast.error('كلمة السر غير متابقة')
            return;
        }
    }
    
    const onSubmit = async () => {
        validationValues()
        setIsPress(true)
        setLoading(true)
        await dispatch(resetPassword({
            email:localStorage.getItem('user-email'),
            newPassword: password,
        }))
        setLoading(false)
        setIsPress(false)
    }

    const res = useSelector(state => state.AuthReducer.resetPassword)

    useEffect(() => {
        if(loading === false) {
            if(res) {
                console.log(res)
                if(res.status === 200) {
                    toast.success('تم تغيير كلمة السر بنجاح')
                    setTimeout(() => {
                        navigate('/login')
                    }, 1500)
                }
                if(res.status === 400) {
                    toast.error('من فضلك اطلب كود تفعيل جديد')
                }
            }
        }
    }, [loading])
    

    return [onChangePassword, onChangeConfirmPassword, password, confirmPassword, onSubmit, loading, isPress]
}

export default ResetPasswordHook