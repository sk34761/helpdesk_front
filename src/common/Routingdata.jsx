
import Indexpage from "../components/Dashboard/IndexPage";
import Formvalidation from "../components/Forms/FormValidation";
import ToastComponent from "../components/UiKit/ToastComponent";
import SettingsHome from "../components/settings/Settings";




export const RouteData = [

    { id: 1, path: `${import.meta.env.BASE_URL}Dashboard/IndexPage`, element: <Indexpage /> },
    { id: 2, path: `${import.meta.env.BASE_URL}Forms/FormValidation`, element: <Formvalidation /> },
    { id: 3, path: `${import.meta.env.BASE_URL}UiKit/ToastComponent`, element: <ToastComponent /> },
    { id: 4, path: `${import.meta.env.BASE_URL}Settings/SettingsHome`, element: <SettingsHome /> },

];
