import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getOneCategory } from './../../Redux/Actions/CategoryAction';
import { getAllBrand } from './../../Redux/Actions/BrandAction';
import { toast } from 'react-toastify';
import { createProduct, editProducts, getOneProduct } from '../../Redux/Actions/ProductAction';

const EditProductsHook = (id) => {

    const dispatch = useDispatch();
    useEffect(() => {
        const run = async () => {
            await dispatch(getOneProduct(id));
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        run();
    }, [])
    //get one product details state from redux
    const itemOneProduct = useSelector((state) => state.ProductReducer.oneProduct)
    //get last catgeory state from redux
    const category = useSelector(state => state.AllCategory.category)
    //get last brand state from redux
    const brand = useSelector(state => state.AllBrand.brand)

    //get last sub cat state from redux
    const subCat = useSelector(state => state.SubCategory.subcategory)

    const onSelect = (selectedList) => {
        setSeletedSubID(selectedList)
    }
    const onRemove = (selectedList) => {
        setSeletedSubID(selectedList)
    }
    const [options, setOptions] = useState([]);

    //values images products
    const [images, setImages] = useState({});
    //values state
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAftr, setPriceAftr] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [CatID, setCatID] = useState('');
    const [BrandID, SetBrandID] = useState('');
    const [subCatID, setSubCatID] = useState([]);
    const [seletedSubID, setSeletedSubID] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if(itemOneProduct.data) {
            setImages(itemOneProduct.data.images)
            setProdName(itemOneProduct.data.title)
            setProdDescription(itemOneProduct.data.description)
            setPriceBefore(itemOneProduct.data.price)
            setQty(itemOneProduct.data.quantity)
            setCatID(itemOneProduct.data.category)
            SetBrandID(itemOneProduct.data.brand)
            setColors(itemOneProduct.data.availableColors)
        }
    }, [itemOneProduct])


    //to change name state
    const onChangeProdName = (event) => {
        event.persist();
        setProdName(event.target.value)
    }
    //to change name state
    const onChangeDesName = (event) => {
        event.persist();
        setProdDescription(event.target.value)
    }
    //to change name state
    const onChangePriceBefor = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }
    //to change name state
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAftr(event.target.value)
    }  //to change name state
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value)
    }
    const onChangeColor = (event) => {
        event.persist();
        setShowColor(!showColor)
    }

    //to show hide color picker
    const [showColor, setShowColor] = useState(false);
    //to store all pick color
    const [colors, setColors] = useState([]);
    //when choose new color
    const handelChangeComplete = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor)
    }
    const removeColor = (color) => {
        const newColor = colors.filter((e) => e !== color)
        setColors(newColor)
    }



    //when selet category store id
    const onSeletCategory = (e) => {
        setCatID(e.target.value)
    }
    useEffect(() => {
        if (CatID === 0) {
            const run = async () => {
                await dispatch(getOneCategory(CatID))
            }
            run();
        }
    }, [CatID])

    useEffect(() => {
        if (subCat) {
            setOptions(subCat.data)
        }
    }, [subCat])


    //when selet brand store id
    const onSeletBrand = (e) => {
        SetBrandID(e.target.value)
    }

    //to convert base 64 to file
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    //convert url to file
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };

    //to save data 
    const handelSubmit = async (e) => {
        e.preventDefault();
        if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
            toast.warning("من فضلك اكمل البيانات")
            return;
        }

        let imgCover;
        if (images[0].length <= 1000) {
            convertURLtoFile(images[0]).then(val => imgCover = val)
        } else {
            imgCover = dataURLtoFile(images[0], Math.random() + ".png")
        }

        let itemImages = []
        //convert array of base 64 image to file 
        Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                if (images[index].length <= 1000) {
                    convertURLtoFile(images[index]).then(val => itemImages.push(val))
                }
                else {
                    itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
                }
            })

        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore);

        formData.append("category", CatID);
        formData.append("brand", BrandID);

        setTimeout(() => {
            formData.append("imageCover", imgCover);
            itemImages.map((item) => formData.append("images", item))
        }, 1000);


        colors.map((color) => formData.append("availableColors", color))
        seletedSubID.map((item) => formData.append("subcategory", item._id))
        setTimeout(async () => {
            setLoading(true)
            await dispatch(editProducts(id, formData))
            setLoading(false)
        }, 1000);

    }

    //get create meesage
    const product = useSelector(state => state.ProductReducer.editProduct)

    useEffect(() => {

        if (loading === false) {
           // setCatID(0)
            setColors([])
            setImages([])
            setProdName('')
            setProdDescription('')
            setPriceBefore('السعر قبل الخصم')
            setPriceAftr('السعر بعد الخصم')
            setQty('الكمية المتاحة')
            SetBrandID(0)
            setSeletedSubID([])
            setTimeout(() => setLoading(true), 1500)

            if (product) {
                if (product.status === 200) {
                    toast.success("تم التعديل بنجاح")
                } else {
                    toast.error("هنالك مشكلة في عملية التعديل")
                }
            }
        }
    }, [loading])


    return [
        onChangeDesName,
        onChangeQty,
        onChangeColor,
        onChangePriceAfter,
        onChangePriceBefor,
        onChangeProdName,
        showColor,
        category,
        brand,
        priceAftr,
        images,
        setImages,
        onSelect,
        onRemove,
        options,
        handelChangeComplete,
        removeColor,
        onSeletCategory,
        handelSubmit,
        onSeletBrand,
        colors,
        priceBefore,
        qty,
        prodDescription,
        prodName,
        CatID,
        BrandID
    ]
}

export default EditProductsHook