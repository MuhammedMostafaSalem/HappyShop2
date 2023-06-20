import { useState, useEffect } from 'react'
import ViewSearchProductsHook from '../Products/ViewSearchProductsHook';

const NavbarSearchHook = () => {
    const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook();
    const [searchWord, setSearchWord] = useState("");

    // when user type search word
    const onChangeSearch = (e) => {
        localStorage.setItem('searchWord', e.target.value)
        setSearchWord(e.target.value)

        const path = window.location.pathname;
        if(path != '/products') {
            window.location.href = '/products'
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [searchWord])

    return [onChangeSearch, searchWord]
}

export default NavbarSearchHook