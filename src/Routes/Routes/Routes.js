import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Course from "../../Pages/Course/Course";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Course></Course>,
                loader: () => {
                    return fetch('http://localhost:5000/categories')
                }
            },
            {
                path: '/courses/:id',
                element: <Category></Category>,
                loader: ({ params }) => {
                    // console.log(params.id);
                    return fetch(`http://localhost:5000/courses/${params.id}`)
                }
            },

            {
                path: 'faq',
                element: <FAQ></FAQ>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/courses/${params.id}`)
                }


            },

        ]
    }
])