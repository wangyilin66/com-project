
import Maps from "../containers//map/index.js";
import CaseWatch from '../containers/caseWatch/index.js';
import FightDeploy from '../containers/fightDeploy/index.js';
import Login from '../containers/Login/Login.js';
import Admin from '../containers/Admin/Admin.js';

const Routes = [
    {
        path:"/login",
        component:Login
    },
    {
        path:"/map",
        component:Maps
    },
    {
        path:"/casewatch",
        component:CaseWatch
       },
       {
        path:"/fightdeploy",
        component:FightDeploy
       },
       {
        path:"/admin",
        component:Admin
       },

]

export default Routes;