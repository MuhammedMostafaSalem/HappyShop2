import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pagination from '../../Components/Uitily/Pagination'
import UserAllAddress from '../../Components/User/UserAllAddress'
import UserSideBar from '../../Components/User/UserSideBar'
import ViewAllAddressesHook from '../../CustomHook/User/ViewAllAddressesHook'
const UserAllAddresPage = () => {
    const [allAddresses] = ViewAllAddressesHook()
    
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <UserAllAddress allAddresses={allAddresses}/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserAllAddresPage
