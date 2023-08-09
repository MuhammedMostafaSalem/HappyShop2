import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editQuantityCart } from "../../Redux/Actions/CartAction";

const EditQuantityCartHook = (item) => {
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(1)

    const onChangeCount = (e) => {
        setItemCount(e.target.value)
    }

    useEffect(() => {
        if (item) {
            setItemCount(item.count)
        }
    }, [])

    const editQuantityCartHandele = async() => {
        await dispatch(editQuantityCart(item._id, {
            count: itemCount
        }))

        window.location.reload(false);
    }

    return [itemCount, onChangeCount, editQuantityCartHandele]
}

export default EditQuantityCartHook