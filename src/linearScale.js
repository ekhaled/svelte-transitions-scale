export default function linearScale(domain, range) {
	const d0 = domain[0];
	const r0 = range[0];
	let multipler = (range[1] - r0) / (domain[1] - d0);
	multipler = isFinite(multipler) ? multipler : 0;

	return function (num) {
		return r0 + ((num - d0) * multipler);
	};
}