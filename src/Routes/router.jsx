import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Spinner from "../components/ui/Spinner";
import AddUser from "../pages/Users/AddUser";
import EditUser from "../pages/Users/EditUser";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                hydrateFallbackElement: Spinner,
                loader: ()=> fetch('http://localhost:3000/users'),

                Component: Home,
            },
            {
                path: 'add-user',
                Component: AddUser,
            },
            {
                path: 'edit-user',
                loader: ({params})=> fetch(`http://localhost:3000/users/${params._id}`),
                Component: EditUser,
            },
           
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    }
])


export default router;