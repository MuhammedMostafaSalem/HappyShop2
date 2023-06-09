import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import ViewProductsDetalisHook from '../../CustomHook/Products/ViewProductsDetalisHook'
import { useParams } from 'react-router-dom'

const ProductDetalisPage = () => {

    const {id} = useParams();

    const [item, images, cat, brand, prodLike] = ViewProductsDetalisHook(id)

    if(prodLike) {
        var items = prodLike.slice(0, 4)
    }

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
                <RateContainer />
                <CardProductsContainer products={items} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
