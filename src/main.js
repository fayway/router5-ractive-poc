import Ractive from 'ractive';
import router from './router';
import { RouterProvider, NodeRoute } from './utils'
import { Nav, About, Contact } from './components'

Ractive.DEBUG = true;

const App = Ractive.extend({
  components: {
    Nav, About, Contact
  },
  oninit() {
    console.log('App init');
  },
  clickHandler() {
    alert('App Click Handler');
  },
  template: `
    <h2>App</h2>
    <Nav></Nav>
    <div>
        <a href="#" on-click="@this.clickHandler(@event)">Test</a>
    </div>
    <NodeRoute name="about"><About></About></NodeRoute>
    <NodeRoute name="contact"><Contact></Contact></NodeRoute>
   `
});
Ractive.components.App = App;


new Ractive({
  target: '#app',
  components: {
    RouterProvider,
    App
  },
  data: {
    router
  },
  template: `
    <RouterProvider router="{{router}}">
      <App></App>    
    </RouterProvider>
  `
});
