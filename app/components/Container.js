var React = require('react');
var Saudacao = require('./Saudacao.js');
var Equipe = require('./Equipe.js');

var Container = React.createClass({
	render: function(){
		return(
			<div>
				<Saudacao />
				<Equipe />
			</div>
		)
	}
});

module.exports = Container;