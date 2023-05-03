import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/CategoryAction';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createSubCategory } from '../../Redux/Actions/SubCategoryAction';

const AddSubCategoryhook = () => {

    const dispatch = useDispatch();

    const [id, setID] = useState('0')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)

    // when first load
    useEffect(() => {
        if(!navigator.onLine) {
            toast.info('هناك مشكلة في الاتصال بالانترنت')
            return;
        }
        
        dispatch(getAllCategory());
    }, [dispatch])

    // to get state from redux
    const categoryData = useSelector(state => state.AllCategory.category)

    //get last sub catgeory state from redux
    const subCategory = useSelector(state => state.SubCategory.subcategory)

    //on change dropdown menu
    const handelChange = (e) => {
        console.log(e.target.value)
        setID(e.target.value)
    }

    //save name in database
    const onChangeName = (e) => {
        e.persist();
        setName(e.target.value)
    }

    // save date in database
    const handelSubmit = async (e) => {
        e.preventDefault();

        if(!navigator.onLine) {
            toast.info('هناك مشكلة في الاتصال بالانترنت')
            return;
        }
        if(id === '0') {
            toast.warning('من فضلك اختر تصنيف رئيسي')
            return;
        }
        else if(name === '') {
            toast.warning('من فضلك ادخل اسم التصنيف')
            return;
        }

        setLoading(true)

        await dispatch(createSubCategory({
            name,
            category: id
        }))

        setLoading(false)
    }


    useEffect(() => {
        if(loading === false) {
            setName('')
            setID('0')

            if (subCategory) {
                console.log(subCategory)
            }
            if (subCategory.status === 201) {
                toast.success("تمت الاضافة بنجاح")
            }
            else if (subCategory === "Error AxiosError: Request failed with status code 400") {
                toast.warning("هذا الاسم مكرر من فضلك اختار اسم اخر")
            }
            else {
                toast.warn("هناك مشكله فى عملية الاضافة")
            }

            setLoading(true)
        }
    }, [loading])

    return [
        id,
        name,
        categoryData,
        subCategory,
        handelChange,
        handelSubmit,
        onChangeName
    ]
}

export default AddSubCategoryhook