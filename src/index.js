// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {
	return prop;
};
const createNotEnumerableProperty = (prop) => {
	Object.defineProperty(Object.prototype, prop, {
		enumerable: false,
		set: (val) => { prop = val },
		get: () => {return prop }
	})
	return prop;
};
const createProtoMagicObject = () => {
	let res = () => {};
	res.__proto__ = new Function();
	res.prototype = res.__proto__;
	return res;
};
let i = 0;
Function.__proto__.valueOf = () => {
	return i;
}
const incrementor = () => {
	++i;
	return incrementor;
};
let test_async = 0;
const asyncIncrementor = () => {
	return promise = new Promise((resolve) => {
		resolve(++test_async);
	})
};

const createIncrementer = () => {
	var index = 0;
	function* foo(){
	  var index = 0;
	  while(index <= 2) 
	    yield ++index;
	}
	return foo();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
	return promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(param);
		}, 1000)
	})
};
const getDeepPropertiesCount = (obj) => {
  let str = JSON.stringify(obj);
  let res = 0;
  let total = str.split('{').length - 2;
  return total;
};
const createSerializedObject = () => {
	return new String(JSON.stringify({}));
};
const toBuffer = () => {};
const sortByProto = (arr) => {
	arr.sort((a, b) => {
		return a.x - b.x;
	})
	return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;