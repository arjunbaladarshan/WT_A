function r_squared(r){
	return r*r;
}

function area(r){
	return Math.PI*r_squared(r)
}

module.exports.area = area;