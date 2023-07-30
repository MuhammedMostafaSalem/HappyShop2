import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAddresses } from "../../Redux/Actions/UserAddressAction";

const ViewAllAddressesHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const get = async() => {
            await dispatch(getAllUserAddresses())
        }
        get();
    }, [])

    const res = useSelector(state => state.UserAddressReducer.allUserAddresses)

    let allAddresses = [];
    try{
        if(res && res.data.length >= 1) {
            allAddresses = res.data;
        }
    } catch(e) {}

    return [allAddresses]
}

export default ViewAllAddressesHook