
function hexToRgbA(hex) {
	// snippet from stackoverflow
	let c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.2)';
	}
	throw new Error('Bad Hex');
}

function boxShadow(options) {
	const elements = document.querySelectorAll('.boxShadow');
	if (options.shadow_type === 'hard') {
		options.shadow_type = `0px`;
	} else {
		options.shadow_type = `10px`;
	}
	const rgbaColor = hexToRgbA(options.shadow_color);

	for (let i = 0; i < elements.length; i++) {
		elements[i].style.boxShadow = `0px 1px ${options.shadow_type} 1px ${options.shadow_color ? rgbaColor : 'rgba(0, 0, 0, 0.2)'
			} ${options.shadow_position ? options.shadow_position : ''}`;
	}
}


module.exports.boxShadow = boxShadow;
