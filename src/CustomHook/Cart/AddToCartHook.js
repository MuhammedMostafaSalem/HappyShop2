import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify';
import { addProductToCart } from "../../Redux/Actions/CartAction";

const AddToCartHook = (id, item) => {
    const dispatch = useDispatch();
    const [indexColor, setIndexColor] = useState('')
    const [colorText, setColorText] = useState('')
    const [loading, setLoading] = useState(true)

    // When user selects color
    const colorClick = (index, color) => {
        setIndexColor(index)
        setColorText(color)
    }

    const validationValues = () => {
        if(item.availableColors.length >= 1) {
            if(colorText === '') {
                toast.warning('من فضلك اختر لون اولا للمنتج')
                return;
            }
        } else {
            setColorText('')
        }
    }

    const addToCartHandel = async() => {
        console.log(item.availableColors)
        validationValues();
        setLoading(true)
        await dispatch(addProductToCart({
            productId: id,
            color: colorText
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.CartReducer.addToCart)

    useEffect(() => {
        if(loading === false) {
            console.log(res)
                if (res && res.status === 200) {
                    toast.success('اضافة المنتج للعربه')
                    setTimeout(() => {
                        window.location.reload(false)
                    }, 2000);
                } else {
                    toast.error('قم بتسجيل الدخول')
                }
            }
    }, [loading])

    return [indexColor, colorClick, addToCartHandel]
}

export default AddToCartHook