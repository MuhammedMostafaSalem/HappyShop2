import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllCategoryPage } from '../../Redux/Actions/CategoryAction';

const AllCategoryPageHook = () => {

    const dispatch = useDispatch();

    // when first load
    useEffect(() => {
        const get = async() => {
            await dispatch(getAllCategory(5));
        }
        get();
    }, [dispatch])

    // to get state from redux
    const categoryData = useSelector(state => state.AllCategory.category)
    const loading = useSelector(state => state.AllCategory.loading)
    
    // to get page count
    let pageCount = 0 ;
    try {
        if(categoryData.paginationResult) {
            pageCount = categoryData.paginationResult.numberOfPages
        }
    } catch (e) {}

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