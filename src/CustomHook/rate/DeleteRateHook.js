import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createRate, deleteRate } from "../../Redux/Actions/RateAction";

const DeleteRateHook = (review) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isUser, setIsUser] = useState(false)
    const [rateValue, setRateValue] = useState(0)
    const [loading, setLoading] = useState(true)
    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true);

    let user = JSON.parse(localStorage.getItem('user'))
    useEffect(()=> {
        if(review.user._id === user._id) {
            setIsUser(true);
        } else {
            setIsUser(false);
        }
    }, [])

    const handleDelete = async () => {
        setLoading(true)
        await dispatch(deleteRate(review._id))
        setLoading(false)
        handleClose();
    }
    const res = useSelector(state => state.RateReducer.deleteRate)
    useEffect(() => {
        if(loading === false) {
            console.log(res)
            if (res === "") {
                toast.success("تم حذف التقييم بنجاح")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
            else
                toast.error("هناك مشكله فى عملية المسح")
        }
    }, [loading])

    return [isUser, handleClose, handleShow, handleDelete, showDelete]
}

export default DeleteRateHook