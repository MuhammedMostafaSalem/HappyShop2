import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllCategoryPage } from '../../Redux/Actions/CategoryAction';

const AllCategoryPageHook = () => {

    const dispatch = useDispatch();

    // when first load
    useEffect(() => {
        dispatch(getAllCategory(5));
    }, [dispatch])

    // to get state from redux
    const categoryData = useSelector(state => state.AllCategory.category)
    const loading = useSelector(state => state.AllCategory.loading)
    
    // to get page count
    let pageCount = 0 ;
    if(categoryData.paginationResult) {
        pageCount = categoryData.paginationResult.numberOfPages
    }

    // when press Pagination
    const getPage=(page)=> {
        dispatch(getAllCategoryPage(page))
    }

    return [
        categoryData,
        loading,
        pageCount,
        getPage,
    ]
}

export default AllCategoryPageHook