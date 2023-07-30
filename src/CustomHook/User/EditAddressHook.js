import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUserAddress, getOneUserAddress } from "../../Redux/Actions/UserAddressAction"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const EditAddressHook = (id) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [alias, setAlias] = useState('')
    const [detailsAddress, setDetailsAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(true)
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
        const get = async() => {
            setLoadingData(true)
            await dispatch(getOneUserAddress(id))
            setLoadingData(false)
        }
        get();
    }, [])

    const oneAddress = useSelector(state => state.UserAddressReducer.getOneAddress)

    useEffect(() => {
        if(loadingData === false) {
            console.log(oneAddress)
            if(oneAddress.data) {
                setAlias(oneAddress.data.alias)
                setDetailsAddress(oneAddress.data.details)
                setPhone(oneAddress.data.phone)
                setCity(oneAddress.data.city)
            }
        }
    }, [loadingData])

    const onChangAlias = (e) => {
        e.persist();
        setAlias(e.target.value)
    }
    
    const onChangDetailsAddress = (e) => {
        e.persist();
        setDetailsAddress(e.target.value)
    }
    
    const onChangPhone = (e) => {
        e.persist();
        setPhone(e.target.value)
    }
    
    const onChangCity = (e) => {
        e.persist();
        setCity(e.target.value)
    }

    const validationValues = () => {
        if(alias === '') {
            toast.warning('من فضلك ادخل اسم العنوان')
            return;
        }
        if(detailsAddress === '') {
            toast.warning('من فضلك ادخل تفاصيل العنوان')
            return;
        }
        if(phone === '') {
            toast.warning('من فضلك ادخل رقم الهاتف')
            return;
        }
        if(city === '') {
            toast.warning('من فضلك ادخل اسم المدينة')
            return;
        }
    }

    const onSubmit = () => {
        validationValues();
        setLoading(true)
        const get = async() => {
            await dispatch(editUserAddress(id, {
                alias: alias,
                details: detailsAddress,
                phone: phone,
                city: city,
            }))
        }
        get();
        setLoading(false)
    }

    const res = useSelector(state => state.UserAddressReducer.editAddress)

    useEffect(()=> {
        if(loading === false) {
            console.log(res)
            if (res) {
                toast.success("تمت عملية التعديل بنجاح")
                setTimeout(() => {
                    navigate('/user/addresses')
                }, 1500);
            } else {
                toast.error("فشل فى عملية التعديل")
            }
        }
    }, [loading])

    return [alias, onChangAlias, detailsAddress, onChangDetailsAddress, phone, onChangPhone, city, onChangCity, onSubmit]
}

export default EditAddressHook