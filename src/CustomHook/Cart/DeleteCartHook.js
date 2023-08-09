import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteAllCart } from "../../Redux/Actions/CartAction";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const DeleteCartHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const deleteAllCartHandle = async() => {
        setLoading(true)
        await dispatch(deleteAllCart())
        setLoading(false)
    }
    
    const res = useSelector(state  => state.CartReducer.deleteAllCart)

    useEffect(() => {
        if(loading === false) {
            console.log(res)
            if(res === '') {
                toast.success('تم حذف جميع المنتجات من عربة التسوق')
                setTimeout(() => {
                    navigate('/products')
                }, 2000)
            }
        }
    }, [loading])

    return [deleteAllCartHandle]
}

export default DeleteCartHook