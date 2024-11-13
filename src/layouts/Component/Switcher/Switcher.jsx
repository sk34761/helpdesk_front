import { Link } from 'react-router-dom';
import * as Switcherdata from "../../../common/Switcherdata";
import { Button, Nav, OverlayTrigger, Row, Tab, Tooltip, } from "react-bootstrap"
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import { ThemeChanger } from "../../../common/redux/Action";
import Themeprimarycolor, * as switcherdata from "../../../common/Switcherdata";
import { useEffect } from 'react';


const Switcher = ({ local_varaiable, ThemeChanger }) => {

    useEffect(() => {
        switcherdata.LocalStorageBackup(ThemeChanger);
    }, []);

    const Switcherclose = () => {
        if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {

            document.querySelector(".offcanvas-end")?.classList.remove("show");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-block");
            document.querySelector(".switcher-backdrop")?.classList.add("d-none");
        }

    };

    const generateCustomStyles = () => {
        let styles = '';

        if (localStorage.getItem("darkBgRGB1") && localStorage.getItem("darkBgRGB2")) {
            styles += `--body-bg-rgb:${local_varaiable.bodyBg1};`;
            styles += `--body-bg-rgb2:${local_varaiable.bodyBg2};`;
            styles += `--light-rgb:${local_varaiable.bodyBg1};`;
            styles += `--form-control-bg:rgb(${local_varaiable.darkBg});`;
            styles += `--input-border:rgba(${local_varaiable.inputBorder});`;
        }

        if (localStorage.getItem("primaryRGB")) {
            styles += `--primary-rgb:${local_varaiable.colorPrimaryRgb};`;
        }

        return styles;
    };

    const customStyles = generateCustomStyles();
    return (
        <div>
            <Helmet>
                <html dir={local_varaiable.dir}
                    data-theme-mode={local_varaiable.dataThemeMode}
                    data-header-styles={local_varaiable.dataHeaderStyles}
                    data-vertical-style={local_varaiable.dataVerticalStyle}
                    data-nav-layout={local_varaiable.dataNavLayout}
                    data-menu-styles={local_varaiable.dataMenuStyles}
                    data-toggled={local_varaiable.toggled}
                    data-nav-style={local_varaiable.dataNavStyle}
                    hor-style={local_varaiable.horStyle}
                    data-page-style={local_varaiable.dataPageStyle}
                    data-width={local_varaiable.dataWidth}
                    data-menu-position={local_varaiable.dataMenuPosition}
                    data-header-position={local_varaiable.dataHeaderPosition}
                    data-icon-overlay={local_varaiable.iconOverlay}
                    data-bg-img={local_varaiable.bgImg}
                    data-icon-text={local_varaiable.iconText}
                    style={customStyles}
                >
                </html>
            </Helmet>
            <div className="switcher-backdrop d-none" onClick={() => { Switcherclose(); }}></div>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
                    <Button variant='' onClick={() => { Switcherclose(); }} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                </div>
                <div className="offcanvas-body">
                    <Tab.Container defaultActiveKey={1}>
                        <Nav className="nav-tabs nav-justified" >

                            <Nav.Link eventKey={1} className='br-0 border-0'>Theme Styles</Nav.Link>

                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey={1} className="fade border-0" id="switcher-home" role="tabpanel" aria-labelledby="switcher-home-tab"
                                tabIndex={0}>
                                <div className="">
                                    <p className="switcher-style-head">Display Mode:</p>
                                    <Row className="row switcher-style gx-0">
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-light-theme">
                                                    Light
                                                </label>
                                                <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme" checked={local_varaiable.dataThemeMode !== 'dark'} onChange={(_e) => { }} onClick={() => switcherdata.Light(ThemeChanger)} />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-dark-theme">
                                                    Dark
                                                </label>
                                                <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme" checked={local_varaiable.dataThemeMode == 'dark'} onChange={(_e) => { }} onClick={() => switcherdata.Dark(ThemeChanger)} />
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                               
                                <div className="">
                                    <p className="switcher-style-head">Navigation Styles:</p>
                                    <Row className="row switcher-style gx-0">
                                        <div className="col-sm-4 col-6">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-vertical">
                                                    Vertical
                                                </label>
                                                <input className="form-check-input" type="radio" name="navigation-style" id="switcher-vertical" checked={local_varaiable.dataNavLayout === 'vertical'} onChange={(_e) => { }} onClick={() => switcherdata.Vertical(ThemeChanger)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-6">
                                            <div className="form-check switch-select">
                                                <label className="form-check-label" htmlFor="switcher-horizontal">
                                                    Horizontal
                                                </label>
                                                <input className="form-check-input" type="radio" name="navigation-style" id="switcher-horizontal" checked={local_varaiable.dataNavLayout === 'horizontal'} onChange={(_e) => { }} onClick={() => switcherdata.HorizontalClick(ThemeChanger)} />
                                            </div>
                                        </div>
                                    </Row>
                                </div>

                                <div>
                                    <div className="theme-colors">
                                        <p className="switcher-style-head">Menu Colors:</p>
                                        <div className="d-flex switcher-style pb-2">
                                            <div className="form-check switch-select me-3">
                                                <OverlayTrigger overlay={<Tooltip>Light Menu</Tooltip>}><input className="form-check-input color-input color-white" type="radio" name="menu-colors" id="switcher-menu-light" defaultChecked={local_varaiable.dataMenuStyles == 'light'} onChange={(_e) => { }} onClick={() => switcherdata.lightMenu(ThemeChanger)} /></OverlayTrigger>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <OverlayTrigger overlay={<Tooltip>Dark Menu</Tooltip>}><input className="form-check-input color-input color-dark" type="radio" name="menu-colors" id="switcher-menu-dark" defaultChecked={local_varaiable.dataMenuStyles == 'dark'} onChange={(_e) => { }} onClick={() => switcherdata.darkMenu(ThemeChanger)} /></OverlayTrigger>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <OverlayTrigger overlay={<Tooltip>Color Menu</Tooltip>}><input className="form-check-input color-input color-primary" type="radio" name="menu-colors" id="switcher-menu-primary" defaultChecked={local_varaiable.dataMenuStyles == 'color'} onClick={() => Switcherdata.colorMenu(ThemeChanger)} /></OverlayTrigger>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <OverlayTrigger overlay={<Tooltip>Gradient Menu</Tooltip>}><input className="form-check-input color-input color-gradient" type="radio" name="menu-colors" id="switcher-menu-gradient" defaultChecked={local_varaiable.dataMenuStyles == 'gradient'} onChange={(_e) => { }} onClick={() => switcherdata.gradientMenu(ThemeChanger)} /></OverlayTrigger>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <OverlayTrigger overlay={<Tooltip>Transparent Menu</Tooltip>}><input className="form-check-input color-input color-transparent" type="radio" name="menu-colors" id="switcher-menu-transparent" defaultChecked={local_varaiable.dataMenuStyles == 'transparent'} onChange={(_e) => { }} onClick={() => switcherdata.transparentMenu(ThemeChanger)} /></OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Menu dynamically change from below Theme Primary color picker</div>
                                    </div>
                                    <div className="theme-colors">
                                        <p className="switcher-style-head">Header Colors:</p>
                                        <div className="d-flex switcher-style pb-2">
                                            <div className="form-check switch-select me-3">
                                                <OverlayTrigger overlay={<Tooltip>Light Header</Tooltip>}><input className="form-check-input color-input color-white" type="radio" name="header-colors" id="switcher-header-light" defaultChecked={local_varaiable.dataHeaderStyles == 'light'} onChange={(_e) => { }} onClick={() => switcherdata.lightHeader(ThemeChanger)} /></OverlayTrigger>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <OverlayTrigger overlay={<Tooltip>Dark Header</Tooltip>}><input className="form-check-input color-input color-dark" type="radio" name="header-colors" id="switcher-header-dark" defaultChecked={local_varaiable.dataHeaderStyles == 'dark'} onChange={(_e) => { }} onClick={() => switcherdata.darkHeader(ThemeChanger)} /></OverlayTrigger>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <OverlayTrigger overlay={<Tooltip>Color Header</Tooltip>}><input className="form-check-input color-input color-primary" type="radio" name="header-colors" id="switcher-header-primary" defaultChecked={local_varaiable.dataHeaderStyles == 'color'} onChange={(_e) => { }} onClick={() => switcherdata.colorHeader(ThemeChanger)} /></OverlayTrigger>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <OverlayTrigger overlay={<Tooltip>Gradient Header</Tooltip>}><input className="form-check-input color-input color-gradient" type="radio" name="header-colors" id="switcher-header-gradient" defaultChecked={local_varaiable.dataHeaderStyles == 'gradient'} onChange={(_e) => { }} onClick={() => switcherdata.gradientHeader(ThemeChanger)} /></OverlayTrigger>
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <OverlayTrigger overlay={<Tooltip>Transparent Header</Tooltip>}><input className="form-check-input color-input color-transparent" type="radio" name="header-colors" id="switcher-header-transparent" defaultChecked={local_varaiable.dataHeaderStyles == 'transparent'} onChange={(_e) => { }} onClick={() => switcherdata.transparentHeader(ThemeChanger)} /></OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Header dynamically change from below Theme Primary color picker</div>
                                    </div>
                                    <div className="theme-colors">
                                        <p className="switcher-style-head">Theme Primary:</p>
                                        <div className="d-flex flex-wrap align-items-center switcher-style">
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-1" type="radio" name="theme-primary" id="switcher-primary" checked={local_varaiable.colorPrimaryRgb == '58, 88, 146'} onClick={() => switcherdata.primaryColor1(ThemeChanger)} onChange={(_e) => { }} />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-2" type="radio"
                                                    name="theme-primary" id="switcher-primary1" checked={local_varaiable.colorPrimaryRgb == '92, 144, 163'}
                                                    onClick={() => switcherdata.primaryColor2(ThemeChanger)} onChange={(_e) => { }}
                                                />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                                    id="switcher-primary2" checked={local_varaiable.colorPrimaryRgb == '161, 90, 223'}
                                                    onClick={() => switcherdata.primaryColor3(ThemeChanger)} onChange={(_e) => { }}
                                                />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                                    id="switcher-primary3" checked={local_varaiable.colorPrimaryRgb == '78, 172, 76'}
                                                    onClick={() => switcherdata.primaryColor4(ThemeChanger)} onChange={(_e) => { }}
                                                />
                                            </div>
                                            <div className="form-check switch-select me-3">
                                                <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                                    id="switcher-primary5" checked={local_varaiable.colorPrimaryRgb == '223, 90, 90'}
                                                    onClick={() => switcherdata.primaryColor5(ThemeChanger)} onChange={(_e) => { }}
                                                />
                                            </div>
                                            <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                                <div className='theme-container-primary'>
                                                    <button className="">nano</button>
                                                </div>
                                                <div className='pickr-container-primary'>
                                                    <div className='pickr'>
                                                        <Button className='pcr-button' onClick={(ele) => {
                                                            if (ele.target.querySelector("input")) {
                                                                ele.target.querySelector("input").click();
                                                            }
                                                        }}>
                                                            <Themeprimarycolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                                        </Button>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                
                                
                
                                
                              
                            </Tab.Pane>
                            
                            <div className="d-flex justify-content-center canvas-footer flex-wrap">
                                <Link className="btn btn-danger m-1 border-0" to="#!" onClick={() => switcherdata.Reset(ThemeChanger)}>Reset</Link>
                            </div>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Switcher);