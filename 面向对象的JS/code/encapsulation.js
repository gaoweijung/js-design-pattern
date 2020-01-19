const myObject = (function() {
    let _name = 'gaoweijung';
    return {
        getName() {
            return _name;
        }
    }
})();
console.log(myObject.getName());
console.log(myObject._name);
