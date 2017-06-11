var React = require('react');

var Rodape = React.createClass({
	render: function(){
		return (
			<div className="funcionapf">
				
				<div className="funcionadentro">
				
					<div className="col-md-4  gr">
					
						<h4>Quebrando Barreiras desde 2017 ©</h4>
					</div>
			
					<div className="col-md-2  gr ">
						<span className="social">
							<h4></h4>
						</span>
					</div>
					
					<div className="col-md-2  gr ">
						<span className="social">
							<h4></h4>
						</span>
					</div>
				
					<div className="col-lg-3 col-sm-30 bl">
					
						<span className="social">
							
							<img src="./imgs/facebook.svg"/>
							<img src="./imgs/instagram.svg"/>
							
							
						</span>
					</div>
				</div>
			
			
			</div>
			
		)
	}
});

module.exports = Rodape;