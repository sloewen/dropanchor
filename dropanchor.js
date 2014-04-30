/* jshint strict: false */
// hereagraph, anchorgraph
var createAnchorsAndGoToThem =  function () {
	return {
		init: function (tags) {
	
			var url = window.location,
				urlAnchor = url.hash.substr(1);
			//make the tags
			for (var i = 0; tags[i]; i++) {
				makeAnchors(tags[i]);
			}

			//jump to a tag if there is one in the url
			if(urlAnchor) {

				var node = document.getElementsByName(urlAnchor);
				window.scrollTo(0, node[0].offsetTop);
			} 
		}
	};
	
	function makeAnchors(tag) {
		var anchors = document.getElementsByTagName(tag);
			
		for (var i = 0; anchors[i]; i++){
			var anchorText = anchors[i].innerHTML,
				slugifiedText = slugify(anchorText),
				nodeList = anchors[i].getElementsByTagName('a');
			if (nodeList.length == 0){
				anchors[i].innerHTML = '';
				var anchor = document.createElement('a');
				anchor.innerHTML = anchorText;
				anchor.setAttribute('name', slugifiedText);
				anchor.setAttribute('href', '#' + slugifiedText);
				anchors[i].appendChild(anchor);
			}
			
		}
	}
}();


function slugify(slugString) {
	var sluggedString = slugString.split(' ').join('-');
	return sluggedString.toLowerCase();
}

window.onload = function () {
			createAnchorsAndGoToThem.init(['h2', 'h3']);
	};