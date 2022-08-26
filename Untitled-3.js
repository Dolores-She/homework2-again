// задание 1

for(let i = 10; i <= 50; i = i + 2) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Задание 2

const aboutMyself = {
    name : "Lolita",
    lastname : "Sheehan",
    age : 23,
    pets : (true)
};
console.log(aboutMyself); 

// Задание 3

let array = ['я в Симбирск,', 'в трактире.', 'с утра', '"В ту же ночь', 'Я остановился', 'для закупки',  'что и было поручено Савельичу.', 'приехал,', 'где должен был', 'нужных вещей', 'отправился по лавкам"', 'пробыть сутки', 'Савельич'];
let result = array[3] + ' ' +  array[7] + ' ' + array[0] + ' ' +  array[8] + ' ' + array[11] + ' ' +  array[5] + ' ' + array[9] + ' ' +  array[6] + ' ' + array[4] + ' ' +  array[1] + ' ' + array[12] + ' ' +  array[2] + ' ' + array[10];
    
alert(result);

// Задание 4

const fullName = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
fullName("Lolita" , "Sheehan");

// Задание 5

// Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
// if(num % 2) console.log(num);

let num = 21;
while (num <= 67) {
     console.log(num);
     num = num + 2;
}
