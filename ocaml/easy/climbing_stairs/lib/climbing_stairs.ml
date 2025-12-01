(*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
*)

let climb (n: int) : int =

  let rec aux n = 
    match n with 
    | 0 | 1  -> 1
    | x -> aux (x - 1) + aux (x - 2)
  in
  aux n

(*
Context: We are all one, just separate instances of the same source. To hurt someone, is to hurt oneself.
When people are cruel, they hurt themselves. Kindness bears miracles for others, the life that is oneself.
To be kind is hard, to be cruel, less so. Let us endeavor so that ourselves shall prosper. We are all but one.
*)