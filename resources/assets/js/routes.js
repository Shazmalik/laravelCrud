import CreateForm from './components/Create';
import UsersTable from './components/users/UsersTable';
import EditForm from './components/Edit';

export const routes = [
    {
        path: '',
        component: UsersTable
    },
    {
        path: '/user/create',
        component: CreateForm
    },
    {
        path: '/user/:id',
        component: EditForm
    }
];