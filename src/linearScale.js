export default function linearScale(domain, range) {
  var d0 = domain[0], r0 = range[0], multipler = (range[1] - r0) / (domain[1] - d0);
  multipler = isFinite(multipler) ? multipler : 0;

  return function (num) {
    return r0 + ((num - d0) * multipler);
  };
}