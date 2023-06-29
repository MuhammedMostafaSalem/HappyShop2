import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/Actions/AuthAction';

const LoginHook = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)
    
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const validationValues = () => {
        if(email === '') {
            toast.error('حقل الايميل مطلوب')
            return;
        }
        if(password === '') {
            toast.error('كلمة المرور مطلوبة')
            return;
        }
    }

    const onSubmit = async () => {
        setIsPress(true)
        setLoading(true)
        validationValues();
        await dispatch(loginUser({
            email,
            password
        }))
        setLoading(false)
        setIsPress(false)
    }

    const res = useSelector(state => state.AuthReducer.loginUser)

    useEffect(() => {
        if(loading === false) {
            if(res) {
                console.log(res)
                if(res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify(res.data.data))
                    toast.success('تم تسجيل الدخول بنجاح')
                    setTimeout(() => {
                        window.location.href = '/'
                    }, 2000);
                } else {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                }

                
                if(res.data.message === 'Incorrect email or password') {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    toast.error('يوجد خطأ في الايميل او كلمة السر')
                }
                setLoading(true)
            }
        }
    }, [loading])

    return [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress]
}

export default LoginHook