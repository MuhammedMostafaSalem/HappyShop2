import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCoupon } from "../../Redux/Actions/CouponAction";

const ViewAllCouponsHook = () => {
    const dispatch = useDispatch();
    const allCoupons = useSelector(state => state.CouponReducer.allCoupons)
    useEffect(() => {
        const get = async() => {
            await dispatch(getAllCoupon())
        }
        get();
    }, [])

    let coupons = []
    try {
        if(allCoupons && allCoupons.data.length >= 1) {
            coupons = allCoupons.data;
        }
    } catch(e) {}

    return [coupons]
}

export default ViewAllCouponsHook