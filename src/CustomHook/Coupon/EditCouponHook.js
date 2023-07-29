import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editCoupon, getOneCoupon } from '../../Redux/Actions/CouponAction'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const EditCouponHook = (id) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [couponName, setCouponName] = useState('')
    const [couponDate, setCouponDate] = useState('')
    const [couponValue, setCouponValue] = useState('')
    const [loading, setLoading] = useState(true)
    const [loadingData, setLoadingData] = useState(true)

    const oneCoupon = useSelector(state => state.CouponReducer.getOneCoupons)

    useEffect(() => {
        const get = async() => {
            setLoadingData(true)
            await dispatch(getOneCoupon(id))
            setLoadingData(false)
        }
        get();
    }, [])

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    useEffect(() => {
        if(loadingData === false) {
            console.log(loadingData)
            if(oneCoupon.data) {
                setCouponName(oneCoupon.data.name)
                setCouponDate(formatDate(oneCoupon.data.expire))
                setCouponValue(oneCoupon.data.discount)
            }
        }
    }, [loadingData])

    const onChangCouponName = (e) => {
        e.persist();
        setCouponName(e.target.value)
    }
    
    const onChangCouponDate = (e) => {
        e.persist();
        setCouponDate(e.target.value)
    }
    
    const onChangCouponValue = (e) => {
        e.persist();
        setCouponValue(e.target.value)
    }

    const validationValues = () => {
        if(couponName === '') {
            toast.warning('من فضلك ادخل اسم الكوبون')
            return;
        }
        if(couponDate === '') {
            toast.warning('من فضلك ادخل تاريخ انتهاء صلاحية هذا الكوبون')
            return;
        }
        if(couponValue <= 0) {
            toast.warning('من فضلك ادخل نسبة الخصم')
            return;
        }
    }

    const onSubmit = () => {
        validationValues();
        setLoading(true)
        const get = async() => {
            await dispatch(editCoupon(id, {
                name: couponName,
                expire: couponDate,
                discount: couponValue
            }))
        }
        get();
        setLoading(false)
    }

    const res = useSelector(state => state.CouponReducer.editCoupons)

    useEffect(()=> {
        if(loading === false) {
            console.log(res)
            if(res) {
                toast.success('تمت عملية التعديل بنجاح')
                setTimeout(() => {
                    navigate('/admin/allcoupons')
                }, 1500);
            } else {
                toast.error('من فضلط اكمل التعديل')
            }
        }
    }, [loading])

    return [couponName, couponDate, couponValue, onChangCouponName, onChangCouponDate, onChangCouponValue, onSubmit]
}

export default EditCouponHook