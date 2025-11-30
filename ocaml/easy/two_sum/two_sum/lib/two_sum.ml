(* 

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?

**)

exception EmptyList

let rec search_sum (k: int) (x: int) (xs: int list) (target: int) : int =
    match xs with 
    | [] -> -1
    | y :: ys -> (
        if x + y = target then k 
        else search_sum (k + 1) x ys target
      )

let rec confirm_sum (i: int) (lst: int list) target: int list =
  match lst with 
  | [] -> [-1]
  | x :: xs -> let res = search_sum (i + 1) x xs target in
               if res != -1 then [i; res]
               else confirm_sum (i + 1) xs target

let two_sum (arr: int list) (target: int): (int list) =
  confirm_sum 0 arr target
