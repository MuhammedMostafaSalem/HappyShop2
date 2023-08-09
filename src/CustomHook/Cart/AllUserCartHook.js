import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCart } from "../../Redux/Actions/CartAction"

const AllUserCartHook = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [itemsNums, setItemsNums] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [totalPriceCart, setTotalOriceCart] = useState(0)
    const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0)
    const [couponNameRes, setCouponNameRes] = useState('')

    useEffect(() => {
        const get = async() => {
            setLoading(true)
            await dispatch(getAllCart())
            setLoading(false)
        }
        get()
    }, [])

    const res = useSelector(state => state.CartReducer.getAllCart)
    useEffect(() => {
        if(loading === false) {
            if(res && res.status === "success") {
                setItemsNums(res.numOfCartItems)
                setCartItems(res.data.products)
                setTotalOriceCart(res.data.totalCartPrice)
                if(res.data.coupon) {
                    setCouponNameRes(res.data.coupon)
                } else {
                    setCouponNameRes('')
                }
                if(res.data.totalAfterDiscount) {
                    setTotalPriceAfterDiscount(res.data.totalAfterDiscount)
                } else {
                    setTotalPriceAfterDiscount('')
                }
            } else {
                setItemsNums(null)
                setCartItems([])
                setTotalOriceCart(0)
                setCouponNameRes('')
                setTotalPriceAfterDiscount('')
            }
        }
    }, [loading])

    return [itemsNums, cartItems, totalPriceCart, totalPriceAfterDiscount, couponNameRes]
}

export default AllUserCartHook