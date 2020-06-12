import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { Dashboard as DashboardIcon, Info as InfoIcon } from '@material-ui/icons';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';

import Navigation from './components/Navigation';
import { theme } from './style';

import Home from './routes/Home';
import About from './routes/About';

const routes = [
  { route: '/', label: 'Dashboard', icon: DashboardIcon },
  { route: '/about', label: 'About', icon: InfoIcon }
];

const App = () => (
  <div id="app">
    <ThemeProvider theme={theme}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <CssBaseline />
      <Navigation title="Dashboard" routes={routes}>
        <Router history={createHashHistory()}>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </Navigation>
    </ThemeProvider>
  </div>
);

export default App;