
#include <vector>
using namespace std;

/*
Struct TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this struct.
 */
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
};

class Solution {
    
public:
    bool leafSimilar(TreeNode* rootOne, TreeNode* rootTwo) const {
        vector<int> leavesRootOne;
        vector<int> leavesRootTwo;
        
        collectLeavesFromLeftToRight(rootOne, leavesRootOne);
        collectLeavesFromLeftToRight(rootTwo, leavesRootTwo);
        
        return leavesRootOne == leavesRootTwo;
    }

private:
    void collectLeavesFromLeftToRight(TreeNode* node, vector<int>& leaves) const {
        if (node != nullptr) {
            if (node->left == nullptr && node->right == nullptr) {
                leaves.push_back(node->val);
            }
            collectLeavesFromLeftToRight(node->left, leaves);
            collectLeavesFromLeftToRight(node->right, leaves);
        }
    }
};
