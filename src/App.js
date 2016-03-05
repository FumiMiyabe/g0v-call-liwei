var React = require('react');

var ReactBootstrap = require('react-bootstrap');
var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Glyphicon = ReactBootstrap.Glyphicon;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Thumbnail = ReactBootstrap.Thumbnail;

var $ = require('jquery');

var App = React.createClass({
    getInitialState: function() {
        return {
            data: [],
            search: ''
        };
    },

    onSearchChange: function(e) {
        this.setState({
            search: e.target.value
        });
    },

    componentDidMount: function() {
        this.fetchData();
    },

    fetchData: function() {
        $.ajax({
            type: 'GET',
            url: './data.json',
            success: function(data) {
                if(this.isMounted()) {
                    this.setState({data: data});
                }
                console.log('here');
            }.bind(this)
        });
    },

    renderItems: function() {
        var items = this.state.data.map(function(item, i) {
            if(item.name.indexOf(this.state.search) === -1) {
                return;
            }

            return (
                <Col md={2}>
                    <Thumbnail>
                        <h3>{item.name}</h3>
                        <p>{item.lab_tel}</p>
                    </Thumbnail>
                </Col>
            );
        }.bind(this));

        return items;
    },

    render: function () {
        var search_button = (
            <Button onClics={this.search}>
                <Glyphicon glyph="search" />
            </Button>
        );

        var items = this.renderItems();

        return (
            <div>
                <h1 className="brand">立委咖電喂</h1>
                <Input type="text" value={this.state.search} onChange={this.onSearchChange} buttonAfter={search_button} />
                <ButtonGroup justified>
                    <Button href="#">依專業搜尋</Button>
                    <Button href="#">依地點搜尋</Button>
                    <Button href="#">隨機搜尋</Button>
                </ButtonGroup>
                <Grid>
                    <Row>
                        {items}
                    </Row>
                </Grid>
            </div>
        );
    }
});

module.exports = App;