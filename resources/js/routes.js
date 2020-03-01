import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import Details from "./components/Details";

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/employee/add',
            name: 'addEmployee',
            component: AddEmployee
        },
        {
            path: '/employee/:id',
            name: 'employee',
            component: Details
        },
        {
            path: '/employee/:id/update',
            name: 'updateEmployee',
            component: UpdateEmployee
        }
    ]
}
