import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './components/app';

import store from './store';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);