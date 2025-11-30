type op = Add | Sub | Mul | Div | Pow

type 'a expr =
  {
    expr : 'a _expr;
    meta : 'a
  }
and 'a _expr =
  | Num of int
  | Op of op * 'a expr * 'a expr

type error_kind =
  | DivByZero
  | NegExp

type 'a error =
  {
    error: error_kind;
    meta : 'a;
  }

let guard b error = if b then Error error else Ok ()

let eval (e : 'a expr) : (int, 'a error) result =
        
        let bind res f =
                match res with
                | Error x -> Error x
                | Ok x -> f x
        in
        let ( let* ) = bind in

        let rec aux exp =
                match exp with
                | { expr = Num x; meta = _} -> Ok x
                | { expr = Op (op, e1, e2); meta = y} -> (
                        match op with
                        | Add -> add e1 e2
                        | Sub -> sub e1 e2
                        | Div -> div e1 e2 y
                        | Pow -> pow e1 e2 y
                        | Mul -> mul e1 e2
                        )
        
        and add e1 e2 : (int, 'a error) result =
                let* x = aux e1 in
                let* y = aux e2 in
                Ok (x+y)
        and sub e1 e2 : (int, 'a error) result =
                let* x = aux e1 in
                let* y = aux e2 in
                Ok (x-y)
        and div e1 e2 m : (int, 'a error) result =
                let* x = aux e1 in
                let* y = aux e2 in
                if y = 0 then Error {error=DivByZero; meta=m}
                else Ok (x/y)
        and pow e1 e2 m: (int, 'a error) result =
                let* x = aux e1 in
                let* y = aux e2 in
                if y < 0 then Error {error=NegExp; meta=m}
                else Ok (pow_calc x y 1)
        and pow_calc x i acc =
                if i > 0 then pow_calc x (i-1) (acc * x)
                else acc
        and mul e1 e2: (int, 'a error) result =
                let* x = aux e1 in
                let* y = aux e2 in
                Ok (x * y)
        in aux e

exception ListTooShort
exception InvalidArg

let prefix (k : int) (l : 'a list) : 'a list = 
        let rec aux k (l: 'a list) acc =
                if k < 0 then raise InvalidArg
                else if k > 0 then
                        match l with
                        | [] -> raise ListTooShort
                        | x :: xs -> aux (k-1) xs (acc @ [x])
                else  acc
        in aux k l []

type prefix_error =
  | ListTooShort
  | InvalidArg

let prefix_res (k : int) (l : 'a list) : ('a list, prefix_error) result =
        
        let rec aux k (l: 'a list) acc : ('a list, prefix_error) result =
                if k < 0 then Error InvalidArg 
                else if k > 0 then 
                        match l with
                        | [] -> Error ListTooShort
                        | x :: xs -> aux (k-1) xs (acc @ [x])
                else Ok acc
        in aux k l []

module type DEQUEUE = sig
  type 'a t
  val empty: 'a t
  val push_front : 'a -> 'a t -> 'a t
  val pop_front : 'a t -> ('a * 'a t) option
  val push_back : 'a -> 'a t -> 'a t
  val pop_back : 'a t -> ('a * 'a t) option
  val to_list : 'a t -> 'a list
end

module ListDequeue = struct
  let res (l : 'a list) =
        let rec aux (l: 'a list) acc =
                        match l with
                        | [] -> None
                        | x :: [] -> Some (x, acc)
                        | x :: xs -> aux xs (acc @ [x])
        in aux l []

  type 'a t = 'a list
  let empty : 'a t = []
  let push_front x l = x :: l
  let pop_front l = match l with | [] -> None | x :: xs -> Some(x, xs)
  let push_back x l = l @ [x]
  let pop_back l = res l 
  let to_list l = l
end

module DoubleListDequeue = struct
  let res (l : 'a list) =
        let rec aux (l: 'a list) acc =
                        match l with
                        | [] -> None
                        | x :: [] -> Some (x, acc)
                        | x :: xs -> aux xs (acc @ [x])
        in aux l []
 let rec rev lst acc =    
         match lst with
         | [] -> acc
         | x :: xs -> rev xs (x :: acc)

  let pres (k : int) (l : 'a list) =
        let rec aux k (l: 'a list) acc =
                if k > 0 then
                        match l with
                        | [] -> (acc, (rev l []))
                        | x :: xs -> aux (k-1) xs (acc @ [x])
                else (acc, (rev l []))
        in aux k l []

  let back_to_front l =
          let lst = (rev l []) in
          match lst with | [] -> None | l :: st -> 
                  Some (l, pres (List.length st / 2) st)        
  let front_to_back l =
          let lst = (rev l []) in
          match lst with | [] -> None | l :: st ->
                  let flip = pres (List.length st / 2) st in
                  match flip with | (x,y) -> Some (l,(y,x))         

  type 'a t = 'a list * 'a list
  let empty = ([],[])
  let push_front x l = let le,ri = l in (x :: le, ri)
  let pop_front l = 
          let le,ri = l in 
          match le with 
          | [] -> back_to_front ri  
          | x :: xs -> Some (x,(xs,ri))
  let push_back x l = let le,ri = l in (le, x :: ri )
  let pop_back l = 
          let le,ri = l in
          match ri with
          | [] -> front_to_back le
          | x :: xs -> Some (x,(le,xs))
  let to_list l = let le,ri = l in le @ (rev ri [])
end

(*
StringMap.to_list (StringMap.map (fun x -> x+x) x);;

  let x = StringMap.of_list
                [("a", 1); ("b", 2); ("c", 1); ("d", 3); ("e", 2)];;
IntMap.to_list (IntMap.add 5 "bigfart" (IntMap.empty));;
- : (int * string) t = [(5, "bigfart")]
 *)

module StringMap = Map.Make(String)
module IntMap = Map.Make(Int)
module StringSet = Set.Make(String)

let flip_keys_and_values (m : int StringMap.t) : StringSet.t IntMap.t =

        let lst = StringMap.to_list m in
        let merge k v acc =
                let curr = IntMap.find_opt v acc in
                match curr with 
                | None -> IntMap.add v (StringSet.add k (StringSet.empty)) acc 
                | Some c ->   
                IntMap.update v (Option.map (fun _ -> (StringSet.add k c))) acc
        in
        let rec aux lst acc =
                match lst with 
                | [] -> acc
                | (k, v) :: xs -> aux xs (merge k v acc)
        in aux lst IntMap.empty 
(*
IntMap.to_list (IntMap.add 5 "5" IntMap.empty);;
- : (int * string) t = [(5, "5")]

IntMap.to_list 
(IntMap.update 5 
(Option.map (fun _ -> "bongo")) (IntMap.add 5 "hello" IntMap.empty));;
- : (int * string) t = [(5, "bongo")]
*)
(*
let filter_op f l =
        let rec aux func lst acc =
                match lst with 
                | [] -> acc
                | (x,y) :: xs -> let rx,ry = (func x y) in
                if rx then (aux func xs (ry :: acc)) else (aux func xs acc)
        in aux f l []

let reverse_list lst =
        
        let rec aux lst acc =
                match lst with 
                | [] -> acc
                | x :: xs -> aux xs (x :: acc)
        in aux lst []
let concat l1 l2 =

        let rec aux l1 l2 =
                match l1 with 
                | [] -> l2
                | x :: xs -> x :: (aux xs l2)
        in aux l1 l2
(*
let contail l1 l2 = 

        let rec aux l1 l2 acc = 
                match *)
type 'a doublelist = 
        | Nil
        | Single of 'a 
        | Cons of 'a * 'a * 'a doublelist

let rev (l : 'a doublelist) : 'a doublelist =
    let rec unwrap lst acc =
        match lst with
        | Single x -> x :: acc
        | Nil -> acc
        | Cons (x, y, xs) -> unwrap xs ( y :: x :: acc)
    in
    let rec build lst= 
          match lst with 
          | [] -> Nil
          | x :: [] ->  Single x
          | x :: y :: [] -> Cons (x,y,Nil)
          | x :: y :: xs -> Cons (x,y,(build xs))
    in build (unwrap l [])   

let concat l1 l2 =

        let rec aux l1 l2 =
                match l1 with
                | [] -> l2
                | x :: xs -> x :: (aux xs l2)
        in aux l1 l2

let sublists lst =
        let rec inner curr lst acc =
                match lst with 
                | [] -> [curr] :: acc
                | x :: xs -> inner curr xs ((curr :: lst) :: acc)
        in
        let rec outer lst acc= 
             match lst with 
             | [] -> acc 
             | x :: xs -> outer xs (concat (inner x xs []) acc)
        in outer lst []
let concat l1 l2 =

        let rec aux l1 l2 =
                match l1 with
                | [] -> l2
                | x :: xs -> x :: (aux xs l2)
        in aux l1 l2

let subl lst = 
        let rec aux lst acc =
                match lst with
                | [] -> [acc]
                | x :: xs ->
                        concat 
                        (aux xs (concat acc [x]))    
                        (aux xs (acc))
        in aux lst []  

let rec fold_left f acc lst =
match lst with
| [] -> acc
| x :: xs -> fold_left f (f acc x) xs

let op accum next = fun n -> max (accum n) (next n)
let base n = n

let func_max (fs : (int -> int) list) : int -> int =
  fold_left op base fs

let rec map f l = 
        match l with 
        | [] -> []
        | x :: xs -> f x :: map f xs

let mapt f l =
       let rec reverse l acc= 
              match l with
              | [] -> acc
              | x :: xs -> reverse xs (x :: acc)
       in
       let rec aux f l acc = 
        match l with 
        | [] -> acc
        | x :: xs -> aux f xs ( f x :: acc)
       in reverse (aux f l []) []     

let rec filt f l =
        match l with 
        | [] -> []
        | x :: xs -> if (f x) then x :: filt f xs 
                              else filt f xs
let filtt f l = 
        let rec reverse l acc =
                match l with 
                | [] -> acc
                | x :: xs -> reverse xs (x :: acc)
        in
        let rec aux f l acc =
                match l with 
                | [] -> acc
                | x :: xs -> if (f x) then aux f xs (x :: acc)
                                      else aux f xs (acc)
        in aux f l [] 

let rec rev l acc =
        match l with 
        | [] -> acc
        | x :: xs -> rev xs (x :: acc)
let cat l1 l2 =
        let rec aux l2 acc =
               match l2 with 
               | [] -> acc
               | x :: xs ->  aux xs (x :: acc)
        in rev (aux l2 (rev l1 [])) []
(*
Without using any functions from the standard library, implement the function
val repeats : (’a * int) list → ’a option list
so that repeats l is the result of replacing each tuple (x, n) with n copies of Some x in the case that n is
nonnegative and -n copies of None otherwise. Your implementation must be tail recursive.
*)

let repeats plst = 
        let rec reverse lst acc = 
                match lst with
                | [] -> acc
                | x :: xs -> reverse xs ( x :: acc)
        in 
        let rec repeat x i acc = 
                if i < 0 then repeat x (i+1) (None :: acc)
                else if i > 0 then repeat x (i-1) (Some x :: acc)
                else acc 
        in                
        let rec aux lst acc = 
               match lst with 
               | [] -> acc 
               | (x, y) :: xs -> aux xs (repeat x y acc)
        in reverse (aux plst []) []     

let fold_l op acc lst = 
        match lst with
        | [] -> acc
        | x :: xs -> fold_l (op acc x) xs
let fold_r op lst acc =
        match lst with
        | [] -> acc
        | x :: xs -> op x (fold_r op xs acc) 


*)
(*  
let _ = assert
  (func_max [(+) 1; fun x -> x * x] 1 = 2)
let _ = assert
  (func_max [(+) 1; fun x -> x * x] (-2) = 4)
*)