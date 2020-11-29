function findRepeatNumber(nums: number[]) {
    let len = nums.length;
    while(len--) {
        const key = nums[len];
        if (nums.indexOf(key) !== len) {
            return key;
        }
    }
};

function findRepeatNumberBySort(nums: number[]) {
    const sortNums = nums.sort((a, b) => a -b);
    for(let i = 0; i < sortNums.length; i++) {
        if (sortNums[i] === sortNums[i + 1]) {
            return sortNums[i];
        }
    }
};

const nums = [1, 2, 5, 8, 9, 9];
console.log(findRepeatNumber(nums));
console.log(findRepeatNumberBySort(nums));
