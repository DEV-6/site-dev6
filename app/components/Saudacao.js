var React = require('react');

var Saudacao = React.createClass({
	changeImage: function(){
		document.getElementById('saudacao').src= "./imgs/logo.png";
	},
	timeImage: function(){
		if(document.getElementById('saudacao').src.substring(34,document.getElementById('saudacao').src.length) == "saudacao.gif"){
			setTimeout(this.changeImage, 1980);
			console.log('oi');
		}
		else{
			console.log(document.getElementById('saudacao').src.substring(34,document.getElementById('saudacao').src.length));
		}
	},
	render: function(){
		return(
			<div className="container">
				<div className="bg1"></div>
				<div className="jumbotron conteudo">
				<div className="row">
				<div className="col-xs-12">
				  <img id="saudacao" onLoad={this.timeImage} src="./imgs/saudacao.gif"/>
				</div>
				</div>
				<div className="row">
				<div className="col-xs-12 saudacao">
					<h1><strong>Quebrando barreiras!</strong></h1>
				 	<p><a className="btn btn-success btn-lg" href="#" role="button">Conheça a gente</a></p>
				</div>
				 </div>
				 </div>
			 </div>
		)
	}
});

module.exports = Saudacao;