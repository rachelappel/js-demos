var output = document.getElementById("output");

function toInfinity() {
    console.log( 1 / 0 );
}

function showNaNType() {
    console.log("Nan is of type: " +  typeof(NaN) ); // LOL wut?
}

function showString() {

    let str = "Hello";
    let str2 = 'Single quote hello';
    let phrase = 'string interpolator ${str}'; // nope
    console.log(phrase); // logs literally "string interpolator ${str}"
    console.log(`string interpolator ${str}`); // logs correct output

}

function showTypeOf(){
    console.log(`undefined: ${typeof undefined}`);
    console.log(`0: ${typeof 0}`);
    console.log(`true: ${typeof true}`);
    console.log(`string: ${typeof "stringly-string-thing"}`);
    console.log(`symbol: ${typeof Symbol}`);
    console.log(`Math: ${typeof Math}`);
    console.log(`null: ${typeof null}`);
    console.log(`alert: ${typeof alert}`);
    console.log(`NaN: ${typeof NaN}`);
    console.log(`Object: ${typeof Object}`);
    console.log(`function: ${typeof function() {return true;}}`);
    console.log(`123: ${typeof 123}`);
    console.log(`T/F: ${typeof true}`)

}


