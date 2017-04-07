var React = require('react');
var NavBar = require('./NavBar.js');
var Container = require('./Container.js');

var Site = React.createClass({
	render: function(){
		return (
			<div>
				<NavBar />
				<Container />
			 </div>
		)
	}
});

module.exports = Site;