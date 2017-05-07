var React = require('react');

var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

var Equipe = React.createClass({
	getTeam: function(){
		xhttp.open("GET", "getTeam.php", true);
		xhttp.send();
	},
	render:function(){
		return(
			<div className="equipe" onLoad={this.getTeam}>
				<div className="jumbotron conteudo">
					<h1><strong>A Equipe</strong></h1>
					<hr/>
					<div className="row">
					  <div className="col-sm-6 col-md-4">
					    <div className="thumbnail">
					      <img src="./imgs/Giovanni_Torelli.jpg" alt="..."/>
					      <div className="caption">
					        <h3>Giovanni Torelli</h3>
					        <p>CEO e Programador Senior</p>
					        <p><a href="#"><span className="social"><img src="./imgs/instagram.png"/></span></a> <a href="#"><span className="social"><img src="./imgs/github.png"/></span></a></p>
					      </div>
					    </div>
					  </div>
					  <div className="col-sm-6 col-md-4">
					    <div className="thumbnail">
					      <img src="./imgs/Enzo_Pietro.jpg" alt="..."/>
					      <div className="caption">
					        <h3>Enzo Pietro</h3>
					        <p>Desenvolvedor Web</p>
					        <p><a href="#"><span className="social"><img src="./imgs/facebook.png"/></span></a> <a href="#"><span className="social"><img src="./imgs/github.png"/></span></a></p>
					      </div>
					    </div>
					  </div>
					  <div className="col-sm-6 col-md-4">
					    <div className="thumbnail">
					      <img src="..." alt="..."/>
					      <div className="caption">
					        <h3>Thumbnail label</h3>
					        <p>...</p>
					        <p><a href="#" className="btn btn-primary">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		)
	}
});
module.exports = Equipe;