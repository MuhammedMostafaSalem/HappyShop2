import React, { useEffect, useState } from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import AllCategoryPageHook from './../../CustomHook/Category/AllCategoryPageHook';
import { Link } from 'react-router-dom';

const CategoryHeader = () => {
  const [
        categoryData,
        loading,
        pageCount,
        getPage,
    ] = AllCategoryPageHook()

    const [items, setItems] = useState([])

    useEffect(() => {
      if(categoryData) {
        setItems(categoryData.data)
      }
    }, [categoryData])

    return (
      <div className="cat-header">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start py-2 flex-wrap">
              {
                items ?
                  items.map((item, index) => {
                    return(
                      <Link to={`/products/category/${item._id}`} style={{textDecoration: 'none'}}>
                        <div className="cat-text-header" key={index}>{item.name}</div>
                      </Link>
                    )
                  })
                : null
              }
              <Link to='/allcategory' style={{textDecoration: 'none'}}>
                <div className="cat-text-header">المزيد</div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default CategoryHeader
