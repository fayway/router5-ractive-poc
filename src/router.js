import { createRouter, loggerPlugin } from 'router5';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
import {routes} from './routes';

const router = createRouter(routes)
  .usePlugin(loggerPlugin)
  .usePlugin(listenersPlugin())
  .usePlugin(browserPlugin({
    useHash: true
  })
);

export default router;