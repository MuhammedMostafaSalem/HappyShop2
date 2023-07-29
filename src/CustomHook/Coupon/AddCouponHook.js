import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux';
import { createCoupon } from "../../Redux/Actions/CouponAction";

const AddCouponHook = () => {
    const dispatch = useDispatch()
    const [couponName, setCouponName] = useState('')
    const [couponDate, setCouponDate] = useState('')
    const [couponValue, setCouponValue] = useState('')
    const [loading, setLoading] = useState(true)

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

    const onSubmit = async () => {
        validationValues();
        setLoading(true)
        await dispatch(createCoupon({
            name: couponName,
            expire: couponDate,
            discount: couponValue
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.CouponReducer.addCoupon)

    useEffect(() => {
        if(loading === false) {
            if(res) {
                console.log(res)
                if(res && res.status === 201) {
                    toast.success('تمت اضافة الكوبون بنجاح')
                    setCouponName('')
                    setCouponDate('')
                    setCouponValue('')
                }
                if(res && res.status === 400) {
                    toast.error('هذا الكوبون موجود بالفعل')
                }
                if(res && res.status === 403) {
                    toast.error('انت غير مسموح لك بالاضافة')
                }
            }
        }
    }, [loading])

    return [couponName, couponDate, couponValue, onChangCouponName, onChangCouponDate, onChangCouponValue, onSubmit]
}

export default AddCouponHook