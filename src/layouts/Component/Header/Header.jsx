import { FC, Fragment, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ALLImages from '../../../common/ImageData';
import { Badge, Dropdown, DropdownDivider, Form, InputGroup, ListGroup, Modal, Navbar } from 'react-bootstrap';
import { HeaderCart, cartData } from '../../../common/CommonData';
import { connect } from 'react-redux';
import { ThemeChanger } from '../../../common/redux/Action';
import store from '../../../common/redux/Store';
import { MENUITEMS } from '../../../common/Sidemenudata';


const Header = ({ local_varaiable, ThemeChanger }) => {

    const [open, setOpen] = useState(false);

    //small screen

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //search visibility function

    const linkData = [
        { path: `${import.meta.env.BASE_URL}AdminUI/FullCalender/`, icon: 'bi-calendar', text: 'Calendar' },
        { path: `${import.meta.env.BASE_URL}Pages/MailInbox/`, icon: 'bi-envelope', text: 'Mail' },
        { path: `${import.meta.env.BASE_URL}UiKit/Buttons/`, icon: 'bi-dice-1', text: 'Buttons' },
    ];

    const [isSearchDropVisible, setSearchDropVisible] = useState(false);
    const [InputValue, setInputValue] = useState('');
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [customshow, _setCustomshow] = useState(true);
    const [NavData, setNavData] = useState([]);
    const [searchcolor, setsearchcolor] = useState('text-dark');
    const [searchval, setsearchval] = useState('Type something');
    const searchRef = useRef(null);


    const toggleSearchDropdown = (e) => {
        e.stopPropagation();
        setSearchDropVisible(!isSearchDropVisible);
    };

    const handleDocumentClick = (e) => {
        // Check if the clicked element is outside the "header-search" div
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setSearchDropVisible(false);
        }
    };

    useEffect(() => {
        // Add click event listener when component mounts
        document.addEventListener('click', handleDocumentClick);

        // Remove click event listener when component unmounts
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const myfunction = (inputValue) => {
        const matchingElements = [];

        const findMatchingElements = (menuItems) => {
            menuItems.forEach((menuItem) => {
                if (menuItem.title) {
                    if (menuItem.children) {
                        findMatchingElements(menuItem.children);
                    }

                    if (
                        menuItem.title.toLowerCase().includes(inputValue.toLowerCase()) &&
                        menuItem.title.toLowerCase().startsWith(inputValue.toLowerCase())
                    ) {
                        matchingElements.push(menuItem);
                    }
                }
            });
        };

        findMatchingElements(MENUITEMS);

        if (!matchingElements.length || inputValue === "") {
            if (inputValue === "") {
                // Handle case when inputValue is empty
                setShow1(false);
                setShow2(false);
                setsearchval("Type something");
                setsearchcolor('text-dark');
            } else {
                // Handle case when no matching elements are found
                setShow1(true);
                setShow2(false);
                setsearchcolor('text-danger');
                setsearchval("There is no component with this name");
            }
        } else {
            setShow1(true);
            setShow2(true);
            setsearchcolor('text-dark');
            setsearchval("");
        }

        setNavData(matchingElements);
    };

    //cart remove function

    const [data1, setData1] = useState([]);
    const [remainingCount1, setRemainingCount1] = useState(HeaderCart.length);

    const Remove1 = (id) => {
        if (!data1.includes(id)) {
            setData1((i) => [...i, id]);
            setRemainingCount1((prevCount) => prevCount - 1);
        }
    };

    const handleProceedToCheckout = (event) => {
        event.preventDefault(); // Prevent the default behavior of the link
        // Navigate to the desired page
        window.location.href = `${import.meta.env.BASE_URL}Pages/ECommerce/CheckOut/`;
    }

    const handleBackToShop = (event) => {
        event.preventDefault(); // Prevent the default behavior of the link
        // Navigate to the desired page
        window.location.href = `${import.meta.env.BASE_URL}Pages/ECommerce/Shop/`;
    }

    //notification remove  function

    const [data, setData] = useState([]);
    const [remainingCount, setRemainingCount] = useState(cartData.length);

    const Remove = (id)=> {
        if (!data.includes(id)) {
            setData((i) => [...i, id]);
            setRemainingCount((prevCount) => prevCount - 1);
        }
    };

    const handleviewAll = (event) => {
        event.preventDefault(); // Prevent the default behavior of the link
        // Navigate to the desired page
        window.location.href = `${import.meta.env.BASE_URL}Pages/NotificationList/`;
    }

    // FullScreen
    const [isFullScreen, setIsFullScreen] = useState(false);

    const elem = document.documentElement;

    const openFullscreen = () => {
        if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            requestFullscreen();
        } else {
            exitFullscreen();
        }
    };

    const requestFullscreen = () => {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        setIsFullScreen(true);
    };

    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        setIsFullScreen(false);
    };

    const handleFullscreenChange = () => {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
            setIsFullScreen(true);
        } else {
            setIsFullScreen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    //Switcher functionality

    const Switchericon = () => {
        const offcanvasEnd = document.querySelector(".offcanvas-end");
        
        if (offcanvasEnd) {
            offcanvasEnd.classList.toggle("show");
            offcanvasEnd.style.insetInlineEnd = "0px";
        }
    
        const switcherBackdrop = document.querySelector(".switcher-backdrop");
        
        if (switcherBackdrop) {
            if (switcherBackdrop.classList.contains('d-none')) {
                switcherBackdrop.classList.add("d-block");
                switcherBackdrop.classList.remove("d-none");
            }
        }
    };

    //Dark Model

    const ToggleDark = () => {
        const theme = store.getState();
        const isDarkMode = theme.dataThemeMode === 'dark';

        const updatedTheme = {
            ...theme,
            "dataThemeMode": isDarkMode ? 'light' : 'dark',
            "dataHeaderStyles": isDarkMode ? 'light' : 'dark',
            "dataMenuStyles": theme.dataNavLayout === 'horizontal' && isDarkMode ? 'dark' : (isDarkMode ? 'light' : 'dark')
        };

        ThemeChanger(updatedTheme);

        if (theme.dataThemeMode === 'light') {
            localStorage.setItem("vexeldarktheme", "dark");
            localStorage.removeItem("vexellighttheme");
        } else {
            localStorage.setItem("vexellighttheme", "light");
            localStorage.removeItem("vexeldarktheme");
            localStorage.removeItem("darkBgRGB1");
            localStorage.removeItem("darkBgRGB2");
            localStorage.removeItem("darkBgRGB3");
            localStorage.removeItem("darkBgRGB4");
            localStorage.removeItem("vexelHeader");
            localStorage.removeItem("vexelMenu");
        }
    };

    function menuClose() {
        const theme = store.getState();
        ThemeChanger({ ...theme, "toggled": "close" });

    }

    const toggleSidebar = () => { 
        const theme = store.getState();
        let sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
          if (sidemenuType === "vertical") {
            let verticalStyle = theme.dataVerticalStyle;
            const navStyle = theme.dataNavStyle;
            switch (verticalStyle) {
              // closed
              case "closed":
                ThemeChanger({ ...theme, "dataNavStyle": "" });
                if (theme.toggled === "close-menu-close") {
                  ThemeChanger({ ...theme, "toggled": "" });
                } else {
                  ThemeChanger({ ...theme, "toggled": "close-menu-close" });
                }
                break;
              // icon-overlay
              case "overlay":
                ThemeChanger({ ...theme, "dataNavStyle": "" });
                if (theme.toggled === "icon-overlay-close") {
                  ThemeChanger({ ...theme, "toggled": "","iconOverlay" :''});
                } else {
                  if (window.innerWidth >= 992) {
                    ThemeChanger({ ...theme, "toggled": "icon-overlay-close","iconOverlay" :'' });
                  }
                }
                break;
              // icon-text
              case "icontext":
                ThemeChanger({ ...theme, "dataNavStyle": "" });
                if (theme.toggled === "icon-text-close") {
                  ThemeChanger({ ...theme, "toggled": "" });
                } else {
                  ThemeChanger({ ...theme, "toggled": "icon-text-close" });
                }
                break;
              // doublemenu
              case "doublemenu":
					ThemeChanger({ ...theme, "dataNavStyle": "" });
					if (theme.toggled === "double-menu-open") {
						ThemeChanger({ ...theme, "toggled": "double-menu-close" });
					} else {
						const sidemenu = document.querySelector(".side-menu__item.active");
						if (sidemenu) {
							if (sidemenu.nextElementSibling) {
								sidemenu.nextElementSibling.classList.add("double-menu-active");
								ThemeChanger({ ...theme, "toggled": "double-menu-open" });
							} else {

								ThemeChanger({ ...theme, "toggled": "double-menu-close" });
							}
						}
					}

					break;
              // detached
              case "detached":
                if (theme.toggled === "detached-close") {
                  ThemeChanger({ ...theme, "toggled": "","iconOverlay" :'' });
                } else {
                  ThemeChanger({ ...theme, "toggled": "detached-close","iconOverlay" :'' });
                }
                
                break;
    
              // default
              case "default":
                ThemeChanger({ ...theme, "toggled": "" });
            }
            switch (navStyle) {
                case "menu-click":
                    if (theme.toggled === "menu-click-closed") {
                      ThemeChanger({ ...theme, "toggled": "" });
                    }
                    else {
                      ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
                    }
                    break;
                  // menu-hover
                  case "menu-hover":
                    if (theme.toggled === "menu-hover-closed") {
                      ThemeChanger({ ...theme, "toggled": "" });
                    } else {
                      ThemeChanger({ ...theme, "toggled": "menu-hover-closed"});
        
                    }
                    break;
              case "icon-click":
                if (theme.toggled === "icon-click-closed") {
                  ThemeChanger({ ...theme, "toggled": "" });
                } else {
                  ThemeChanger({ ...theme, "toggled": "icon-click-closed" });
    
                }
                break;
              case "icon-hover":
                if (theme.toggled === "icon-hover-closed") {
                  ThemeChanger({ ...theme, "toggled": "" });
                } else {
                  ThemeChanger({ ...theme, "toggled": "icon-hover-closed" });
    
                }
                break;
    
            }
          }
        }
        else {
          if (theme.toggled === "close") {
            ThemeChanger({ ...theme, "toggled": "open" });
    
            setTimeout(() => {
              if (theme.toggled == "open") {
                const overlay = document.querySelector("#responsive-overlay");
    
                if (overlay) {
                  overlay.classList.add("active");
                  overlay.addEventListener("click", () => {
                    const overlay = document.querySelector("#responsive-overlay");
    
                    if (overlay) {
                      overlay.classList.remove("active");
                      menuClose();
                    }
                  });
                }
              }
    
              window.addEventListener("resize", () => {
                if (window.screen.width >= 992) {
                  const overlay = document.querySelector("#responsive-overlay");
    
                  if (overlay) {
                    overlay.classList.remove("active");
                  }
                }
              });
            }, 100);
          } else {
            ThemeChanger({ ...theme, "toggled": "close" });
          }
        }
    
      };
      
    return (
        <Fragment>
            <header className="app-header header sticky">
                <div className="main-header-container container-fluid">
                    <div className="header-content-left align-items-center">
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link to={`${import.meta.env.BASE_URL}Dashboard/IndexPage`} className="header-logo">
                                    <img src={ALLImages('logo2')} alt="logo" className="desktop-logo" />
                                    <img src={ALLImages('logo5')} alt="logo" className="toggle-logo" />
                                    <img src={ALLImages('logo1')} alt="logo" className="desktop-dark" />
                                    <img src={ALLImages('logo4')} alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-element">
                            <Link to="#" className="sidemenu-toggle header-link" data-bs-toggle="sidebar" onClick={() => toggleSidebar()}>
                                <span className="open-toggle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 24 24">
                                        <path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                                        <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" />
                                    </svg>
                                </span>
                                <span className="close-toggle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 24 24" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                                    </svg>
                                </span>
                            </Link>
                        </div>

                       
                    </div>
                    <Navbar expand='lg' className="header-content-right">
                        <Navbar.Toggle onClick={() => setOpen(!open)} aria-expanded={open} className={`d-lg-none ms-auto p-0 border-0 pt-2 ${!open ? 'collapsed' : ''}`}>
                            <span className="navbar-toggler-icon fe fe-more-vertical"></span>
                        </Navbar.Toggle>
                        <div className={`navbar-collapse responsive-navbar ${open ? 'show' : ''}`}>
                            <Navbar.Collapse className='p-0'>
                                <div className="d-flex align-items-center">

                                    {/* Country Flag */}

                                   

                                    {/* Dark / Light mode */}

                                    <div className={`header-element header-theme-mode ${local_varaiable.dataThemeMode === 'dark' ? 'dark-layout' : 'light-layout'}`}>
                                        <Link to="#" className="header-link layout-setting" onClick={() => ToggleDark()}>
                                            <span className="light-layout">
                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" className="header-link-icon" viewBox="0 0 24 24">
                                                    <g><rect fill="none" height="24" width="24" /></g>
                                                    <g><g><path d="M19.78,17.51c-2.47,0-6.57-1.33-8.68-5.43C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12 c0,0.14,0.02,0.28,0.02,0.42C2.61,12.16,3.28,12,3.98,12c0,0,0,0,0,0c0-3.09,1.73-5.77,4.3-7.1C7.78,7.09,7.74,9.94,9.32,13 c1.57,3.04,4.18,4.95,6.8,5.86c-1.23,0.74-2.65,1.15-4.13,1.15c-0.5,0-1-0.05-1.48-0.14c-0.37,0.7-0.94,1.27-1.64,1.64 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C20.18,17.5,19.98,17.51,19.78,17.51z" />
                                                        <path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z" /> </g> </g>
                                                </svg>
                                            </span>
                                            <span className="dark-layout">
                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" className="header-link-icon" viewBox="0 0 24 24">
                                                    <rect fill="none" height="24" width="24" />
                                                    <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>


                                    {/* Small screen search button */}

                                    <div className="header-element header-search ">
                                        <Link to="#" className="header-link d-lg-none d-block" onClick={handleShow}>
                                            {/* <!-- <i className="bi bi-search-alt-2   ps-0"></i> --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 24 24" width="24px">
                                                <path d="M0 0h24v24H0V0z" fill="none" /> <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                            </svg>
                                        </Link>
                                    </div>

                                    <Modal show={show} onHide={handleClose} centered>
                                        <Modal.Body>
                                            <InputGroup>
                                                <Form.Control type="search" className="px-2" placeholder="Search..." aria-label="Username" defaultValue={InputValue}
                                                    onChange={(ele) => {
                                                        myfunction(ele.target.value);
                                                        setInputValue(ele.target.value);
                                                        setSearchDropVisible(true);
                                                    }} onClick={toggleSearchDropdown} />
                                                <InputGroup.Text className="bg-primary text-white" id="Search-Grid">
                                                    <i className="fe fe-search header-link-icon tx-fixed-white fs-18"></i>
                                                </InputGroup.Text>
                                            </InputGroup>
                                            {show1 ? <> <ListGroup className='my-2'> {show2 ? NavData.map((e) => <ListGroup.Item key={Math.random()} className=""> <Link to={`${e.path}/`} onClick={() => { setShow1(false), setInputValue(""); setSearchDropVisible(false); }}><i className="fe fe-chevron-right me-2"></i>{e.title}</Link></ListGroup.Item>) : <b className={`${searchcolor} `}>{searchval}</b>} </ListGroup> </> : ""}
                                            <div className="mt-3">
                                                <div className="">
                                                    <p className="fw-semibold text-muted mb-2 fs-13">Recent Searches</p>
                                                    <div className="ps-2">
                                                        <Link to="#" className="search-tags  me-2"><i className="fe fe-search me-2"></i>People<span></span></Link>
                                                        <Link to="#" className="search-tags  me-2"><i className="fe fe-search me-2"></i>Pages<span></span></Link>
                                                        <Link to="#" className="search-tags  me-2"><i className="fe fe-search me-2"></i>Articles<span></span></Link>
                                                    </div>
                                                </div>
                                                {customshow && !show2 && (
                                                    <div className="mt-3">
                                                        <p className="fw-semibold text-muted mb-2 fs-13">Apps and pages</p>
                                                        <ul className="ps-2">
                                                            {linkData.map((link) => (
                                                                <li key={link.path} className="p-1 d-flex align-items-center text-muted mb-2 search-app">
                                                                    <Link to={link.path} onClick={() => { setSearchDropVisible(false); }}>
                                                                        <span><i className={`bi ${link.icon} me-2 fs-14 bg-primary-transparent avatar rounded-circle`}></i>{link.text}</span>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                {customshow && !show2 && (
                                                    <div className="mt-3">
                                                        <p className="fw-semibold text-muted mb-2 fs-13">Links</p>
                                                        <ul className="ps-2">
                                                            <li className="p-1 align-items-center text-muted mb-1 search-app">
                                                                <Link to="#" className="text-primary"><u>http://spruko/html/spruko.com</u></Link>
                                                            </li>
                                                            <li className="p-1 align-items-center text-muted mb-1 search-app">
                                                                <Link to="#" className="text-primary"><u>http://spruko/demo/spruko.com</u></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer className='d-block'>
                                            <div className="text-center">
                                                <Link to="#" className="text-primary text-decoration-underline fs-15">View all results</Link>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>

                                    {/* Shopping Cart dropdown */}

                                    
                                    {/* Notification dropdown */}

                                    <Dropdown className='header-element dropdown-center notifications-dropdown' autoClose="outside" align='end'>
                                        <Dropdown.Toggle className='header-link' variant="" id="dropdown-basic">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 24 24">
                                                <path d="M0 0h24v24H0V0z" fill="none" /> <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                                            </svg>
                                            <Badge bg='secondary' className="rounded-pill header-icon-badge pulse pulse-secondary" id="notification-icon-badge">{remainingCount}</Badge>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='main-header-dropdown'>
                                            <div className="p-3">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="mb-0 fs-15 fw-semibold">Notifications</p>
                                                    <Link to="#" className="badge bg-secondary-transparent" id="notifiation-data">{remainingCount} Items</Link>
                                                </div>
                                            </div>
                                            <DropdownDivider className='my-0' />
                                            {remainingCount === 0 && (
                                                <div className="p-5 empty-item1">
                                                    <div className="text-center">
                                                        <span className="avatar avatar-xl rounded-2 bg-secondary-transparent">
                                                            <i className="ri-notification-off-line fs-2"></i>
                                                        </span>
                                                        <h6 className="fw-semibold mt-3">No New Notifications</h6>
                                                    </div>
                                                </div>
                                            )}
                                            {cartData.map((idx) => (
                                                <Fragment key={idx.id}>
                                                    {!data.includes(idx.id) && (
                                                        <div className='dropdown-item my-1'>
                                                            <div className="d-flex align-items-start">
                                                                <div className="pe-2"> {idx.previewIcon} </div>
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-start justify-content-between">
                                                                        {idx.divElement}
                                                                        <Link to="#" onClick={() => Remove(idx.id)} className="min-w-fit-content text-muted text-opacity-75 ms-1 dropdown-item-close1"><i className="ti ti-x fs-16"></i></Link>
                                                                    </div>
                                                                    {idx.item2}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Fragment>
                                            ))}
                                             {remainingCount > 0 && (
                                            <div className="p-3 empty-header-item1">
                                                <div className="d-grid"> <Link to={`${import.meta.env.BASE_URL}Pages/NotificationList/`} className="btn btn-primary" onClick={handleviewAll}>View All</Link> </div>
                                            </div>
                                             )}
                                        </Dropdown.Menu>
                                    </Dropdown>


                                    {/* RElated App dropdown */}

                                    <Dropdown className="header-element dropdown-center header-shortcuts-dropdown" align='end'>
                                        <Dropdown.Toggle className="header-link" variant="" id="dropdown-basic">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 24 24">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                                            </svg>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="main-header-dropdown header-shortcuts-dropdown pb-0">
                                            <div className="p-3">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="mb-0 fs-17 fw-semibold">Related Apps</p>
                                                </div>
                                            </div>
                                            <DropdownDivider className='my-0' />
                                            <div className="main-header-shortcuts py-1 px-4">
                                                <div className="row">
                                                    <Link to={`${import.meta.env.BASE_URL}AdminUI/Chat`} className="col-4 p-1 mt-0">
                                                        <div className="text-center p-3 related-app border rounded-2">
                                                            <span>
                                                                <i className="mdi mdi-message-outline text-primary fs-24"></i>
                                                            </span>
                                                            <span className="d-block fs-12 text-dark">Chat</span>
                                                        </div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}Pages/filemanager/FileManager/`} className="col-4 p-1 mt-0">
                                                        <div className="text-center p-3 related-app border rounded-2">
                                                            <span>
                                                                <i className="mdi mdi-file-multiple-outline text-info fs-24"></i>
                                                            </span>
                                                            <span className="d-block fs-12 text-dark">Files</span>
                                                        </div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}AdminUI/FullCalender/`} className="col-4 p-1 mt-0">
                                                        <div className="text-center p-3 related-app border rounded-2">
                                                            <span>
                                                                <i className="mdi mdi-calendar-range-outline text-warning fs-24"></i>
                                                            </span>
                                                            <span className="d-block fs-12 text-dark">Calendar</span>
                                                        </div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}Pages/Extension/Settings/`} className="col-4 p-1 mt-0">
                                                        <div className="text-center p-3 related-app border rounded-2">
                                                            <span>
                                                                <i className="mdi mdi-cog-outline text-info fs-24"></i>
                                                            </span>
                                                            <span className="d-block fs-12 text-dark">Settings</span>
                                                        </div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}Pages/Extension/Faq/`} className="col-4 p-1 mt-0">
                                                        <div className="text-center p-3 related-app border rounded-2">
                                                            <span>
                                                                <i className="mdi mdi-help-circle-outline text-success fs-24"></i>
                                                            </span>
                                                            <span className="d-block fs-12 text-dark">Help</span>
                                                        </div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}Pages/Profile/`} className="col-4 p-1 mt-0">
                                                        <div className="text-center p-3 related-app border rounded-2">
                                                            <span>
                                                                <i className="mdi mdi-account-outline text-primary fs-24"></i>
                                                            </span>
                                                            <span className="d-block fs-12 text-dark">Profile</span>
                                                        </div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}Pages/Extension/AboutCompany/`} className="col-4 p-1 mt-0">
                                                        <div className="text-center p-3 related-app border rounded-2">
                                                            <span>
                                                                <i className="mdi mdi-phone text-primary fs-24"></i>
                                                            </span>
                                                            <span className="d-block fs-12 text-dark">Contact</span>
                                                        </div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}AdminUI/Ratings/`} className="col-4 p-1 mt-0">
                                                        <div className="text-center p-3 related-app border rounded-2">
                                                            <span>
                                                                <i className="mdi mdi-comment-quote-outline text-secondary fs-24"></i>
                                                            </span>
                                                            <span className="d-block fs-12 text-dark">Feeback</span>
                                                        </div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}Firebase/Firebasesignin/`} className="col-4 p-1 mt-0">
                                                        <div className="text-center p-3 related-app border rounded-2">
                                                            <span>
                                                                <i className="mdi mdi-logout text-warning fs-24 "></i>
                                                            </span>
                                                            <span className="d-block fs-12 text-dark">Logout</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="p-3 border-top">
                                                <div className="d-grid">
                                                    <Link to="#" className="btn btn-primary">View All</Link>
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    {/* Full Screen */}

                                    <div className="header-element header-fullscreen">
                                        <Link to="#" onClick={openFullscreen} className={`header-link full-screen-${isFullScreen ? 'close' : 'open'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className={`header-link-icon full-screen-open ${isFullScreen ? 'd-none' : 'd-block'}`} viewBox="0 0 24 24">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" className={`header-link-icon full-screen-close ${isFullScreen ? 'd-block' : 'd-none'}`} viewBox="0 0 24 24" width="24px" fill="none">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                                            </svg>
                                        </Link>
                                    </div>

                                    <div className="header-element">
                                        <Link to={`${import.meta.env.BASE_URL}Settings/SettingsHome`}  className={`header-link`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="header-link-icon fa-spin">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                </svg>
                                        </Link>
                                    </div>

                                    {/* Profile Dropdown */}

                                  
                                </div>
                            </Navbar.Collapse>
                        </div>

                        <div className="header-element">

                            <Link to="#" className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas" onClick={() => Switchericon()}>
                            <img src={ALLImages('user21')} alt="img" width="30" height="30" className="rounded-circle" />
                                
                            </Link>
                        </div>
                       

                    </Navbar>
                </div>
            </header>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { ThemeChanger })(Header);