// 반복문 while


// while 예제
let i = 0;
while(i < 3) {
    i++;
    console.log(i)
} // output: 0, 1, 2


i = 0;
do {
    console.log(i); // output: 0, 1, 2
    i++;
} while(i < 3);

i = 4;
do {
    console.log(i) // output: NO
    i++;
} while(i < 3);