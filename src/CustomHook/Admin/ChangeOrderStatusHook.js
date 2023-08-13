import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderDeliver, changeOrderPay } from "../../Redux/Actions/OrdersAction";
import { toast } from 'react-toastify';

const ChangeOrderStatusHook = (id) => {
    const dispatch = useDispatch();
    const [pay, setPay] = useState(0);
    const [deliver, setDeliver] = useState(0);
    const [loading, setLoading] = useState(true);
    const [loadingDeliver, setLoadingDeliver] = useState(true);
    
    const onChangePaid = (e) => {
        setPay(e.target.value)
    }

    const onChangeDeliver = (e) => {
        setDeliver(e.target.value)
    }

    const changePayOrder = async () => {
        if(pay === 'true') {
            console.log(pay)
            setLoading(true)
            await dispatch(changeOrderPay(id))
            setLoading(false)
        } else if (pay === '0') {
            console.log('من فضلك اختر قيمة')
            toast.warning('من فضلك اختر قيمة')
        }
    }

    const changeDeliverOrder = async () => {
        if (deliver === 'true') {
            setLoadingDeliver(true)
            await dispatch(changeOrderDeliver(id))
            setLoadingDeliver(false)
        } else if (deliver === '0') {
            console.log('من فضلك اختر قيمة')
            toast.warning('من فضلك اختر قيمة')
        }
    }

    const resOneOrder = useSelector(state => state.OrdersReducer.changePay)

    useEffect(() => {
        if (loading === false) {
            if (resOneOrder && resOneOrder.status === 200) {
                toast.success("تم تغير حالة الدفع بنجاح")
                setTimeout(() => {
                    window.location.reload(false)
                }, 2000);
            } else {
                toast.error("هناك مشكله فى عملية التغير")
            }
        }
    }, [loading])

    const resDeliverOrder = useSelector(state => state.OrdersReducer.changeDeliver)

    useEffect(() => {
        if (loadingDeliver === false) {
            if (resDeliverOrder && resDeliverOrder.status === 200) {
                toast.success("تم تغير حالة التوصيل بنجاح")
                setTimeout(() => {
                    window.location.reload(false)
                }, 2000);
            } else {
                toast.error("هناك مشكله فى عملية التغير")
            }
        }
    }, [loadingDeliver])

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return [onChangePaid, onChangeDeliver, changePayOrder, changeDeliverOrder, formatDate]
}

export default ChangeOrderStatusHook