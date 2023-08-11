import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import HomeCategoryHook from '../../CustomHook/Category/HomeCategoryHook';

const HomeCategory = () => {

    const [ items, loading, colors ] = HomeCategoryHook();

    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ?
                    items ? 
                    items.map((item, index) => {
                            return (
                                <CategoryCard title={item.name} img={item.image} background={colors[index]} key={index} id={item._id} />
                            )
                        })
                    : <h3>لا يوجد تصنيفات</h3>
                    : <Spinner className='mx-auto' animation="border" variant="primary" />
                }
            </Row>
        </Container>
    )
}

export default HomeCategory
