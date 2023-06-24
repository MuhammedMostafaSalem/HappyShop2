import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../Redux/Actions/AuthAction';
import { useNavigate } from 'react-router-dom';

const RegisterHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [eMail, setEMail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEMail(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const validationValues = () => {
        if(name === '') {
            toast.error('من فضلك ادخل اسم المستخدم')
            return;
        }
        if(phone.length <= 10) {
            toast.error('من فضلك ادخل رقم الهاتف صحيح')
            return;
        }
        if(password !== confirmPassword) {
            toast.error('من فضلك تأكد من كلمة السر')
            return;
        }
    }

    const res = useSelector(state => state.AuthReducer.createUser)

    //save data
    const onSubmit = async () => {
        validationValues();
        setLoading(true)
        await dispatch(createNewUser({
            name,
            email:eMail,
            password,
            passwordConfirm:confirmPassword,
            phone,
        }))
        setLoading(false)
    }

    useEffect(() => {
        if(loading === false) {
            if(res) {
                console.log(res)
                // When user data is entered for the first time
                if(res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    toast.success("تم تسجيل الحساب بنجاح")
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000);
                }

                // When the same user data is entered again
                if(res.data.errors) {
                    if(res.data.errors[0].msg === 'must be at least 3 chars') {
                        toast.error("يجب ان لا يقل اسم المستخدم عن 3 احرف")
                    }
                    if(res.data.errors[0].msg === 'E-mail already in use') {
                        toast.error('هذا الايميل مستخدم بالفعل')
                    }
                    if(res.data.errors[0].msg === 'accept only egypt phone numbers') {
                        toast.error("يجب ان يكون الرقم مصري مكون من 11 رقم")
                    }
                    if(res.data.errors[0].msg === 'must be at least 6 chars') {
                        toast.error("يجب ان لا تقل كلمه السر عن 6 احرف او ارقام")
                    }
                }
            }
        }
    }, [loading])
    

    return [ name, eMail, phone, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword, onSubmit ]
}

export default RegisterHook