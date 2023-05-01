import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getAllCategoryPage } from '../../Redux/Actions/CategoryAction';
import AllCategoryPageHook from '../../CustomHook/Category/AllCategoryPageHook';

const AllCategoryPage = () => {

    const [ categoryData, loading, pageCount, getPage ] = AllCategoryPageHook();

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
