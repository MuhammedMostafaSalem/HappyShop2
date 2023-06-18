import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../Redux/Actions/ProductAction';

const ViewHomeProductsHook = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    
    const allProduct = useSelector((state) => state.ProductReducer.allProduct)

    let items = []

    try {
        if(allProduct.data) {
            items = allProduct.data.slice(0, 4);
        }
        else {
            items = []
        }
    } catch(e) {}

    return [items]
}

export default ViewHomeProductsHook