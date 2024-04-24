const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(pancakeSort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSort);

const testFlip = jsc.forall("array nat", "nat", function(arr, n) {
    var flip1 = flip(arr, n);
    var flip2 = flip(flip1, n);
    return JSON.stringify(arr) === JSON.stringify(flip2);
});

jsc.assert(testFlip);
