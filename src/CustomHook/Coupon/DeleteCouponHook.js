import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCoupon } from "../../Redux/Actions/CouponAction";
import { toast } from "react-toastify";

const DeleteCouponHook = (item) => {
    // delete admin coupon
    const dispatch = useDispatch();
    const [showDelete, setShowDelete] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);


    const handleDelete = async () => {
        await dispatch(deleteCoupon(item._id))
        toast.success("تم حذف الكوبون بنجاح")
        setTimeout(() => {
            window.location.reload(false)
        }, 2000);
        setShowDelete(false);
    }

    return [showDelete, handleCloseDelete, handleShowDelete, handleDelete]
}

export default DeleteCouponHook