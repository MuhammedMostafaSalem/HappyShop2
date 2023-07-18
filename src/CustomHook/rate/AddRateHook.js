import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from "../../Redux/Actions/AuthAction";
import { toast } from 'react-toastify';
import { createRate } from "../../Redux/Actions/RateAction";

const AddRateHook = (id) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [rateText, setRateText] = useState('')
    const [rateValue, setRateValue] = useState(0)
    const [loading, setLoading] = useState(true)

    const onChangeRateText = (e) => {
        setRateText(e.target.value)
    }
    const onChangeRateValue = (val) => {
        setRateValue(val)
    }

    let user;
    if(localStorage.getItem('user') != null){
        user = JSON.parse(localStorage.getItem('user'));
    } else {
        user = '';
    }
    
    const validationValues = () => {
        if(rateValue < 1) {
            toast.error('يجب ان يكون التقييم 1 او اكبر من 1')
            return;
        }
        if(rateText === '') {
            toast.error('من فضلك اكتب تعليق')
            return;
        }
    }
    
    const onSubmit = async () => {
        validationValues()
        // localStorage.setItem('user-email', email)
        setLoading(true)
        await dispatch(createRate(id, {
            review: rateText,
            rating: rateValue
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.RateReducer.createRate)

    useEffect(() => {
        if(loading === false) {
            if(res) {
                console.log(res)
                if(res.status && res.status === 201) {
                    toast.success('تمت اضافة التقييم بنجاح')
                    setTimeout(() => {
                        window.location.reload(false)
                    }, 1000);
                }
                if(res.data.errors && res.data.errors[0].msg === 'You already added review on this product') {
                    toast.error('لقد قمت باضافة تقييم لهذا المنتج مسبقا')
                }
                if(res.status && res.status === 403) {
                    toast.error('غير مسموح للادمن بالتقييم')
                }
            }
        }
    }, [loading])
    

    return [rateText, onChangeRateText, rateValue, onChangeRateValue, user, onSubmit]
}

export default AddRateHook