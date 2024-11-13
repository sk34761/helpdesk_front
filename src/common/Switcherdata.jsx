import { useState } from 'react';
import store from './redux/Store';


export function Dark(actionfunction) {
    const theme = store.getState();

    actionfunction({
        ...theme,
        "dataThemeMode": "dark",
        "dataHeaderStyles": "dark",
        "dataMenuStyles": "dark",
        "darkBg": "",
        "bodybg": "",
        "inputBorder": ""
    });
    localStorage.setItem("vexeldarktheme", "dark");
    localStorage.removeItem("vexellighttheme");
    localStorage.removeItem("darkBgRGB1");
    localStorage.removeItem("vexelHeader");
    localStorage.removeItem("vexelMenu");
}

export function Light(actionfunction) {
    const theme = store.getState();

    document.documentElement.removeAttribute('style');


    actionfunction({
        ...theme,
        "dataThemeMode": "light",
        "dataHeaderStyles": "light",
        "dataMenuStyles": 'dark',
        "darkBg": "",
        "bodybg": "",
        "inputBorder": ""

    });
    localStorage.setItem("vexellighttheme", "light");
    localStorage.removeItem("vexeldarktheme");
    localStorage.removeItem("darkBgRGB1");
}

export function Ltr(actionfunction) {
    const theme = store.getState();
    actionfunction({ ...theme, dir: "ltr" });
    localStorage.setItem("vexelltr", "ltr");
    localStorage.removeItem("vexelrtl");
}
export function Rtl(actionfunction) {
    const theme = store.getState();
    actionfunction({ ...theme, dir: "rtl" });
    localStorage.setItem("vexelrtl", "rtl");
    localStorage.removeItem("vexelltr");
}

export const HorizontalClick = (actionfunction) => {
    const theme = store.getState();

    const updatedTheme = {
        ...theme,
        "dataNavLayout": "horizontal",
        "dataMenuStyles": localStorage.vexeldarktheme ? "dark" : localStorage.darkBgRGB1 ? "dark" : localStorage.vexelMenu ? localStorage.vexelMenu : "dark",
        "dataVerticalStyle": "",
        "dataNavStyle": localStorage.vexelnavstyles ? localStorage.vexelnavstyles : "menu-click"
    };

    actionfunction(updatedTheme);
    localStorage.setItem("vexellayout", "horizontal");
};

export const Vertical = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataNavStyle": "",
        "dataMenuStyles": localStorage.vexeldarktheme ? "light" : localStorage.darkBgRGB1 ? "dark" : localStorage.vexelMenu ? localStorage.vexelMenu : "dark",
        "dataVerticalStyle": "icontext",
        "toggled": "icon-text-close"
    });

    localStorage.setItem("vexellayout", "vertical");

};

export const Menuclick = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-click",
        "dataVerticalStyle": "",
        "toggled": "menu-click-closed",
    });
    localStorage.setItem("vexelnavstyles", "menu-click");
    localStorage.removeItem("vexelverticalstyles");
};

export const MenuHover = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-hover",
        "dataVerticalStyle": "",
        "toggled": "menu-hover-closed",
        "horStyle": ""
    });
    localStorage.setItem("vexelnavstyles", "menu-hover");
    localStorage.removeItem("vexelverticalstyles");
};

export const IconClick = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavStyle": "icon-click",
        "dataVerticalStyle": "",
        "toggled": "icon-click-closed",
    });
    localStorage.setItem("vexelnavstyles", "icon-click");
    localStorage.removeItem("vexelverticalstyles");
};

export const IconHover = (actionfunction) => {
    const theme = store.getState();

    actionfunction({
        ...theme,
        "dataNavStyle": "icon-hover",
        "dataVerticalStyle": "",
        "toggled": "icon-hover-closed"
    });
    localStorage.setItem("vexelnavstyles", "icon-hover");
    localStorage.removeItem("vexelverticalstyles");
};

export const Fullwidth = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataWidth": "fullwidth",
    });
    localStorage.setItem("vexelfullwidth", "Fullwidth");
    localStorage.removeItem("vexelboxed");

};

export const Boxed = (actionfunction) => {
    const theme = store.getState();
    const bodyClass = document.body.className;

    let dataWidthValue = "boxed";

    if (bodyClass.includes("login-img")) {
        dataWidthValue = "";
    }

    actionfunction({
        ...theme,
        "dataWidth": dataWidthValue,
    });

    localStorage.setItem("vexelboxed", dataWidthValue === "boxed" ? "Boxed" : "");
    localStorage.removeItem("vexelfullwidth");
};

export const FixedMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuPosition": "fixed",
    });
    localStorage.setItem("vexelmenufixed", "MenuFixed");
    localStorage.removeItem("vexelmenuscrollable");
};

export const scrollMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuPosition": "scrollable",
    });
    localStorage.setItem("vexelmenuscrollable", "Menuscrolled");
    localStorage.removeItem("vexelmenufixed");
};

export const Headerpostionfixed = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderPosition": "fixed",
    });
    localStorage.setItem("vexelheaderfixed", 'FixedHeader');
    localStorage.removeItem("vexelheaderscrollable");
};

export const Headerpostionscroll = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderPosition": "scrollable",
    });
    localStorage.setItem("vexelheaderscrollable", "ScrollableHeader");
    localStorage.removeItem("vexelheaderfixed");
};

export const Regular = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "regular"
    });
    localStorage.setItem("vexelregular", "Regular");
    localStorage.removeItem("vexelclassic");
    localStorage.removeItem("vexelmodern");
};

export const Classic = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "classic",
    });
    localStorage.setItem("vexelclassic", "Classic");
    localStorage.removeItem("vexelregular");
    localStorage.removeItem("vexelmodern");
};

export const Modern = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "modern",
    });
    localStorage.setItem("vexelmodern", "Modern");
    localStorage.removeItem("vexelregular");
    localStorage.removeItem("vexelclassic");
};


export const Defaultmenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataVerticalStyle": "overlay",
        "dataNavLayout": "vertical",
        "toggled": "",
        "dataNavStyle": ""
    });
    localStorage.removeItem("vexelnavstyles");
    localStorage.setItem("vexelverticalstyles", 'default');

    var radiobox = document.getElementById("switcher-default-menu");
    if (radiobox) {
        radiobox.checked = true
    }
};

export const Closedmenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "closed",
        "toggled": "close-menu-close",
        "dataNavStyle": ""
    });
    localStorage.removeItem("vexelnavstyles");
    localStorage.setItem("vexelverticalstyles", "closed");

};

export const iconText = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "icontext",
        "toggled": "icon-text-close",
        "dataNavStyle": ""
    });
    localStorage.removeItem("vexelnavstyles");
    localStorage.setItem("vexelverticalstyles", "icontext");
};

export const iconOverayFn = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "overlay",
        "toggled": "icon-overlay-close",

    })
    localStorage.setItem("vexelverticalstyles", "overlay");
    localStorage.removeItem("vexelnavstyles");

    var radiobox = document.getElementById("switcher-icon-overlay");
    if (radiobox) {
        radiobox.checked = true
    }
    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');
    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        DetachedCloseFn();
    });
};

function DetachedOpenFn() {
    if (window.innerWidth > 992) {
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.setAttribute('data-icon-overlay', 'open');
        }
    }
}

function DetachedCloseFn() {
    if (window.innerWidth > 992) {
        let html = document.documentElement;
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.removeAttribute('data-icon-overlay');
        }
    }
}

export const DetachedFn = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "detached",
        "toggled": "detached-close",
        "dataNavStyle": "",

    })
    localStorage.setItem("vexelverticalstyles", "detached");
    localStorage.removeItem("vexelnavstyles");

    const MainContent = document.querySelector(".main-content");
    const appSidebar = document.querySelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        DetachedCloseFn();
    });
};

export const DoubletFn = (actionfunction) => {
    const theme = store.getState();

    // Update theme with desired values
    const updatedTheme = {
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "doublemenu",
        "toggled": "double-menu-open",
        "dataNavStyle": "",
    };

    // Update state and local storage
    actionfunction(updatedTheme);
    localStorage.setItem("vexelverticalstyles", "doublemenu");
    localStorage.removeItem("vexelnavstyles");

    // Check if the required elements exist after a short delay
    setTimeout(() => {
        const activeSlides = document.querySelectorAll(".main-menu .slide.active");
        if (activeSlides.length >= 4 && !activeSlides[3].querySelector("ul")) {
            // If required elements not found, update theme and state
            const theme = store.getState();
            actionfunction({
                ...theme,
                "toggled": "double-menu-close",
            });
        }
    }, 100);
};

export const bgImage1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg1"
    });
    localStorage.setItem("bgimage", "bgimg1");

};

export const bgImage2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg2"
    });
    localStorage.setItem("bgimage", "bgimg2");

};

export const bgImage3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg3"
    });
    localStorage.setItem("bgimage", "bgimg3");

};

export const bgImage4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg4"
    });
    localStorage.setItem("bgimage", "bgimg4");

};

export const bgImage5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bgImg": "bgimg5"
    });
    localStorage.setItem("bgimage", "bgimg5");

};

export const lightMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "light",
    });
    localStorage.setItem("vexelMenu", "light");
};

export const colorMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "color",
    });
    localStorage.setItem("vexelMenu", "color");
};

export const darkMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "dark",
    });
    localStorage.setItem("vexelMenu", "dark");
};

export const gradientMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "gradient",
    });
    localStorage.setItem("vexelMenu", "gradient");
};

export const transparentMenu = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataMenuStyles": "transparent",
    });
    localStorage.setItem("vexelMenu", "transparent");
};

export const lightHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "light",
    });
    localStorage.setItem("vexelHeader", "light");
};

export const darkHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "dark",
    });
    localStorage.setItem("vexelHeader", "dark");
};

export const colorHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "color",
    });
    localStorage.setItem("vexelHeader", "color");
};

export const gradientHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "gradient",

    });
    localStorage.setItem("vexelHeader", "gradient");
};

export const transparentHeader = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataHeaderStyles": "transparent",
    });
    localStorage.setItem("vexelHeader", "transparent");
};

export const primaryColor1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "58, 88, 146",
        "colorPrimary": "58 88 146"
    });
    localStorage.setItem("primaryRGB", "58, 88, 146");
    localStorage.setItem("primaryRGB1", "58 88 146");

};
export const primaryColor2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "92, 144, 163",
        "colorPrimary": "92 144 163"
    });
    localStorage.setItem("primaryRGB", "92, 144, 163");
    localStorage.setItem("primaryRGB1", "92 144 163");
};

export const primaryColor3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "161, 90, 223",
        "colorPrimary": "161 90 223"
    });
    localStorage.setItem("primaryRGB", "161, 90, 223");
    localStorage.setItem("primaryRGB1", "161 90 223");
};

export const primaryColor4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "78, 172, 76",
        "colorPrimary": "78 172 76"
    });
    localStorage.setItem("primaryRGB", "78, 172, 76");
    localStorage.setItem("primaryRGB1", "78 172 76");
};

export const primaryColor5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "223, 90, 90",
        "colorPrimary": "223 90 90"
    });
    localStorage.setItem("primaryRGB", "223, 90, 90");
    localStorage.setItem("primaryRGB1", "223 90 90");
};

export const backgroundColor1 = (actionfunction) => {
    const theme = store.getState();

    actionfunction({
        ...theme,
        "bodyBg1": "20, 30, 96",
        "bodyBg2": "34, 44, 110",
        "darkBg": "25, 38, 101",
        "inputBorder": "255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": 'dark',
        "dataHeaderStyles": 'dark',
    });

    localStorage.setItem('darkBgRGB1', "20, 30, 96");
    localStorage.setItem('darkBgRGB2', "34, 44, 110");
    localStorage.setItem('darkBgRGB3', "25, 38, 101");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
    
};


export const backgroundColor2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "8, 78, 115",
        "bodyBg2": "22, 92, 129",
        "darkBg": "13, 86, 120",
        "inputBorder": "255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "8, 78, 115");
    localStorage.setItem('darkBgRGB2', "22, 92, 129");
    localStorage.setItem('darkBgRGB3', "13, 86, 120",);
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");

};

export const backgroundColor3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "90, 37, 135",
        "bodyBg2": "104, 51, 149",
        "darkBg": "95, 45, 140",
        "inputBorder": "255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "90, 37, 135");
    localStorage.setItem('darkBgRGB2', "104, 51, 149");
    localStorage.setItem('darkBgRGB3', "95, 45, 140",);
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");

};

export const backgroundColor4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "24, 101, 51",
        "bodyBg2": "38, 115, 65",
        "darkBg": "29, 109, 56",
        "inputBorder": "255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "24, 101, 51");
    localStorage.setItem('darkBgRGB2', "38, 115, 65");
    localStorage.setItem('darkBgRGB3', "29, 109, 56");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");

};

export const backgroundColor5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg1": "120, 66, 20",
        "bodyBg2": "134, 80, 34",
        "darkBg": "125, 74, 25",
        "inputBorder": "255, 255, 255, 0.1",
        "dataThemeMode": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB1', "120, 66, 20");
    localStorage.setItem('darkBgRGB2', "134, 80, 34");
    localStorage.setItem('darkBgRGB3', "125, 74,25");
    localStorage.setItem('darkBgRGB4', "255, 255, 255, 0.1");
   
};

const ColorPicker = (props) => {
    return (
        <div className="color-picker-input">
            <input type="color" {...props} />
        </div>
    );
};

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
const Themeprimarycolor = ({ actionfunction }) => {
    const theme = store.getState();
    const [state, updateState] = useState("#845adf");

    const handleInput = (e) => {
        const rgb = hexToRgb(e.target.value);

        if (rgb !== null) {
            const { r, g, b } = rgb;
            updateState(e.target.value);
            actionfunction({
                ...theme,
                "colorPrimaryRgb": `${r}, ${g}, ${b}`,
                "colorPrimary": `${r}, ${g}, ${b}`
            });
            localStorage.setItem("dynamiccolor", `${r}, ${g}, ${b}`);
        }
    };

    return (
        <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;

//themeBackground
export const Themebackgroundcolor = ({ actionfunction }) => {
    const theme = store.getState();
    const [state, updateState] = useState("#845adf");
    const handleInput = (e) => {
        const { r, g, b } = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "bodyBg1": `${r}, ${g}, ${b}`,
            "bodyBg2": `${r + 19} ${g + 19} ${b + 19}`,
            "darkBg": `${r + 19} ${g + 19} ${b + 19}`,
            "inputBorder": "255, 255, 255, 0.1",
            "dataThemeMode": "dark",
            "dataHeaderStyles": "dark",
            "dataMenuStyles": "dark",
        });
        localStorage.setItem("darkBgRGB1", `${r}, ${g}, ${b}`);
        localStorage.setItem("darkBgRGB2", `${r + 19} ${g + 19} ${b + 19}`);
        localStorage.setItem("darkBgRGB3", `${r + 19} ${g + 19} ${b + 19}`);
        localStorage.setItem("darkBgRGB4", "255, 255, 255, 0.1");

    };
    return (
        <div className="Themebackgroundcolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export const Reset = (actionfunction) => {
    const theme = store.getState();
    Vertical(actionfunction);
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        dataThemeMode: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "vertical",
        dataHeaderStyles: "light",
        dataVerticalStyle: "icontext",
        StylebodyBg: "107 64 64",
        StyleDarkBg: "93 50 50",
        toggled: "",
        dataNavStyle: "",
        horStyle: "",
        dataPageStyle: "regular",
        dataWidth: "fullwidth",
        dataMenuPosition: "fixed",
        dataHeaderPosition: "fixed",
        iconOverlay: "",
        colorPrimaryRgb: "",
        colorPrimary: "",
        bodyBg1: "",
        bodyBg2: "",
        darkBg: "",
        inputBorder: "",
        bgImg: "",
        iconText: "",
        body: {
            class: ""
        }
    });
    localStorage.clear();
};

export const Resetlandingswitcher = (actionfunction) => {
    const theme = store.getState();
    Vertical(actionfunction);
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        dataThemeMode: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "horizontal",
        dataHeaderStyles: "light",
        dataVerticalStyle: "icontext",
        StylebodyBg: "107 64 64",
        StyleDarkBg: "93 50 50",
        toggled: "",
        dataNavStyle: "",
        dataMenuPosition: "",
        iconOverlay: "",
        colorPrimaryRgb: "",
        bgImg: "",
        iconText: "",
        body: {
            class: ""
        }
    });
    localStorage.clear();
};

export const LocalStorageBackup = (actionfunction) => {

    (localStorage.vexelltr) ? Ltr(actionfunction) : "";
    (localStorage.vexelrtl) ? Rtl(actionfunction) : "";
    (localStorage.vexeldarktheme) ? Dark(actionfunction) : "";
    (localStorage.vexellighttheme) ? Light(actionfunction) : "";
    (localStorage.vexelregular) ? Regular(actionfunction) : "";
    (localStorage.vexelclassic) ? Classic(actionfunction) : "";
    (localStorage.vexelmodern) ? Modern(actionfunction) : "";
    (localStorage.vexelfullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.vexelboxed) ? Boxed(actionfunction) : "";
    (localStorage.vexelmenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.vexelmenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.vexelheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.vexelheaderscrollable) ? Headerpostionscroll(actionfunction) : "";

    (localStorage.vexelnavstyles === "menu-click") ? Menuclick(actionfunction) : '';
    (localStorage.vexelnavstyles === "menu-hover") ? MenuHover(actionfunction) : '';
    (localStorage.vexelnavstyles === "icon-click") ? IconClick(actionfunction) : '';
    (localStorage.vexelnavstyles === "icon-hover") ? IconHover(actionfunction) : '';

    (localStorage.bgimage === 'bgimg1') ? bgImage1(actionfunction) : '';
    (localStorage.bgimage === 'bgimg2') ? bgImage2(actionfunction) : '';
    (localStorage.bgimage === 'bgimg3') ? bgImage3(actionfunction) : '';
    (localStorage.bgimage === 'bgimg4') ? bgImage4(actionfunction) : '';
    (localStorage.bgimage === 'bgimg5') ? bgImage5(actionfunction) : '';
    (localStorage.vexellayout == 'horizontal') && HorizontalClick(actionfunction);
    (localStorage.vexellayout == 'vertical') && Vertical(actionfunction);

    //primitive 
    if (
        localStorage.getItem("vexelltr") == null ||
        localStorage.getItem("vexelltr") == "ltr"
    ) {
        // addOrRemoveCss(ltr);
    }
    if (localStorage.getItem("vexelrtl") == "rtl") {
        document.querySelector("body")?.classList.add("rtl");
        document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
        // addOrRemoveCss(rtl);
    }

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '58, 88, 146':
            primaryColor1(actionfunction);

            break;
        case '92, 144, 163':
            primaryColor2(actionfunction);

            break;
        case '161, 90, 223':
            primaryColor3(actionfunction);

            break;
        case '78, 172, 76':
            primaryColor4(actionfunction);

            break;
        case '223, 90, 90':
            primaryColor5(actionfunction);

            break;
        default:
            break;
    }
    // Theme Primary: Colors: End

    switch (localStorage.darkBgRGB1) {
        case '20, 30, 96':
            backgroundColor1(actionfunction);

            break;
        case '8, 78, 115':
            backgroundColor2(actionfunction);

            break;
        case '90, 37, 135':
            backgroundColor3(actionfunction);

            break;
        case '24, 101, 51':
            backgroundColor4(actionfunction);

            break;
        case '120, 66, 20':
            backgroundColor5(actionfunction);

            break;
        default:
            break;

    }

    //layout
    if (localStorage.vexelverticalstyles) {
        const verticalStyles = localStorage.getItem("vexelverticalstyles");

        switch (verticalStyles) {
            case "default":
                Defaultmenu(actionfunction);
                break;
            case "closed":
                Closedmenu(actionfunction);
                break;
            case "icontext":
                iconText(actionfunction);
                break;
            case "overlay":
                iconOverayFn(actionfunction);
                break;
            case "detached":
                DetachedFn(actionfunction);
                break;
            case "doublemenu":
                DoubletFn(actionfunction);
                break;
        }
    }

    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "colorPrimary": localStorage.dynamiccolor
        });
    }

    //Theme BAckground:
    if (localStorage.darkBgRGB1) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "bodyBg1": localStorage.darkBgRGB1,
            "bodyBg2": localStorage.darkBgRGB2,
            "darkBg": localStorage.darkBgRGB3,
            "inputBorder": localStorage.darkBgRGB4,
            "dataThemeMode": "dark",
            "dataHeaderStyles": "dark",
            "dataMenuStyles": "dark",
        });
        // Dark(actionfunction);
    }

    // ThemeColor MenuColor Start
    switch (localStorage.vexelMenu) {
        case 'light':
            lightMenu(actionfunction);

            break;
        case 'dark':
            darkMenu(actionfunction);

            break;
        case 'color':
            colorMenu(actionfunction);

            break;
        case 'gradient':
            gradientMenu(actionfunction);

            break;
        case 'transparent':
            transparentMenu(actionfunction);

            break;
        default:
            break;
    }

    // ThemeColor Header Colors: start
    switch (localStorage.vexelHeader) {
        case 'light':
            lightHeader(actionfunction);

            break;
        case 'dark':
            darkHeader(actionfunction);

            break;
        case 'color':
            colorHeader(actionfunction);

            break;
        case 'gradient':
            gradientHeader(actionfunction);

            break;
        case 'transparent':
            transparentHeader(actionfunction);

            break;
        default:
            break;
    }

};
