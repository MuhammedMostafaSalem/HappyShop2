import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/CategoryAction';

const AllCategoryPage = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const data = useSelector(state => state.AllCategory.category)
    const loading = useSelector(state => state.AllCategory.loading)
    console.log(data.data, loading)

    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer />
            <Pagination />
        </div>
    )
}

export default AllCategoryPage
