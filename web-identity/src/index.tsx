// import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { createRoot } from 'react-dom/client';

import * as workbox from './workbox';
import MainAppNavigator from './containers';
import appConfig from './appConfig';
import './scss/styles.scss';
import 'dayjs/locale/vi';
import 'dayjs/locale/en';
import createStore from './redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ONE_HOUR } from './appConfig/constants';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from './appConfig/muiTheme';
import { Suspense } from 'react';
import LoadingContainer from './containers/StartupContainers/LoadingContainer';
const { store, history } = createStore();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: ONE_HOUR,
    },
  },
});

Amplify.configure(appConfig.AWS_CONFIG);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <MuiThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingContainer />}>
          <ConnectedRouter history={history}>
            <Router>
              <Route component={MainAppNavigator} />
            </Router>
          </ConnectedRouter>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReduxProvider>
  </MuiThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

workbox.register();
// updateVnLocale();
