import React, {useState, useEffect} from 'react'
import { Navbar, Container, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
import NavbarSearchHook from '../../CustomHook/Search/NavbarSearchHook'
const NavBarLogin = () => {
    const [onChangeSearch, searchWord] = NavbarSearchHook();

    let word = "";
    if (localStorage.getItem("searchWord") != null) {
        word = localStorage.getItem("searchWord")
    }
    
    const [user, setUser] = useState('');
    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
        // if(res) {
        //     setUser(JSON.parse(localStorage.getItem("user")))
        // }
        // dispatch(getLoggedUser())
    },[])

    // const res = useSelector(state => state.AuthReducer.currentUser)

    const logOut = () => {
        localStorage.removeItem('user')
        setUser('')
    }

    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} alt='' className='logo' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        onChange={onChangeSearch}
                        value={word}
                        type="search"
                        placeholder="ابحث..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        {
                            user != '' ?
                                <NavDropdown
                                id="basic-nav-dropdown"
                                title={user.name}
                                menuVariant="dark"
                                className="mt-3"
                                >
                                    {
                                        user.role === "admin" ?
                                            <NavDropdown.Item href="/admin/allproducts">لوحة التحكم</NavDropdown.Item>
                                        : <NavDropdown.Item href="/user/profile">الصفحة الرئيسية</NavDropdown.Item>
                                    }
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut} href="/">تسجيل خروج</NavDropdown.Item>
                                </NavDropdown>
                            : <Nav.Link href='/login'
                            className="nav-text d-flex mt-3 justify-content-center">
                                <img src={login} className="login-img" alt="sfvs" />
                                <p style={{ color: "white" }}>دخول</p>
                            </Nav.Link>
                        }

                        <Nav.Link href='/cart'
                            className="nav-text d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>العربه</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin
