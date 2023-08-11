import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, getProductLike } from '../../Redux/Actions/ProductAction';
import mobile from '../../images/mobile.png'
import { getOneCategory } from '../../Redux/Actions/CategoryAction';
import { getOneBrand } from '../../Redux/Actions/BrandAction';

const ViewProductsDetalisHook = (prodID) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneProduct(prodID))
    }, [])
    
    const oneProduct = useSelector((state) => state.ProductReducer.oneProduct)
    const oneCategory = useSelector((state) => state.AllCategory.oneCategory)
    const oneBrand = useSelector((state) => state.AllBrand.oneBrand)
    const productLike = useSelector((state) => state.ProductReducer.productLike)

    // to show product item
    let item = []
    try {
        if(oneProduct.data) {
            item = oneProduct.data;
        }
        else {
            item = []
        }
    } catch(e) {}



    useEffect(() => {
        if(item.category) {
            dispatch(getOneCategory(item.category))
        }
        if(item.brand) {
            dispatch(getOneBrand(item.brand))
        }
        if(item.category) {
            dispatch(getProductLike(item.category))
        }
    }, [item])



    // to view images gallery
    let images = []
    if(item.images) {
        images = item.images.map((img) => {
            return {original: img}
        })
    }
    else {
        images = [
            {
                original: `${mobile}`,
            },
        ]
    }

    // to show cat item
    let cat = []
    if(oneCategory.data) {
        cat = oneCategory.data;
    }
    else {
        cat = []
    }

    // to show brand item
    let brand = []
    if(oneBrand.data) {
        brand = oneBrand.data;
    }
    else {
        brand = []
    }

    // to show productLike item
    let prodLike = []
    if (productLike) {
        prodLike = productLike.data;
    }
    else {
        prodLike = []
    }

    return [item, images, cat, brand, prodLike]
}

export default ViewProductsDetalisHook