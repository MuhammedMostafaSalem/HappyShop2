import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneUserAddress } from "../../Redux/Actions/UserAddressAction"
import AllUserCartHook from "../Cart/AllUserCartHook"
import { toast } from 'react-toastify';
import { createCashOrder } from "../../Redux/Actions/CheckOutCashAction";
import { useNavigate } from 'react-router-dom';

const OrderPayCashHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [addressDetalis, setAddressDetalis] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingCreateOrder, setLoadingCreateOrder] = useState(true)
    const [itemsNums, cartItems, totalPriceCart, totalPriceAfterDiscount, couponNameRes, cartID] = AllUserCartHook()

    //when change address by user
    const chooseAddressHandle = (e) => {
        setAddressDetalis([])
        if(e.target.value !== '0') {
            get(e.target.value)
        }
    }

    const get = async(id) => {
        setLoading(true)
        await dispatch(getOneUserAddress(id))
        setLoading(false)
    }

    //get address detalis for user
    const resAddress = useSelector(state => state.UserAddressReducer.getOneAddress)

    useEffect(() => {
        if(loading === false) {
            if(resAddress && resAddress.status === "success") {
                setAddressDetalis(resAddress.data)
            } else {
                setAddressDetalis([])
            }
        }
    }, [loading])

    const validationCreateOrderCash = () => {
        if(cartID === '0') {
            toast.warning('من فضلك اضف منتجات الى العربه')
            return;
        }
        if(addressDetalis.length <= 0) {
            toast.warning('من فضلك اختر عنوان اولا')
            return;
        }
    }

    //when user click
    const createOrderCashDandle = async() => {
        validationCreateOrderCash()
        setLoadingCreateOrder(true)
        await dispatch(createCashOrder(cartID, {
            shippingAddress:{
                details: addressDetalis.alias,
                phone: addressDetalis.phone,
                city: "",
                postalCode: ""
            }
        }))
        setLoadingCreateOrder(false)
    }

    const resOrserCash = useSelector(state => state.CheckOutCashReducer.createOrderCash)

    useEffect(() => {
        if(loadingCreateOrder === false) {
            console.log(resOrserCash)
            if(resOrserCash && resOrserCash.status === 201) {
                toast.success('تم انشاء طلبك')
                // setTimeout(() => {
                //     navigate('/user/allorders')
                // }, 2000);
            } else {
                toast.error('فشل فى اكمال الطلب من فضلك حاول مره اخرى')
            }
        }
    }, [loadingCreateOrder])

    return [addressDetalis, chooseAddressHandle, createOrderCashDandle, totalPriceCart]
}

export default OrderPayCashHook