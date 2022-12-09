
import java.util.List;
import java.util.ArrayList;

public class Solution {

    public boolean leafSimilar(TreeNode rootOne, TreeNode rootTwo) {
        List<Integer> leavesRootOne = new ArrayList<>();
        List<Integer> leavesRootTwo = new ArrayList<>();
        
        collectLeavesFromLeftToRight(rootOne, leavesRootOne);
        collectLeavesFromLeftToRight(rootTwo, leavesRootTwo);
        
        return leavesRootOne.equals(leavesRootTwo);
    }

    public void collectLeavesFromLeftToRight(TreeNode node, List<Integer> leaves) {
        if (node != null) {
            if (node.left == null && node.right == null) {
                leaves.add(node.val);
            }
            collectLeavesFromLeftToRight(node.left, leaves);
            collectLeavesFromLeftToRight(node.right, leaves);
        }
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
