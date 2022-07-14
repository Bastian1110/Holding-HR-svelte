import Login from './routes/Login.svelte';
import Dashboard from './routes/Dashboard.svelte';
import Manager from './routes/Manager.svelte';
import Empresas from './routes/Tables/Empresas.svelte';
import NoPage from './routes/NoPage.svelte';

import {wrap} from 'svelte-spa-router/wrap';

export default {
    '/': Login,
    '/dashboard': wrap({
        component: Dashboard,
        conditions:[
            (detail) => {
                let user = localStorage.getItem('user');
                if(user){
                    return true;
                }
                else {
                    return false;
                }
            },
        ],
    }),
    '/manager': wrap({
        component: Manager,
        conditions:[
            (detail) => {
                let user = localStorage.getItem('user');
                if(user){
                    return true;
                }
                else {
                    return false;
                }
            },
        ],
    }),
    '/manager/empresas': wrap({
        component: Empresas,
        conditions:[
            (detail) => {
                let user = localStorage.getItem('user');
                if(user){
                    return true;
                }
                else {
                    return false;
                }
            },
        ],
    }),
    '*': NoPage,
};