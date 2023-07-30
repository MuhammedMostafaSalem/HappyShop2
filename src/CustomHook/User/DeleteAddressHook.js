import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserAddress } from "../../Redux/Actions/UserAddressAction";
import { toast } from 'react-toastify';

const DeleteAddressHook = (item) => {
    const dispatch = useDispatch();
    const [showDelete, setShowDelete] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);


    const handleDelete = async () => {
        await dispatch(deleteUserAddress(item._id))
        toast.success("تم حذف العنوان بنجاح")
        setTimeout(() => {
            window.location.reload(false)
        }, 2000);
        setShowDelete(false);
    }

    return [showDelete, handleCloseDelete, handleShowDelete, handleDelete]
}

export default DeleteAddressHook