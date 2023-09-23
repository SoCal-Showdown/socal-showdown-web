import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Root from './routes/Root';
import Post1 from './routes/articles/Post1';
import SignUp from './routes/articles/SignUp';
import Sponsors from './routes/articles/Sponsors';
import LocationTime from './routes/articles/LocationTime';
import Directions from './routes/articles/Directions';

const router = createBrowserRouter([
    {
        path: '',
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'signup',
                element: <SignUp />,
            },
            {
                path: 'sponsors',
                element: <Sponsors />,
            },
            {
                path: 'location_time',
                element: <LocationTime />,
            },
            {
                path: 'directions',
                element: <Directions />,
            },
            {
                path: 'articles',
                children: [
                    {
                        path: 'post1',
                        element: <Post1 />,
                    },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
