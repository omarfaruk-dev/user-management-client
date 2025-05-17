import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AddUser from "../pages/Users/AddUser";
import EditUser from "../pages/Users/EditUser";
import Spinner from "../components/ui/Spinner";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                hydrateFallbackElement: <Spinner />,
                loader: ()=> fetch('https://user-management-server-tan.vercel.app/users'),

                Component: Home,
            },
            {
                path: 'add-user',
                Component: AddUser,
            },
            {
                path: 'edit-user/:id',
                hydrateFallbackElement: <Spinner />,
                loader: ({params})=> fetch(`https://user-management-server-tan.vercel.app/users/${params.id}`),
                Component: EditUser,
            },
           
            {
                path: '*',
                Component: ErrorPage,
            }
        ]
    }
])


export default router;