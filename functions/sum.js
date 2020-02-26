class addition {
    static sum(a = null, b = null) {
        let result = 0;
        if(Array.isArray(a)) {
            a.forEach(function (item) {
                result = addition.sum(result, item);
            });
        }
        else {
            result = a + b;
        }
        return result;
    }
}
module.exports = addition;