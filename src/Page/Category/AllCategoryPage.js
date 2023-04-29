import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllCategoryPage } from '../../Redux/Actions/CategoryAction';

const AllCategoryPage = () => {

    const dispatch = useDispatch();

    // when first load
    useEffect(() => {
        dispatch(getAllCategory(4));
    }, [])

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
    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer categoryData={categoryData.data} loading={loading} />
            {
                pageCount > 1 ? <Pagination pageCount={pageCount} onPress={getPage} /> : null
            }
        </div>
    )
}

export default AllCategoryPage
