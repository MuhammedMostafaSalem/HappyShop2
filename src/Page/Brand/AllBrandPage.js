import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import AllBrandPageHook from '../../CustomHook/Brand/AllBrandPageHook';
const AllBrand = () => {

    const [ brandData, loading, pageCount, getPage ] = AllBrandPageHook();

    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer brandData={brandData.data} loading={loading} />
            {
                pageCount > 1 ? <Pagination pageCount={pageCount} onPress={getPage}/> : null
            }
        </div>
    )
}

export default AllBrand
