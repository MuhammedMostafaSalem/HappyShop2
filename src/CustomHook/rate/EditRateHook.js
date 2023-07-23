import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { editRate } from "../../Redux/Actions/RateAction";
const EditRateHook = (review) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [showEdit, setShowEdit] = useState(false);
    const [editRateText, setEditRateText] = useState(review.review);
    const [editRateValue, setEditRateValue] = useState(review.rating);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const validationValues = () => {
        if(editRateValue < 1) {
            toast.error('يجب ان يكون التقييم 1 او اكبر من 1')
            return;
        }
        if(editRateText === '') {
            toast.error('من فضلك اكتب تعليق')
            return;
        }
    }

    const handleEdit = async () => {
        validationValues()
        setLoading(true)
        await dispatch(editRate(review._id, {
            review: editRateText,
            rating: editRateValue
        }))
        setLoading(false)
        handleCloseEdit()
    }

    const onChangeRateText = (e) => {
        setEditRateText(e.target.value)
    }
    const onChangeRateValue = (e) => {
        console.log(e)
        setEditRateValue(e)
    }

    const res = useSelector(state => state.RateReducer.editRate);

    useEffect(() => {
        if(loading === false) {
            console.log(res)
            if(res.status && res.status === 200) {
                toast.success('تمت تعديل التقييم بنجاح')
                setTimeout(() => {
                    window.location.reload(false)
                }, 500);
            } else {
                toast.error('هناك مشكلة في عمليية التعديل')
            }
        }
    }, [loading])

    return [showEdit, handleCloseEdit, handleEdit, handleShowEdit, editRateText, onChangeRateText, editRateValue, onChangeRateValue]
}

export default EditRateHook