import CreateTaskPage from '../pages/layout/create-task.js';
import EditTaskPage from '../pages/layout/edit-task.js';
import HomePage from '../pages/layout/home.js';
import NotFoundPage from '../pages/layout/not-found.js';

const routes = [
  {
    page: HomePage,
    path: 'home',
    runOnEmpty: true,
  },
  {
    page: NotFoundPage,
    path: '**',
  },
  {
    page: CreateTaskPage,
    path: 'todo/create',
  },
  {
    page: EditTaskPage,
    path: 'todo/edit'
  },
];

export default routes;
