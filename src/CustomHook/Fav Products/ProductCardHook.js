import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProductToWishList, removeProductToWishList } from "../../Redux/Actions/WishListAction"
import { toast } from "react-toastify"
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";

const ProductCardHook = (item, favProd) => {
    const dispatch = useDispatch()
    const [favImg, setFavImg] = useState(favoff)
    const [loadingAdd, setLoadingAdd] = useState(true)
    const [loadingRemove, setLoadingRemove] = useState(true)
    let fav = favProd.some(favItem => favItem === item._id);
    const [isFav, setIsFav] = useState(fav)

    useEffect(()=> {
        setIsFav(favProd.some(favItem => favItem === item._id))
    }, [favProd])

    const handleFav = () => {
        if(isFav) {
            removeToWishListData()
        } else {
            addToWishListData()
        }
    }

    useEffect(()=> {
        if(isFav === true) {
            setFavImg(favon)
        } else {
            setFavImg(favoff)
        }
    }, [isFav])

    const resAdd = useSelector(state => state.WishListReducer.addWishList)
    const resRemove = useSelector(state => state.WishListReducer.removeWishList)

    const addToWishListData = async () => {
        setFavImg(favon)
        setIsFav(true)
        setLoadingAdd(true)
        await dispatch(addProductToWishList({
            productId: item._id,
        }))
        setLoadingAdd(false)
    }

    useEffect(()=> {
        if(loadingAdd === false) {
            console.log(resAdd)
            if(resAdd && resAdd.status === 200) {
                toast.success('تم اضافة المنتج لصفحة المنتجات المفضلة')
            } else if (resAdd && resAdd.status === 401) {
                toast.error("انتا غير مسجل")
            }
        }
    }, [loadingAdd])

    const removeToWishListData = async () => {
        setFavImg(favoff)
        setIsFav(false)
        setLoadingRemove(true)
        await dispatch(removeProductToWishList(item._id))
        setLoadingRemove(false)
    }

    useEffect(()=> {
        if(loadingRemove === false) {
            console.log(resRemove)
            if(resRemove && resRemove.status === "success") {
                toast.warning('تم ازالة المنتج من صفحة المنتجات المفضلة')
            } else if (resAdd && resAdd.status === 401) {
                toast.error("انتا غير مسجل")
            }
        }
    }, [loadingRemove])

    return [handleFav, favImg, addToWishListData, removeToWishListData]
}

export default ProductCardHook