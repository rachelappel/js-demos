function doesNanEqualNan() {
    console.log("NaN == NaN: " + (NaN == NaN));
    console.log("NaN === NaN: " + (NaN === NaN));
    const str = "what";
    console.log("Does 'str' equal NaN: " + (str === NaN));
}

function showNaN() {
    console.log( "This string is Not a Number: " + ("nope-nope-nope" / 42) );
}

