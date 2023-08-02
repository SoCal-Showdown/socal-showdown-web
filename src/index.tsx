import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Nav from './routes/Nav';
import Post1 from './routes/articles/Post1';

const router = createBrowserRouter([
    {
        path: '',
        element: <Nav />,
        children: [
            {
                index: true,
                element: <Home />,
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
