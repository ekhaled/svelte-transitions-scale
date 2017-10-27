import { cubicOut } from 'eases-jsnext';

function linearScale(domain, range) {
	var d0 = domain[0];
	var r0 = range[0];
	var multipler = (range[1] - r0) / (domain[1] - d0);
	multipler = isFinite(multipler) ? multipler : 0;

	return function (num) {
		return r0 + ((num - d0) * multipler);
	};
}

function scale(
	node,
	ref
) {
	var delay = ref.delay; if ( delay === void 0 ) delay = 0;
	var duration = ref.duration; if ( duration === void 0 ) duration = 400;
	var easing = ref.easing; if ( easing === void 0 ) easing = cubicOut;
	var from = ref.from; if ( from === void 0 ) from = 0.5;
	var to = ref.to; if ( to === void 0 ) to = 1;

	var o = +getComputedStyle(node).opacity;
	var scale = linearScale([0, 1], [from, to]);

	return {
		delay: delay,
		duration: duration,
		easing: easing,
		css: function (t) { return ("transform: scale(" + (scale(t)) + "); opacity: " + (t * o)); }
	};
}

export default scale;
