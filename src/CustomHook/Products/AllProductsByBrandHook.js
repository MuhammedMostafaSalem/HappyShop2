import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByBrandId } from "../../Redux/Actions/ProductAction";

const AllProductsByBrandHook = (brandId) => {
    let limit = 8;

    const dispatch = useDispatch();
    
    const getProduct = async () => {
        await dispatch(getProductsByBrandId('', limit, brandId))
    }
    useEffect(() => {
        getProduct()
    }, [])
    
    const allProductBrand = useSelector((state) => state.ProductReducer.allProductByBrand)

    let items = []
    let pagination = [];

    try {
        if(allProductBrand.data) {
            items = allProductBrand.data;
        }
        else {
            items = []
        }
    } catch(e) {}

    try {
        if (allProductBrand.paginationResult) {
            pagination = allProductBrand.paginationResult.numberOfPages;
        }
        else {
            pagination = []
        }
    } catch(e) {}

    //when click pagination
    const onPress = async (page) => {
        await dispatch(getProductsByBrandId(page, limit, brandId))
    }

    return [items, pagination, onPress]
}

export default AllProductsByBrandHook