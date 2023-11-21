import {APIs_V1} from './api/v1';

function Router(app) {
  app.use('/api/v1', APIs_V1);
}

export default Router;
