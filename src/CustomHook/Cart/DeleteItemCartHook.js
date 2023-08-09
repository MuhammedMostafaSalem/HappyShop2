import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemCart } from "../../Redux/Actions/CartAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DeleteItemCartHook = (item) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const deleteItemCartHandle = async() => {
        setLoading(true)
        await dispatch(deleteItemCart(item._id))
        setLoading(false)
    }
    
    const res = useSelector(state  => state.CartReducer.deleteItemCart)

    useEffect(() => {
        if(loading === false) {
            console.log(res)
            if(res && res.status === 'success') {
                toast.success('تم حذف هذا المنتج من عربة التسوق')
            }
            if(res.numOfCartItems === 0) {
                setTimeout(() => {
                    navigate('/products')
                    window.location.reload(false);
                }, 2000)
            }
            else {
                toast.error('هناك مشكلة في عملية حذف هذا المنتج')
            }
        }
    }, [loading])

    return [deleteItemCartHandle]
}

export default DeleteItemCartHook