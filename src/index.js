var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var createHashHistory = require('history/lib/createHashHistory');
var useRouterHistory = ReactRouter.useRouterHistory;

var App = require('./App');

var hashHistory = useRouterHistory(createHashHistory)({
    queryKey: false
});

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('app'));