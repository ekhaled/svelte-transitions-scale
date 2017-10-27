import { cubicOut } from 'eases-jsnext';
import linearScale from './linearScale.js';

export default function scale(
	node,
	{ delay = 0, duration = 400, easing = cubicOut, from = 0.5, to = 1 }
) {
	const o = +getComputedStyle(node).opacity;
	const scale = linearScale([0, 1], [from, to]);

	return {
		delay,
		duration,
		easing,
		css: t =>
			`transform: scale(${scale(t)}); opacity: ${t * o}`
	};
}
