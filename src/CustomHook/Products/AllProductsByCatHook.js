import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategoryId } from "../../Redux/Actions/ProductAction";
import { useEffect } from "react";

const AllProductsByCatHook = (catId) => {
    let limit = 8;

    const dispatch = useDispatch();
    
    const getProduct = async () => {
        await dispatch(getProductsByCategoryId('', limit, catId))
    }
    useEffect(() => {
        getProduct()
    }, [])
    
    const allProductCat = useSelector((state) => state.ProductReducer.allProductBycat)

    let items = []
    let pagination = [];

    try {
        if(allProductCat.data) {
            items = allProductCat.data;
        }
        else {
            items = []
        }
    } catch(e) {}

    try {
        if (allProductCat.paginationResult) {
            pagination = allProductCat.paginationResult.numberOfPages;
        }
        else {
            pagination = []
        }
    } catch(e) {}

    //when click pagination
    const onPress = async (page) => {
        await dispatch(getProductsByCategoryId(page, limit, catId))
    }

    return [items, pagination, onPress]
}

export default AllProductsByCatHook