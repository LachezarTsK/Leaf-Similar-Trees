
/**
 * @param {TreeNode} rootOne
 * @param {TreeNode} rootTwo
 * @return {boolean}
 */
var leafSimilar = function (rootOne, rootTwo) {
    const leavesRootOne = [];
    const leavesRootTwo = [];
    
    collectLeavesFromLeftToRight(rootOne, leavesRootOne);
    collectLeavesFromLeftToRight(rootTwo, leavesRootTwo);
    
    return arraysAreEqual(leavesRootOne, leavesRootTwo);
};

/**
 * @param {TreeNode} node
 * @param {number[]} leaves
 * @return {void}
 */
function collectLeavesFromLeftToRight(node, leaves) {
    if (node !== null) {
        if (node.left === null && node.right === null) {
            leaves.push(node.val);
        }
        collectLeavesFromLeftToRight(node.left, leaves);
        collectLeavesFromLeftToRight(node.right, leaves);
    }
}

/**
 * @param {number[]} leavesRootOne
 * @param {number[]} leavesRootTwo
 * @return {boolean}
 */
function arraysAreEqual(leavesRootOne, leavesRootTwo) {
    if (leavesRootOne.length !== leavesRootTwo.length) {
        return false;
    }
    for (let i = 0; i < leavesRootOne.length; ++i) {
        if (leavesRootOne[i] !== leavesRootTwo[i]) {
            return false;
        }
    }
    return true;
}

/*
 Function TreeNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
