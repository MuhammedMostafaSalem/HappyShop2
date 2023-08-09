import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { applayCouponCart } from "../../Redux/Actions/CartAction";

const ApplayCouponHook = () => {
    const dispatch = useDispatch();
    const [couponName, setCouponName] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeCoupon = (e) => {
        setCouponName(e)
    }

    const validationValues = () => {
        if(couponName === '') {
            toast.warning('من فضلك ادخل الكوبون')
            return;
        }
    }

    const submitCouponHandel = async() => {
        validationValues();
        setLoading(true)
        await dispatch(applayCouponCart({
            couponName:couponName
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.CartReducer.applayCouponCart)

    useEffect(() => {
        if(loading === false) {
            if (res && res.status === 200) {
                console.log(res)
                toast.success("تم تطبيق الكوبون بنجاح")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);

            }
            else {
                toast.error("هذا الكوبون غير صحيح او منتهى الصلاحيه")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
        }
    }, [loading])

    return [couponName, onChangeCoupon, submitCouponHandel]
}

export default ApplayCouponHook