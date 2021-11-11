// Core
import { compose, Middleware } from 'redux';

const developmentEnvironment = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = developmentEnvironment && devtools ? devtools : compose;


const middleware: Middleware = [];

export { composeEnhancers, middleware };
