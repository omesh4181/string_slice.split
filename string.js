//slice_task
console.log("[SLICE METHODS]:-")
var a = "HYderAbaD".slice(2,-5)
console.log(a)
var b = "my farst task in slice ".slice(17,)
z = b.slice(17,23)
console.log(b)
console.log(z)
var c = "12345678".slice(0,5+1)
console.log(c)
var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice()
console.log(d.length)
var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(2,3)
console.log(e)

//split_task
console.log("[SPLIT METHODS]:-")
var e = " my farst task in split"
console.log(e.length)
console.log(e)
console.log(e.split(" "))
console.log(e.split(1))
var f = e.split("a")
console.log(f)

let room = "omesh@jani@sayam@tirumala@naveen@malli"
console.log(room.length)
console.log(room)
console.log(room.split("@"))
console.log(room.split("@").join("@"))
console.log(room.split("@").join(" "))
// var friends = room.join(",")
// console.log(friends,room)
//concat
console.log("[CONCAT METHODS]:-")
var a = "10000k"
b = "coder"
console.log(a.concat(b))
console.log(a.concat(" ",a))
console.log(a+" "+b)
console.log(b.concat(" ",a))
console.log(typeof(a))
//includes
console.log("[INCLUDES METHODS]:-")
let o = "my name is omesh".includes("my")
console.log(o)
console.log(typeof(o))
// console.log(ome)

let g = "iam trainee at 10k coder"
h = g.includes("omesh")
console.log(h)
console.log(" ".h)