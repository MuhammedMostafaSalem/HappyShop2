import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getAllProductsPage } from '../../Redux/Actions/ProductAction';

const ViewProductsAdminHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts(12))
    }, [])
    
    const allProduct = useSelector((state) => state.ProductReducer.allProduct)

    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, 12))
    }

    
    let items = []
    let pagination = []

    try {
        if(allProduct.data) {
            items = allProduct.data;
        }
        else {
            items = []
        }
    
        if(allProduct.paginationResult) {
            pagination = allProduct.paginationResult.numberOfPages;
        }
        else {
            pagination = []
        }
    } catch(e) {}

    return [items, pagination, onPress]
}

export default ViewProductsAdminHook