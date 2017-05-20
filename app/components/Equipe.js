var React = require('react');
var $ = require('jquery');

$(document).ready(function(){
		$("#wrap").load("getTeam.php");
	});

var Equipe = React.createClass({
	render:function(){
		return(
			<div className="equipe">
				<div className="jumbotron conteudo">
					<h1><strong>A Equipe</strong></h1>
					<hr/>
					<div id="wrap">
					</div>
				</div>
			</div>
		)
	}
});
module.exports = Equipe;