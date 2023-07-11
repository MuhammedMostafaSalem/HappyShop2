import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { verifyPassword } from "../../Redux/Actions/AuthAction";

const VerifyPasswordHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [code, setCode] = useState('')
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)

    const onChangeCode = (e) => {
        setCode(e.target.value)
    }

    const validationValues = () => {
        if(code === '') {
            toast.error('من فضلك ادخل الكود')
            return;
        }
    }
    
    const onSubmit = async () => {
        validationValues()
        setIsPress(true)
        setLoading(true)
        await dispatch(verifyPassword({
            resetCode:code,
        }))
        setLoading(false)
        setIsPress(false)
    }

    const res = useSelector(state => state.AuthReducer.verifyPassword)

    useEffect(() => {
        if(loading === false) {
            if(res) {
                console.log(res)
                if(res.data.status === 'Success') {
                    toast.success('كود التفعيل صحيح')
                    setTimeout(() => {
                        navigate('/reset-password')
                    }, 2000)
                }
                if(res.data.status === 'fail') {
                    toast.error('انتهت صلحية هذا الكود')
                }
            }
        }
    }, [loading])
    

    return [onChangeCode, code, onSubmit, loading, isPress]
}

export default VerifyPasswordHook