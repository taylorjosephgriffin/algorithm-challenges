// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

var singleNumber = function(nums) {
    let histogram = {}
    nums.forEach(num => {
       !histogram.hasOwnProperty(num) ? histogram[num] = 0 : delete histogram[num]
    })

    return parseInt(Object.keys(histogram)[0])
};

module.exports = singleNumber
