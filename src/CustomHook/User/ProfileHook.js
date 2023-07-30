import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPassword, editProfileData } from "../../Redux/Actions/ProfileAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfileHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // edit user profile data

    let user = []
    if(localStorage.getItem('user') !== null) {
        user = JSON.parse(localStorage.getItem('user'))
    }
    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [loading, setLoading] = useState(true)

    const onChangeName = (event) => {
        event.persist();
        setName(event.target.value)
    }

    const onChangeEmail = (event) => {
        event.persist();
        setEmail(event.target.value)
    }

    const onChangePhone = (event) => {
        event.persist();
        setPhone(event.target.value)
    }

    const handleEdit = async() => {
        let body;
        if(user.email === email) {
            body = {
                name,
                phone
            }
        } else {
            body = {
                name,
                email,
                phone
            }
        }

        setLoading(true)
        await dispatch(editProfileData(body))
        setLoading(false)
        setShowEdit(false);
    }

    const res = useSelector(state => state.ProfileReducer.userProfile)

    useEffect(() => {
        if (loading === false) {
            console.log(res)
            if (res && res.status === 200) {
                toast.success("تم التعديل بنجاح")

                localStorage.setItem("user", JSON.stringify(res.data.data.user))
            } else {
                toast.warning("فشل عملية التعديل")
            }
        }
    }, [loading])


    // change user password

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [loadingPass, setLoadingPass] = useState(true)

    const onChangeOldPass = (event) => {
        event.persist();
        setOldPassword(event.target.value)
    }

    const onChangeNewPass = (event) => {
        event.persist();
        setNewPassword(event.target.value)
    }
    const onChangeConfirmPass = (event) => {
        event.persist();
        setConfirmNewPassword(event.target.value)
    }

    const validationValues = () => {
        if (confirmNewPassword !== newPassword) {
            toast.warning("تاكيد كلمة المرور غير متطابق")
            return
        }
    }

    const changePassword = async() => {
        validationValues()
        setLoadingPass(true)
        await dispatch(editPassword({
            currentPassword:oldPassword,
            password:newPassword,
            passwordConfirm:confirmNewPassword
        }))
        setLoadingPass(false)
    }

    const resPass = useSelector(state => state.ProfileReducer.editPassword)

    useEffect(() => {
        if(loadingPass === false) {
            console.log(resPass)
            if (resPass && resPass.status === 200) {
                toast.success("تم تغير كلمة المرور بنجاح")
                setTimeout(() => {
                    localStorage.removeItem("user")
                    localStorage.removeItem("token")
                    navigate('/login')
                }, 2000);
            } else {
                toast.error("فشل عملية التحديث")
            }
        }
    }, [loadingPass])

    return [user, showEdit, handleCloseEdit, handleShowEdit, handleEdit, name, onChangeName, email, onChangeEmail, phone, onChangePhone, oldPassword, onChangeOldPass, newPassword, onChangeNewPass, confirmNewPassword, onChangeConfirmPass, changePassword]
}

export default ProfileHook