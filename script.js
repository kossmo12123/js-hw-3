// Задание 1
function task1() {
    const arr = [10, 20, 30, 40, 50, 60];
    
    
    const first2 = arr.slice(0, 2);
    
    
    const last2 = arr.slice(-2);
    
    
    const result = first2.concat(last2);
    
    document.getElementById('out1').textContent = 
        `Исходный: [${arr}]\nРезультат: [${result}]`;
    
    console.log('Задание 1:', result);
}

// Задание 2
function task2() {
    const fruits = ["apple", "banana", "orange"];
    
    const bananaIndex = fruits.indexOf("banana");
    
    if (bananaIndex !== -1) {

        fruits.splice(bananaIndex + 1, 0, "fresh");
        document.getElementById('out2').textContent = 
            `"banana" найдена. Вставляем "fresh"\nРезультат: [${fruits}]`;
    } else {

        fruits.push("banana");
        document.getElementById('out2').textContent = 
            `"banana" не найдена. Добавляем в конец\nРезультат: [${fruits}]`;
    }
    
    console.log('Задание 2:', fruits);
}


// Задание 3
function task3() {
    const word = "developer";
    
    const arr = word.split('');
    
    console.log('Массив до удаления:', arr);
    
    const center = Math.floor(arr.length / 2);
    
    arr.splice(center - 1, 2);
    
    console.log('Массив после удаления:', arr);
    
    const result = arr.join('');
    
    document.getElementById('out3').textContent = 
        `Исходное слово: "${word}"\nМассив символов: [${word.split('')}]\nПосле удаления центра: [${arr}]\nИтоговая строка: "${result}"`;
    
    console.log('Задание 3:', result);
}


// Задание 4
function task4() {
    const arr = [1, 2, 3, 4, 5, 6];
    
    console.log('Исходный массив:', arr);
    
    arr.splice(2, 3);
    
    console.log('После удаления:', arr);
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    arr.unshift(sum);
    
    document.getElementById('out4').textContent = 
        `Исходный: [1,2,3,4,5,6]\nПосле удаления индексов 2-4: [1,2,6]\nСумма оставшихся: ${sum}\nИтоговый массив: [${arr}]`;
    
    console.log('Задание 4:', arr);
}

// Задание 5
function task5() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const result = [
        arr1[0] + arr2[0],
        arr1[1] + arr2[1],
        arr1[2] + arr2[2]
    ];
    
    document.getElementById('out5').textContent = 
        `Массив 1: [${arr1}]\nМассив 2: [${arr2}]\nРезультат: [${result}]`;
    
    console.log('Задание 5:', result);
}