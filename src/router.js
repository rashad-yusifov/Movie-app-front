import Home from './components/pages/Home';
import NewMovie from './components/pages/NewMovie';

export const routers = [
    {
        path: '/',
        page: <Home/>
    },
    {
        path: '/new-movie',
        page: <NewMovie/>
    },
];