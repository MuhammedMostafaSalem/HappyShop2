import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../Redux/Actions/OrdersAction';
import { useEffect, useState } from 'react';

const UserGetAllOrderHook = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [results, setResult] = useState(0);
    const [paginate, setPaginate] = useState({});
    const [orderData, setOrderData] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))
    let userName = '';
    if(user !== null) {
        userName = user.name
    }

    const get = async() => {
        setLoading(true)
        await dispatch(getAllOrders('', 5))
        setLoading(false)
    }

    useEffect(()=> {
        get()
    }, [])

    //when click pagination
    const onPress = async (page) => {
        setLoading(true)
        await dispatch(getAllOrders(page, 5))
        setLoading(false)
    }

    const resGetOrders = useSelector(state => state.OrdersReducer.getAllOrders)
    useEffect(() => {
        if (loading === false) {
            try {
                if (resGetOrders.results) {
                    setResult(resGetOrders.results)
                }
                if (resGetOrders.paginationResult) {
                    setPaginate(resGetOrders.paginationResult)
                }
                if (resGetOrders.data) {
                    setOrderData(resGetOrders.data)
                }
            } catch(e) {}
        }
    }, [loading])

    return [userName, results, paginate, orderData, onPress]
}

export default UserGetAllOrderHook