import React, { useEffect, useState } from 'react'
import { Container,Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'
import CardContainerHook from '../../CustomHook/Fav Products/CardContainerHook'

const CardProductsContainer = ({title, btntitle, pathText, products}) => {
    const [favProd] = CardContainerHook();
    
    return (
        <Container>
            {
                products ? 
                    <SubTiltle title={title} btntitle={btntitle} pathText={pathText}/>
                :null
            }
            <Row className='my-2 d-flex justify-content-between'>
            {
                products ?
                    products.map((item, index) => {
                        return (
                            <ProductCard key={index} item={item} favProd={favProd} />
                        )
                    })
                :null
            }
            </Row>
        </Container>
    )
}

export default CardProductsContainer
