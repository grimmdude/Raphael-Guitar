window.onload = function () {
	//--------------Editable Stuff-------------------------------
	
	// ID of containing Div
	var div_id = 'guitar';
	var neck_length = 700;
	var neck_height = 100;
	var fret_marker_color = "#F9F7F1";
	var fret_color = "#E3E3E3";
	
	//------------------------------------------------------------

	// Creates canvas 700 x 200 in above defined div
	var paper = Raphael(div_id, 2000, 200);
	
	var scale_length = neck_length/.75;
	var multiplier = 17.817;
	
	// Neck
	var neck = paper.rect(0,0,neck_length,neck_height).attr("gradient", "90-#fff-#FFE098");
	
	var last_fret = 0;
	var frets = [];
	for (i=1;i<=22;i++) {
		// formula for determining the next fret
		var scale_formula = ((scale_length-last_fret)/multiplier)+last_fret;
		
		// add the fret in the proper location
		frets[i] = paper.rect(scale_formula,0,3,neck_height).attr("fill",fret_color);
		
		// get some position markers in there
		if (i==3 || i ==5 || i ==7 || i==9) {
			var fret_markers = paper.circle((scale_formula+last_fret)/2, neck_height/2, 8).attr("fill", fret_marker_color);
		}
		
		// here's the octave marker
		if (i==12) {
			var top_octave_marker = paper.circle((scale_formula+last_fret)/2, neck_height/4, 8).attr("fill", fret_marker_color);
			var bottom_octave_marker = paper.circle((scale_formula+last_fret)/2, (neck_height/4)*3, 8).attr("fill", fret_marker_color);
		}
		
		
		// define the last fret distance for the next go around
		last_fret = scale_formula;
	}
	
	//strings
	//lower case 'e' is high E
	var string_letters = "eBGDAE";
	var strings = [];
	var last_string = 0;
	for (i=0;i<=5;i++) {
		strings[string_letters.charAt(i)] = paper.rect(0,(neck_height/11)+last_string,neck_length,1);
		
		last_string = (neck_height/6)*(i+1);
	}
	
	// highlight fret example
	//frets[1].attr("fill", "yellow");
};
