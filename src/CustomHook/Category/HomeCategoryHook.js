import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/CategoryAction';

const HomeCategoryHook = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    // get last category state from redux
    const categoryData = useSelector(state => state.AllCategory.category)
    // get last loading state from redux
    const loading = useSelector(state => state.AllCategory.loading)
    const colors = ['#ffd3eb', '#f4dba5', '#55cfdf', '#ff6262', '#0034ff', '#ffd3e8']

    let items = []
    try {
        if(categoryData.data) {
            items = categoryData.data.slice(0, 6);
        }
        else {
            items = []
        }
    } catch(e) {}

    return [
        items,
        loading,
        colors,
    ]
}

export default HomeCategoryHook