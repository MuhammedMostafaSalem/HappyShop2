import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from './../../Redux/Actions/CategoryAction';
import { getAllBrand } from './../../Redux/Actions/BrandAction';
import { getOneCategory } from '../../Redux/Actions/SubCategoryAction';
import { createProduct } from '../../Redux/Actions/ProductAction';
import { toast } from 'react-toastify';

const AddProductsHook = () => {

    // values images products
    const [images, setImages] = useState({});
    //values state
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAfter, setPriceAfter] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [catID, setCatID] = useState('');
    const [brandID, setBrandID] = useState('');
    const [subCatID, setSubCatID] = useState([]);
    const [seletedSubID, setSeletedSubID] = useState([]);
    const [loading, setLoading] = useState(true);
    //to show hide color picker
    const [showColor, setShowColor] = useState(false);
    //to store all pick color
    const [colors, setColors] = useState([]);
    const [options, setOptions] = useState([]);



    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllCategory())
        dispatch(getAllBrand())
    }, [])

    //get last catgeory state from redux
    const category = useSelector(state => state.AllCategory.category)
    //get last brand state from redux
    const brand = useSelector(state => state.AllBrand.brand)
    //get last sub-cat state from redux
    const subCat = useSelector(state => state.SubCategory.subcategory)



    const onSelect = (selectedList) => {
        setSeletedSubID(selectedList)
    }
    const onRemove = (selectedList) => {
        setSeletedSubID(selectedList)
    }


    //when selet category store id
    const onSeletCategory = async (e) => {
        if(e.target.value !== 0){
            await dispatch(getOneCategory(e.target.value))
        }
        setCatID(e.target.value)
    }
    useEffect(()=> {
        if(catID !== 0) {
            if(subCat.data) {
                setOptions(subCat.data)
            }
        }
    }, [catID])

    //when selet brand store id
    const onSeletBrand = async (e) => {
        setBrandID(e.target.value)
    }

    //to change name state
    const onChangeProductName = (event) => {
        event.persist();
        setProductName(event.target.value)
    }

    //to change description  name state
    const onChangeDesName = (event) => {
        event.persist();
        setProductDescription(event.target.value)
    }

    //to change priceBefor state
    const onChangePriceBefor = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }

    //to change priceAfter state
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAfter(event.target.value)
    }

    //to change Qty state
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value)
    }

    //to change color state
    const onChangeColor = (event) => {
        event.persist();
        setShowColor(!showColor)
    }
    //when choose new color
    const handelChangeComplete = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor)
    }
    const removeColor = (color) => {
        const newColor = colors.filter((e) => e !== color)
        setColors(newColor)
    }


    //to convert base 64 to file
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }


    // to save data
    const handelSubmit = async (e) => {
        e.preventDefault();

        if(productName === "" || productDescription === "" || priceBefore <= 0 || images.length <= 0 || catID === 0) {
            toast.warning('من فضلك اكمل البيانات')
            return;
        }

        //convert base 64 image to file
        const imgCover = dataURLtoFile(images[0] , Math.random() + ".png")
        //convert array of base 64 image to file 
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
            return dataURLtoFile(images[index] , Math.random() + ".png")
        })

        const formData = new FormData();
        formData.append("title", productName);
        formData.append("description", productDescription);
        formData.append("quantity", priceBefore);
        formData.append("price", qty);
        formData.append("imageCover", imgCover);
        formData.append("category", catID);
        formData.append("brand", brandID)

        colors.map((color) => formData.append("availableColors", color))
        seletedSubID.map((item) => formData.append("subcategory", item._id))
        itemImages.map((item) => formData.append("images", item))

        setLoading(true)
        await dispatch(createProduct(formData))
        setLoading(false)
    }

    //get create meesage
    const product = useSelector(state => state.ProductReducer.product)

    useEffect(()=> {
        if(loading === false) {
            setCatID(0)
            setColors([])
            setImages([])
            setProductName('')
            setProductDescription('')
            setPriceBefore('السعر قبل الخصم')
            setPriceAfter('السعر بعد الخصم')
            setQty('الكمية المتاحة')
            setBrandID(0)
            setSeletedSubID([])

            setLoading(true)

            if (product) {
                if (product.status === 201) {
                    toast.success("تم عملية الاضافة بنجاح")
                } else {
                    toast.error("هناك مشكلة في عملية الاضافة")
                }
            }
        }
    },[loading])


    return [
        images,
        setImages,
        productName,
        setProductName,
        productDescription,
        setProductDescription,
        priceBefore,
        setPriceBefore,
        priceAfter,
        setPriceAfter,
        qty,
        setQty,
        category,
        onSeletCategory,
        brand,
        onSeletBrand,
        showColor,
        onChangeColor,
        handelChangeComplete,
        colors,
        removeColor,
        options,
        onSelect,
        onRemove,
        handelSubmit,
        onChangeProductName,
        onChangeDesName,
        onChangePriceBefor,
        onChangePriceAfter,
        onChangeQty,
    ]
}

export default AddProductsHook