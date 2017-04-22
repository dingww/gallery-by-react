require('normalize.css/normalize.css');
require('styles/App.scss');

var imageDatas = require('../data/imageDatas.json')

import React from 'react';

imageDatas = (function genImageURL(imageDatasArr) {
	for (var i = 0, j = imageDatasArr.length; i < j; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.filename);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas)

// imageDatas=genImageURL(imageDatas);

var AppComponent = React.createClass({
	render: function() {
		return (
			<section className="stage">
				<section className="img-sec"></section>
				<nav className="controller-nav"></nav>
			</section>
		);
	}
});
React.render(<AppComponent/>, document.getElementById("app"));

module.exports = AppComponent;