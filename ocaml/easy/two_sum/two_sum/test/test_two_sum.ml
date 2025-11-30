open Two_sum

let testing = true (* you can switch this flag to turn off testing globally *)

let run cases b = if b then cases () else []

let lst_head lst = 
  match lst with
  | [] -> failwith "Empty List"
  | x :: _ -> x

let cut_head lst = 
  match lst with
  | [] -> failwith "Empty List"
  | _ :: xs -> xs

let test_list_1 = [3; 1; 1; 2; 4]

let search_sum_tests () =
  [
    assert ((search_sum 1 (lst_head test_list_1) (cut_head test_list_1) 7) = 4);
  ]

let two_sum_tests () =
  [
    assert ((two_sum test_list_1 7) = [0;4]);
    assert ((two_sum test_list_1 2) = [1;2]);
    assert ((two_sum test_list_1 5) = [0;3]);
    assert ((two_sum test_list_1 4) = [0;1]);
  ]

let _run_tests : unit list list =
  if not testing then [] else
  [
    run search_sum_tests true;
    run two_sum_tests true;
  ]