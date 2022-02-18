// sort() 고차함수  - (2)
let ascending_order1 = function(x,y) {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x>y) return 1;
    else if (y>x) return -1;
    else return 0;
};

let descending_order1 = function(x,y) {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x < y) return 1;
    else if (y < x) return -1;
    else return 0;
};

let fruits1 = ["apple", "Orange", "orange", "melon"];
console.log(fruits1.sort(ascending_order1));
console.log(fruits1.sort(descending_order1));