let string = "*";
for (let i = 1; i < 9; i++){
    console.log(string)
    if (i >= 5) {string = string.slice(1);}
    else if (i < 5) {string += "*";}
}