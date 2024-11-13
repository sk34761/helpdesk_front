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
            "bodyBg1": "",
            "bodyBg2": "",
        });
        localStorage.setItem("vexeldarktheme", "dark");
        localStorage.removeItem("vexellighttheme");
        localStorage.removeItem("vexelMenu");
        localStorage.removeItem("vexelHeader");
   
}
export function Light(actionfunction) {
    const theme = store.getState();

    actionfunction({
        ...theme,
        "dataThemeMode": "light",
        "dataHeaderStyles": "light",
        "darkBg": "",
        "bodyBg1": "",
        "bodyBg2": "",
        "inputBorder": "",
        "dataMenuStyles":  'light' 

    });
    localStorage.setItem("vexellighttheme", "light");
    localStorage.removeItem("vexeldarktheme");

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
    const [state, updateState] = useState("#00a5a2");

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


export const Resetlandingswitcher = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        dataThemeMode: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "horizontal",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
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

    //primitive 
    if (
        localStorage.getItem("vexelltr") == null ||
        localStorage.getItem("vexelltr") == "ltr"
    ) 
    if (localStorage.getItem("vexelrtl") == "rtl") {
        document.querySelector("body")?.classList.add("rtl");
        document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");

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

    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "colorPrimary": localStorage.dynamiccolor
        });
    }

};
