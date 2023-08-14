import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import AllUserCartHook from "../Cart/AllUserCartHook"
import { createCardOrder } from "../../Redux/Actions/CheckOutCashAction"

const OrderPayCardHook = (addressDetalis) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [itemsNums, cartItems, totalPriceCart, totalPriceAfterDiscount, couponNameRes, cartID] = AllUserCartHook()

    

    const validationCreateOrderCard = () => {
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
    const createOrderCardDandle = async() => {
        validationCreateOrderCard()
        setLoading(true)
        await dispatch(createCardOrder(cartID, {
            shippingAddress:{
                details: addressDetalis.alias,
                phone: addressDetalis.phone,
                city: "",
                postalCode: ""
            }
        }))
        setLoading(false)
    }

    const resOrserCard = useSelector(state => state.CheckOutCashReducer.createOrderCard)

    useEffect(() => {
        if(loading === false) {
            console.log(resOrserCard)
            if(resOrserCard && resOrserCard.status === "success") {
                toast.success('تم انشاء طلبك')
                if(resOrserCard.session.url) {
                    window.open(resOrserCard.session.url)
                }
            } else {
                toast.error('فشل فى اكمال الطلب من فضلك حاول مره اخرى')
            }
        }
    }, [loading])

    return [createOrderCardDandle]
}

export default OrderPayCardHook