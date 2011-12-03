window.onload = function () {

	//--------------Editable Stuff-------------------------------
	var div_id, neck_length, neck_height, fret_marker_color, fret_color;

	// ID of containing Div
	div_id = 'guitar';
	neck_length = 700;
	neck_height = 100;
	fret_marker_color = "#F9F7F1";
	fret_color = "#E3E3E3";

	//------------------------------------------------------------

	var paper, scale_length, multiplier, neck, last_fret, frets, i;
	// Creates canvas 700 x 200 in above defined div
	paper = new Raphael(div_id, 2000, 200);

	scale_length = neck_length / 0.75;
	multiplier = 17.817;

	// Neck
	neck = paper.rect(0, 0, neck_length, neck_height).attr("gradient", "90-#fff-#FFE098");

	last_fret = 0;
	frets = [];

	var scale_formula, fret_markers, top_octave_marker, bottom_octave_marker;

	for (i = 1; i <= 22; i++) {
		// formula for determining the next fret
		scale_formula = ((scale_length - last_fret) / multiplier) + last_fret;

		// add the fret in the proper location
		frets[i] = paper.rect(scale_formula, 0, 3, neck_height).attr("fill", fret_color);

		// get some position markers in there
		if (i === 3 || i === 5 || i === 7 || i === 9) {
			fret_markers = paper.circle((scale_formula + last_fret) / 2, neck_height / 2, 8).attr("fill", fret_marker_color);
		}

		// here's the octave marker
		if (i === 12) {
			top_octave_marker = paper.circle((scale_formula + last_fret) / 2, neck_height / 4, 8).attr("fill", fret_marker_color);
			bottom_octave_marker = paper.circle((scale_formula + last_fret) / 2, (neck_height / 4) * 3, 8).attr("fill", fret_marker_color);
		}


		// define the last fret distance for the next go around
		last_fret = scale_formula;
	}

	//strings
	//lower case 'e' is high E
	var string_letters, strings, last_string;
	string_letters = "eBGDAE";
	strings = [];
	last_string = 0;
	for (i = 0; i <= 5; i++) {
		strings[string_letters.charAt(i)] = paper.rect(0, (neck_height / 11) + last_string, neck_length, 1);

		last_string = (neck_height / 6) * (i + 1);
	}

	// highlight fret example
	//frets[1].attr("fill", "yellow");
};
