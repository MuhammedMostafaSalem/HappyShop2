import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { createUserAddress } from "../../Redux/Actions/UserAddressAction"
import { useNavigate } from "react-router-dom"

const AddAddressHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [alias, setAlias] = useState('')
    const [detailsAddress, setDetailsAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(true)

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

    const onSubmit = async() => {
        validationValues()
        setLoading(true)
        await dispatch(createUserAddress({
            alias: alias,
            details: detailsAddress,
            phone: phone,
            city: city,
            postalCode: ''
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.UserAddressReducer.addUserAddress)

    useEffect(() => {
        if(loading === false) {
            console.log(res)
            if(res && res.status === 200) {
                toast.success('تم عملية اضافة العنوان بنجاح')
                setTimeout(() => {
                    navigate('/user/addresses')
                }, 2000);
            } else {
                toast.error("هناك مشكله فى عملية الاضافة")
            }
        }
    }, [loading])

    return [alias, onChangAlias, detailsAddress, onChangDetailsAddress, phone, onChangPhone, city, onChangCity, onSubmit]
}

export default AddAddressHook