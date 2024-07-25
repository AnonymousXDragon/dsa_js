let arr = [3,1,-2,-5,2,-4];
arr = [-1,1];


let merge = (a1,a2) => {
    let merge = [];
    let len = (a1.length + a2.length) - 1;
    for (let x = 0; x < len; x++) {
        merge.push(a1[x],a2[x]);
    }
    return merge.filter((x) => x != undefined)
};

var rearrangeArray = function(nums) {
    let plus = [];
    let negative = [];
    
    for(let x = 0; x < nums.length; x++) {
        if ( nums[x] < 0 ) {
            negative.push(nums[x])
        } else {
            plus.push(nums[x])
        }
    }
    return merge(plus,negative)
};

console.log(rearrangeArray(arr))