var React = require('react');

var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var Link = ReactBootstrap.Link;

var Navbar = React.createClass({
    render: function () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        {'立委咖電喂'}
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
});

module.exports = Navbar;