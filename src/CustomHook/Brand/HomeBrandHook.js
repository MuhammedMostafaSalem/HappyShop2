import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from './../../Redux/Actions/BrandAction';

const HomeBrandHook = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllBrand());
    }, [])

    // get last brand state from redux
    const brandData = useSelector(state => state.AllBrand.brand)
    // get last loading state from redux
    const loading = useSelector(state => state.AllBrand.loading)

    let items = []
    try {
        if(brandData.data) {
            items = brandData.data.slice(0, 6);
        }
        else {
            items = []
        }
    } catch(e) {}

    return [
        items,
        loading,
    ]
}

export default HomeBrandHook