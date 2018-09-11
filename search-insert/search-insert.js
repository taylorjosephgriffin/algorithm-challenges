function searchInsert(nums, target) {
    let placement = 0
    if (nums.indexOf(target) > -1) return nums.indexOf(target)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) placement++
    }
    return placement
}

module.exports = searchInsert
