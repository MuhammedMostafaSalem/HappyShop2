import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getAllProductsPage } from '../../Redux/Actions/ProductAction';

const ViewProductsAdminHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts(12))
    }, [])
    
    const allProduct = useSelector((state) => state.ProductReducer.allProduct)

    let items = []
    if(allProduct.data) {
        items = allProduct.data;
    }
    else {
        items = []
    }

    let pagination = []
    if(allProduct.paginationResult) {
        pagination = allProduct.paginationResult.numberOfPages;
    }
    else {
        pagination = []
    }

    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, 12))
    }

    return [items, pagination, onPress]
}

export default ViewProductsAdminHook