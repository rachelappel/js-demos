var a = new Array();
var b = [];
var c = new Array(5);

a.push('wat');
console.log(`a ${a.length}`);
console.log(`a.toString() ${a.toString()}`)

b.push('wat');
console.log(`b ${b.length}`);
console.log(`b.toString() ${b.toString()}`)

// what about new Array with a length?
console.log(`c ${c.length}`);
console.log(`c.toString() ${c.toString()}`)

// check out the "out of bounds" that doesn't happen
a[12] = 'who';
console.log(`a ${a.length}`);


const jag = [[1, 2, 3], [1, 2]];
// len will be 2, since there are 2 dimensions, technically 2 items in array
console.log(`jag ${jag.length}`);

// watch what happens here. (hint: it starts at 5)
c.push(1);
c.push(2);
c.push(3);
c.push(4);
c.push(5);
console.log(`c ${c.length}`);
console.dir(c);
c[1] = 10;
c[2] = 20;
c[3] = 30;
c[4] = 40;
c[5] = 50;
console.log(`c ${c.length}`);

console.log(Array.isArray(a));
console.log(Array.isArray(b));
console.log(Array.isArray(c));


