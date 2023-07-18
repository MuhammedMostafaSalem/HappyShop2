import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { getAllRate } from "../../Redux/Actions/RateAction";

const ViewAllRateHook = (id) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const allRate = useSelector(state => state.RateReducer.allRateProduct)

    useEffect(() => {
        setLoading(true)
        dispatch(getAllRate(id, 1,5));
        setLoading(false)
    }, [dispatch])

    // to get page count
    let pageCount = 0 ;
    if(allRate.paginationResult) {
        pageCount = allRate.paginationResult.numberOfPages
    }

    // when press Pagination
    const getPage= async (page)=> {
        await dispatch(getAllRate(id, page, 5))
    }

    return [allRate, getPage, pageCount]
}

export default ViewAllRateHook