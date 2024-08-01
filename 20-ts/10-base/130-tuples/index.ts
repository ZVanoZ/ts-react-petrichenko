console.log('now is', new Date());

const myTuple: [boolean, string, number] = [true, "hello", 0];
const [item1, item2, item3] = myTuple;
console.log("item1", item1);
console.log("item2", item2);
console.log("item3", item3);

const myTuple20: [boolean, ...string[]] = [true, "hello", "world"];
const myTuple30: [boolean, ...string[], number] = [true, "hello", "world", 123];
const myTuple40: [...string[], number] = ["hello", "world", 123];


myTuple[0] = false;
myTuple.push(1);
myTuple.push(2);
myTuple.push(3);

myTuple.forEach((item) => {
    console.log("item", item);
});