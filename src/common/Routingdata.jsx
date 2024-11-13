
import Indexpage from "../components/Dashboard/IndexPage";
import Formvalidation from "../components/Forms/FormValidation";
import ToastComponent from "../components/UiKit/ToastComponent";
import SettingsHome from "../components/settings/Settings";
import AddRole from "../components/Users/AddRole";
import Roles from "../components/Users/Roles";
import Users from "../components/Users/Users";
import AddTechnician from "../components/Users/AddTechnician";
import AddRequester from "../components/Users/AddRequester";
import TechnicianGroups from "../components/Users/TechnicianGroups"
import ActiveGroups from "../components/Users/ActiveGroups"
import UserSettings from "../components/Users/UserList";




export const RouteData = [

    { id: 1, path: `${import.meta.env.BASE_URL}Dashboard/IndexPage`, element: <Indexpage /> },
    { id: 2, path: `${import.meta.env.BASE_URL}Forms/FormValidation`, element: <Formvalidation /> },
    { id: 3, path: `${import.meta.env.BASE_URL}UiKit/ToastComponent`, element: <ToastComponent /> },
    { id: 4, path: `${import.meta.env.BASE_URL}Settings/SettingsHome`, element: <SettingsHome /> },
    { id: 5, path: `${import.meta.env.BASE_URL}Users/Roles`, element: <Roles /> },
    { id: 6, path: `${import.meta.env.BASE_URL}Users/AddRole`, element: <AddRole /> },
    { id: 7, path: `${import.meta.env.BASE_URL}Users/List`, element: <UserSettings /> },
    { id: 8, path: `${import.meta.env.BASE_URL}Users/AddTechnician`, element: <AddTechnician /> },
    { id: 9, path: `${import.meta.env.BASE_URL}Users/AddRequester`, element: < AddRequester /> },
    

];
