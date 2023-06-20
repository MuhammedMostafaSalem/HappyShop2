import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getAllProductsPage, getAllProductsSearch } from '../../Redux/Actions/ProductAction';

const ViewSearchProductsHook = () => {
    let limit = 12;

    const dispatch = useDispatch();
    
    const getProduct = async () => {
        getStorge();
        sortData();
        
        await dispatch(getAllProductsSearch(`limit=${limit}&sort=${sort}&keyword=${word}&${queryCat}&${queryBrand}${pricefromString}${priceToString}`))
    }
    useEffect(() => {
        getProduct()
    }, [])
    
    const allProduct = useSelector((state) => state.ProductReducer.allProduct)

    let items = []
    let pagination = [];
    let results = 0;

    try {
        if(allProduct.data) {
            items = allProduct.data;
        }
        else {
            items = []
        }
    } catch(e) {}

    try {
        if (allProduct.paginationResult) {
            pagination = allProduct.paginationResult.numberOfPages;
        }
        else {
            pagination = []
        }
    } catch(e) {}

    try {
        if (allProduct.results) {
            results = allProduct.results;
        }
        else {
            results = 0
        }
    } catch(e) {}

    //when click pagination
    const onPress = async (page) => {
        getStorge();
        sortData(); 

        await dispatch(getAllProductsSearch(`limit=${limit}&sort=${sort}&page=${page}&keyword=${word}&${queryCat}&${queryBrand}${pricefromString}${priceToString}`))
    }

    let word = "";
    let queryCat = "";
    let queryBrand = "";
    let priceFrom = "";
    let priceTo = "";
    let pricefromString = "";
    let priceToString = "";
    const getStorge = () => {
        if (localStorage.getItem('searchWord') != null) {
            word = localStorage.getItem('searchWord')
        }
        if (localStorage.getItem('catChecked') != null) {
            queryCat = localStorage.getItem('catChecked')
        }
        if (localStorage.getItem('brandChecked') != null) {
            queryBrand = localStorage.getItem('brandChecked')
        }
        if (localStorage.getItem('priceFrom') != null) {
            priceFrom = localStorage.getItem('priceFrom')
        }
        if (localStorage.getItem('priceTo') != null) {
            priceTo = localStorage.getItem('priceTo')
        }

        // change priceFrom to pricefromString
        if(priceFrom === '' || priceFrom <= 0) {
            pricefromString = ''
        } else {
            pricefromString = `&price[gte]=${priceFrom}`
        }

        // change priceTo to priceToString
        if(priceTo === '' || priceTo <= 0) {
            priceToString = ''
        } else {
            priceToString = `&price[lte]=${priceTo}`
        }
    }


    ///when user choose sort type
    let sort;
    let sortType = '';

    const sortData = () => {
        if(localStorage.getItem('sortType') !== null) {
            sortType = localStorage.getItem('sortType')
        } else {
            sortType = '';
        }

        if(sortType === 'السعر من الاقل للاعلي') {
            sort = '+price'
        } else if (sortType === 'السعر من الاعلي للاقل') {
            sort = '-price'
        } else if (sortType === '') {
            sort = ''
        } else if (sortType === 'الاكثر مبيعا') {
            sort = '-sold'
        } else if (sortType === 'الاعلي تقييما') {
            sort = '-ratingsQuantity'
        }
    }

    return [items, pagination, onPress, getProduct, results]
}

export default ViewSearchProductsHook