import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from './../Products/ProductCard';
import Pagination from '../Uitily/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { getProductToWishList } from '../../Redux/Actions/WishListAction';
import CardProductsContainer from '../Products/CardProductsContainer';
const UserFavoriteProduct = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getProductToWishList())
            setLoading(false)
        }
        get()
    }, [])

    const res = useSelector(state => state.WishListReducer.getUserWishList)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                setItems(res.data)
            }
        }
    }, [loading])
    return (
        <div>
            <div className="admin-content-text">قائمة المفضلة</div>
            <Row className='justify-content-start'>
                {
                    items.length <= 0 ?
                        <h6>لا يوجد منتجات مفضله الان</h6>
                    : <CardProductsContainer products={items} title="" btntitle="" />
                }
            </Row>
        </div>
    )
}

export default UserFavoriteProduct
