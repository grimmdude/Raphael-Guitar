window.onload = function () {
	//--------------Editable Stuff-------------------------------
	
	// ID of containing Div
	var div_id = 'guitar';
	
	//------------------------------------------------------------

	// Creates canvas 700 x 200 in above defined div
	var paper = Raphael(div_id, 2000, 200);
	
	var neck_length = 700
	var scale_length = neck_length/.95;
	var multiplier = 17.817;
	
	// neck outline
	var neck = paper.rect(0,0,neck_length,100);
	
	var last_fret = 0;
	var frets = [];
	for (i=1;i<=22;i++) {
		// formula for determining the next fret
		var scale_formula = ((scale_length-last_fret)/multiplier)+last_fret;
		
		// add the fret in the proper location
		frets[i] = paper.rect(scale_formula,0,3,100);
		
		// define the last fret distance for the next go around
		last_fret = ((scale_length-scale_formula)/multiplier)+scale_formula;
	}
	
	// highlight fret example
	frets[1].attr("fill", "yellow");
};