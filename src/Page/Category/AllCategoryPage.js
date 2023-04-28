import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/CategoryAction';

const AllCategoryPage = () => {
    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer />
            <Pagination />
        </div>
    )
}

export default AllCategoryPage
