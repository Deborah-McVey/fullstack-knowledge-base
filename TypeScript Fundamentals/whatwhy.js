So, if we have an error, it will not run. 

Static typing can avoid errors, that JS might run anyway.

function add(a, b) {
    return a + b;
}

// Typescript 
 
function add(a: number, b: number) {
    return a + b;
}

const result = add('2', '5');

console.log(result);