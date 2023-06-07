import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/Actions/ProductAction';

const ViewSearchProductsHook = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    
    const allProduct = useSelector((state) => state.ProductReducer.allProduct)

    let items = []
    if(allProduct.data) {
        items = allProduct.data;
    }
    else {
        items = []
    }

    return [items]
}

export default ViewSearchProductsHook