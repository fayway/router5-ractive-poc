import Ractive from 'ractive';

export const About = Ractive.extend({
  name: 'About',
  template: `
      <h3>About</h3>
  `,
  oninit() {
    console.log('About init');
  },
  onteardown() {
    console.log('About teardown');
  }
});

export const Contact = Ractive.extend({
  name: 'Contact',
  template: `
      <h3>Contact</h3>
  `,
  oninit() {
    console.log('Contact init');
  },
  onteardown() {
    console.log('Contact teardown');
  }
});

export const Nav = Ractive.extend({
  template: `
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
  `
});
