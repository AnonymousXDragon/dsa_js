var thirdMax = function(nums) {
    if ( nums.length < 3 ) return nums[nums.length - 1];
    let n = nums.sort((a,b) => b - a).filter((i,val) => {
        return nums.indexOf(i) == val
    });
    if ( n.length < 3 ) return n[0];
    if ( n.length > 3 ) return n[3-1];
    return n[n.length-1]
};

console.log(thirdMax([1,2,2,5,3,5]))