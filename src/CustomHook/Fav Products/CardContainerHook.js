import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductToWishList } from "../../Redux/Actions/WishListAction";

const CardContainerHook = () => {
    const dispatch = useDispatch();

    const [favProd, setFavProd] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getProductToWishList())
            setLoading(false)
        }
        get();
    }, [])
    
    const res = useSelector(state => state.WishListReducer.getUserWishList)
    
    useEffect(() => {
        if(loading === false) {
            try {
                if (res.data.length >= 1) {
                    console.log(res.data.map(item => item._id))
                    setFavProd(res.data.map(item => item._id))
                } else {
                    setFavProd([])
                }
            } catch(e) {}
        }
    }, [loading])

    return [favProd]
}

export default CardContainerHook