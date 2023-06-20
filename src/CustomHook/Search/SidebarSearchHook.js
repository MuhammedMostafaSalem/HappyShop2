import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/CategoryAction';
import { getAllBrand } from './../../Redux/Actions/BrandAction';
import ViewSearchProductsHook from '../Products/ViewSearchProductsHook';

const SidebarSearchHook = () => {
    const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook();
    const dispatch = useDispatch();

    // when first load
    useEffect(() => {
        const get = async() => {
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        get();
    }, [dispatch])

    // to get state from redux
    const allCategory = useSelector(state => state.AllCategory.category)
    const allBrand = useSelector(state => state.AllBrand.brand)

    // to get category
    let category = [] ;
    if(allCategory.data) {
        category = allCategory.data
    }

    // to get brand
    let brand = [] ;
    if(allBrand.data) {
        brand = allBrand.data
    }


    var queryCat = "";
    var queryBrand = "";
    
    //when user press any category
    const [catChecked, setCatChecked] = useState([])
    const clickCategory = (e) => {
        let value = e.target.value;

        if(value === "0") {
            setCatChecked([])
        } else {
            if(e.target.checked === true) {
                setCatChecked([...catChecked, value])
            } else if(e.target.checked === false) {
                const newARRY = catChecked.filter((e) => e !== value)
                setCatChecked(newARRY)
            }
        }
    }
    useEffect(() => {
        queryCat = catChecked.map(val => 'category[in][]=' +val).join('&');
        localStorage.setItem('catChecked', queryCat)
        setTimeout(() => {
            getProduct();
        }, 1000)
    }, [catChecked])


    //when user press any brand
    const [brandChecked, setBrandChecked] = useState([])
    const clickBrand = (e) => {
        let value = e.target.value;

        if(value === "0") {
            setBrandChecked([])
        } else {
            if(e.target.checked === true) {
                setBrandChecked([...brandChecked, value])
            } else if(e.target.checked === false) {
                const newARRY = brandChecked.filter((e) => e !== value)
                setBrandChecked(newARRY)
            }
        }
    }
    useEffect(() => {
        queryBrand = brandChecked.map(val => 'brand[in][]=' + val).join('&');
        localStorage.setItem('brandChecked', queryBrand)
        setTimeout(() => {
            getProduct();
        }, 1000)
    }, [brandChecked])


    //when user press between priceFrom and priceTo
    const [From, setPriceFrom] = useState(0)
    const [To, setPriceTo] = useState(0)

    const priceFrom = (e) => {
        localStorage.setItem("priceFrom", e.target.value)
        setPriceFrom(e.target.value)
    }

    const priceTo = (e) => {
        localStorage.setItem("priceTo", e.target.value)
        setPriceTo(e.target.value)
    }
    useEffect(() => {
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [From, To])

    return [category, brand, clickCategory, clickBrand, priceFrom, priceTo]
}

export default SidebarSearchHook