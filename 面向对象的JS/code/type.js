function isType(type) {
    return function(value) {
        return Object.prototype.toString.call(value) === `[object ${type}]`;
    }
}

const types = ['String', 'Number', 'Boolean', 'Object', 'Undefined', 'Null', 'Symbol'];
const Type = {};
types.forEach(type => {
    Type['is' + type] = isType(type);
});

console.log(Type.isArray([]));
