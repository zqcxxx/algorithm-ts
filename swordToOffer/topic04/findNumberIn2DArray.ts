// 暴力 时间复杂度 O(mn)， 空间: O(1)
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    if (!matrix || !matrix.length || !matrix[0].length) {
        return false;
    }
    let rows = matrix.length;
    let cols = matrix[0].length;
    for (let i = 0; i < rows; i ++) {
        for (let j = 0; j < cols; j ++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};

// 线性查找 时间复杂度 O(m+n)， 空间: O(1)
function findNumberIn2DArrayByLine(matrix: number[][], target: number): boolean {
    if (!matrix || !matrix.length || !matrix[0].length) {
        return false;
    }
    let ridx = 0;
    let cidx = matrix[0].length - 1;
    while(ridx < matrix.length && cidx >= 0) {
        let key = matrix[ridx][cidx];
        if (key > target) {
            cidx--;
        }
        else if (key < target) {
            ridx++;
        }
        else {
            return true;
        }
    }
    return false;
};

const martrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
console.log(findNumberIn2DArrayByLine(martrix, 30));
console.log(findNumberIn2DArray(martrix, 12));