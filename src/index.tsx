import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Root from './routes/Root';
import Post1 from './routes/articles/Post1';
import Row from './routes/articles/Row';
import Teams from './routes/articles/Teams';
import GameRules from './routes/articles/GameRules';
import EventInfo from './routes/articles/EventInfo';
import Volunteer from './routes/articles/Volunteer';
import Covid from './routes/articles/covid';

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
                path: 'teams',
                element: <Teams />,
            },
            {
                path: 'covid',
                element: <Covid />,
            },
            {
                path: 'rules',
                element: <GameRules />,
            },
            {
                path: 'info',
                element: <EventInfo />,
            },
            {
                path: 'row',
                element: <Row />,
            },
            {
                path: 'volunteer',
                element: <Volunteer />,
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
