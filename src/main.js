import Ractive from 'ractive';
import router from './router';

const __DEBUG__ = true;

const RouterProvider = Ractive.extend({
  template: `{{yield}}`,
  oninit() {
    if (__DEBUG__) {
      console.log('RouterProvider init');
    }
    router.start();
  }
});
Ractive.components.RouterProvider = RouterProvider;

const Route = Ractive.extend({
  template: `
  {{#if isRouteActive}}
    {{yield}}
  {{/if}}
  `,
  oninit() {
    if (__DEBUG__) {
      console.log('Route Init', this.get('name'));
    }
    this.routeListener = (toState, fromState) => {
      this.set('isRouteActive', toState.name === this.get('name'));
    };
    router.addListener(this.routeListener);
  },
  onteardown() {
    router.removeListener(this.routeListener)
  }
});
Ractive.components.Route = Route;

const About = Ractive.extend({
  template: `
    <Route name="about">
      <h3>About</h3>
    </Route>
  `,
  oninit() {
    console.log('About init');
  },
  onteardown() {
  }
});

const AboutRoute = Ractive.extend({
  template: `{{>content}}`,
  oninit() {
    console.log('AboutRoute');
  }
});

const Contact = Ractive.extend({
  template: `
    <Route name="contact">
      <h3>Contact</h3>
    </Route>
  `,
  oninit() {
    console.log('About init');

    const canActivate = (router) => (toState, fromState, done) => {
      return false;
    };
    router.canActivate('contact', canActivate);
  },
  onteardown() {
    router.clearCanDeactivate('contact');
  }
});

const Test = Ractive.extend({
  template: `
    <h3>Test</h3>
  `,
  oninit() {
    console.log('Test init');

    const canActivate = (router) => (toState, fromState, done) => {
      return false;
    };
    router.canActivate('test', canActivate);
  },
  onteardown() {
    router.clearCanDeactivate('test');
  }
});

const App = Ractive.extend({
  components: {
    About, Contact, AboutRoute
  },
  oninit() {
    console.log('App init');
    router.addRouteListener('home', function (toState, fromState) {
      console.log('App Home route matched');
    });
  },
  clickHandler() {
    alert('App Click Handler');
  },
  template: `
    <h2>App</h2>
    <nav>
      <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/about">About</a></li>
          <li>
              <ul>
              <li><a href="#/about/me">Me</a></li>
              <li><a href="#/about/company">Company</a></li>
              </ul>
          </li>
          <li><a href="#/contact">Contact</a></li>
          <li><a href="#/test">Test</a></li>
      </ul>
    </nav>
    <div>
        <a href="#" on-click="@this.clickHandler(@event)">Test</a>
    </div>
    <About></About>
    <Contact></Contact>
    <AboutRoute></AboutRoute>
   `
});

new Ractive({
  //target: '#app',
  components: {
    App
  },
  template: `
    <RouterProvider>
      <App></App>    
    </RouterProvider>
  `gst
});

new Ractive({
  target: '#app',
  template: ``
});
