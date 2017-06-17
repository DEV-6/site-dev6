var React = require('react');
var createReactClass = require('create-react-class');
var $ = require('jquery');
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var slideIndex = 0;
$(document).ready(function(){	
		carousel();
});
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none"; 
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex = 1} 
	 x[slideIndex-1].style.display = "block"; 
	 setTimeout(carousel, 4000);
}

var Sobre = createReactClass({
	componentDidMount: function() {
      scrollSpy.update();
 
    },
    componentWillUnmount: function() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    },	
  render: function() {
	  return(
			<Element name="sobre" className="sobre">
			<div className="sobreCont"></div>
			<div className="bgSobre">
				<img className="mySlides w3-animate-fading" src="./imgs/sobre1.jpg"/>
				<img className="mySlides w3-animate-fading" src="./imgs/sobre2.jpg"/>
				<img className="mySlides w3-animate-fading" src="./imgs/sobre3.jpg"/>
				<img className="mySlides w3-animate-fading" src="./imgs/sobre4.jpg"/>
			</div>
					<div className="jumbotron conteudo faixa">
						<div>
							<h1><strong>Quem Somos</strong></h1>
							<hr className="sobreHr"/>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								<p/> Donec vulputate enim erat, sit amet venenatis lorem <p/> blandit non. Cras laoreet, dui ut fringilla luctus, nisi ante
								<p/> pulvinar augue, eleifend imperdiet enim ante cursus turpis. <p/> Quisque nisl ipsum, tempus in arcu non, placerat imperdiet enim. 
								<p/> Mauris commodo nisl quis felis convallis fringilla. Donec ut aliquam <p/> nibh. Quisque tristique mauris ex, a ornare libero maximus id. 
								<p/> Ut venenatis urna sodales, fringilla ipsum id, auctor ante. Aenean id mauris <p/> commodo, varius justo ut, lobortis justo. Morbi auctor justo vel vehicula 
								<p/> convallis. Ut id luctus nisl. Suspendisse pharetra a tellus et dictum. Proin <p/> imperdiet ut ex ut eleifend.
							</p>
						</div>
					</div>
			</Element>
	  )
   }
});

module.exports = Sobre;