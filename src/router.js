import { createRouter, loggerPlugin } from 'router5';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';

const routes = [
  {name: 'home', path: '/'},
  {name: 'about',   path: '/about'},
  {name: 'about.me',   path: '/me'},
  {name: 'about.company',   path: '/company'},
  {name: 'contact', path: '/contact'},
  {name: 'test', path: '/test'}
];

const router = createRouter(routes)
  .usePlugin(loggerPlugin)
  .usePlugin(listenersPlugin())
  .usePlugin(browserPlugin({
    useHash: true
  }));

// router.addListener(function (toState, fromState) {
//   console.log('Global addListener');
// });
// router.addNodeListener('about', function (toState, fromState) {
//   console.log('about node matched from addNodeListener');
// });
// router.addRouteListener('about', function (toState, fromState) {
//   console.log('about route matched from addRouteListener');
// });

// setTimeout(()=>{
//   console.log('Protecting contact');
//   const canActivate = (router) => (toState, fromState, done) => {
//     return false;
//   };
//   router.canActivate('contact', canActivate);
// }, 1000);
//
// setTimeout(()=>{
//   router.navigate('about');
// }, 1000);
// setTimeout(()=>{
//   router.navigate('about.me', {reload: true});
// }, 2000);

export default router;