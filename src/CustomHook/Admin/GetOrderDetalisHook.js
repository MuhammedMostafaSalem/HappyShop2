import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneOrder } from "../../Redux/Actions/OrdersAction";

const GetOrderDetalisHook = (prodID) => {
    const dispatch = useDispatch();
    const [orderData, setOrderData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const get = async() => {
        setLoading(true)
        await dispatch(getOneOrder(prodID))
        setLoading(false)
    }

    useEffect(() => {
        get()
    }, [])

    const resOneOrder = useSelector(state => state.OrdersReducer.getOneOrder)
    
    useEffect(() => {
        if(loading === false) {
            try {
                if(resOneOrder.data) {
                    setOrderData(resOneOrder.data)
                }
                if(resOneOrder.data.cartItems) {
                    setCartItems(resOneOrder.data.cartItems)
                }
            } catch(e) {}
        }
    }, [loading])

    return [orderData, cartItems]
}

export default GetOrderDetalisHook