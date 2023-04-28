import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/CategoryAction';

const HomeCategory = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    const categoryData = useSelector(state => state.AllCategory.category)
    const loading = useSelector(state => state.AllCategory.loading)
    console.log(categoryData.data, loading)

    const colors = ['#ffd3eb', '#f4dba5', '#55cfdf', '#ff6262', '#0034ff', '#ffd3e8']
    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ?
                    categoryData.data ? 
                        categoryData.data.slice(0,6).map((item, index) => {
                            return (
                                <CategoryCard title={item.name} img={item.image} background={colors[index]} key={index} />
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
