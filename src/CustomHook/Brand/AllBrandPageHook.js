import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand, getAllBrandPage } from './../../Redux/Actions/BrandAction';

const AllBrandPageHook = () => {

    const dispatch = useDispatch();

    // when first load
    useEffect(() => {
        dispatch(getAllBrand(5));
    }, [dispatch])

    // to get state from redux
    const brandData = useSelector(state => state.AllBrand.brand)
    const loading = useSelector(state => state.AllBrand.loading)
    
    // to get page count
    let pageCount = 0 ;
    if(brandData.paginationResult) {
        pageCount = brandData.paginationResult.numberOfPages
    }

    // when press Pagination
    const getPage=(page)=> {
        dispatch(getAllBrandPage(page))
    }

    return [
        brandData,
        loading,
        pageCount,
        getPage,
    ]
}

export default AllBrandPageHook