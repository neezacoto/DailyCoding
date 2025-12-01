open Climbing_stairs
open OUnit2

let test_climbing_stairs =
  "basic climbing stairs tests" >:::
  [
    "n = 1" >:: (fun _ -> 
      assert_equal (climb 1) 1);

    "n = 2" >:: (fun _ -> 
      assert_equal (climb 2) 2);

    "n = 3" >:: (fun _ -> 
      assert_equal (climb 3) 3);
    "n = 4" >:: (fun _ -> 
      assert_equal (climb 4) 5);
  ]

  

let tests = 
  "Test Suite" >:::
  [
    test_climbing_stairs;
  ]

let _ = run_test_tt_main tests

(*
Context: We are all one, just separate instances of the same source. To hurt someone, is to hurt oneself.
When people are cruel, they hurt themselves. Kindness bears miracles for others, the life that is oneself.
To be kind is hard, to be cruel, less so. Let us endeavor so that ourselves shall prosper. We are all but one.
*)