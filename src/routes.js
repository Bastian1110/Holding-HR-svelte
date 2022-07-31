import Login from './routes/Login.svelte';
import Dashboard from './routes/Dashboard.svelte';
import Manager from './routes/Manager.svelte';
import Settings from './routes/Settings.svelte';
import UserManager from './routes/UserManager.svelte';
import Empresa from './routes/Tables/Empresa.svelte';
import Status from './routes/Tables/Status.svelte';
import Origen from './routes/Tables/Origen.svelte';
import Puesto from './routes/Tables/Puesto.svelte';
import Candidato from './routes/Tables/Candidato.svelte';
import Entrevista from './routes/Tables/Entrevista.svelte';
import NoPage from './routes/NoPage.svelte';

import {wrap} from 'svelte-spa-router/wrap';

export default {
    '/': Login,
    '/dashboard': wrap({
        component: Dashboard,
        conditions:[
            (detail) => {
                let user = localStorage.getItem('user');
                if(user) {
                    return true;
                }
                else {
                    return false;
                }
            },
        ],
    }),
    '/settings': wrap({
        component: Settings,
        conditions:[
            (detail) => {
                let user = localStorage.getItem('user');
                if(user) {
                    return true;
                }
                else {
                    return false;
                }
            },
        ],
    }),
    '/usermanager': wrap({
        component: UserManager,
        conditions:[
            (detail) => {
                let user = localStorage.getItem('user');
                let admin = (localStorage.getItem('rol') == "admin") ?  true : false;
                if(user && admin){
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
    '/manager/empresa': wrap({
        component: Empresa,
        conditions:[
            (detail) => {
                let user = localStorage.getItem('user');
                let admin = (localStorage.getItem('rol') == "admin") ?  true : false;
                if(user && admin){
                    return true;
                }
                else {
                    return false;
                }
            },
        ],
    }),
    '/manager/status': wrap({
        component: Status,
        conditions:[
            (detail) => {
                let user = localStorage.getItem('user');
                let admin = (localStorage.getItem('rol') == "admin") ?  true : false;
                if(user && admin){
                    return true;
                }
                else {
                    return false;
                }
            },
        ],
    }),
    '/manager/candidato': wrap({
        component: Candidato,
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
    '/manager/origen': wrap({
        component: Origen,
        conditions:[
            (detail) => {
                let user = localStorage.getItem('user');
                let admin = (localStorage.getItem('rol') == "admin") ?  true : false;
                if(user && admin){
                    return true;
                }
                else {
                    return false;
                }
            },
        ],
    }),
    '/manager/puesto': wrap({
        component: Puesto,
        conditions:[
            (detail) => {
                let user = localStorage.getItem('user');
                let admin = (localStorage.getItem('rol') == "admin") ?  true : false;
                if(user && admin){
                    return true;
                }
                else {
                    return false;
                }
            },
        ],
    }),
    '/manager/entrevista': wrap({
        component: Entrevista,
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