'use strict';

var ImageContract = function () {
};

ImageContract.prototype = {
    init: function () {
    },
    set: function (value) {
        value = value.trim();
        if (value === ""){
            throw new Error("Empty Image");
        }
        if (value.length > 200){
            throw new Error("File too big");
        }
        if (LocalContractStorage.get(99)) {
            throw new Error("No more spots left");
        }
        for (var i = 0; i < 100; i++) {
            if (!LocalContractStorage.get(i))
                break;
        }
        LocalContractStorage.set(i ,name);
    },
    get: function (key) {
        return LocalContractStorage.get(key);
    },
};

module.exports = ImageContract;