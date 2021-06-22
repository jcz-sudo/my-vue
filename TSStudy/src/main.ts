document.write("hello world")

let list1:number[] = [1,2,3]

let list2:Array<number> = [1,2,3]

//元组类型允许表示一个已知元素 数量和类型 的数组，各元素的类型不必相同。
let t1:[string,number]
t1 = ['hello',10]
// t1 = [10,"12"]//error
