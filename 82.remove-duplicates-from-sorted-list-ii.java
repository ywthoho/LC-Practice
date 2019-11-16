/*
 * @lc app=leetcode id=82 lang=java
 *
 * [82] Remove Duplicates from Sorted List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return head;
        ListNode res = new ListNode(0);
        res.next = head;
        ListNode current = res;
        while(current.next != null) {
            if (current.next.next != null && current.next.val == current.next.next.val) {
                ListNode del = current.next.next;
                while(del.next != null && del.val == del.next.val) {
                    del = del.next;
                }
                current.next = del.next;
            } else {
                current = current.next;
            }
            
        }
        return res.next;
    }
}
// @lc code=end

