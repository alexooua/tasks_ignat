import React from 'react';
import s from './MapTaskAndExamples.module.css';

function MapTaskAndExamples() {


    return (
        <div className={s.tasks}>
            <div className="task_1">
                <h2>task_1</h2>
                <c className={s.text}>
                    1. Преобразовать массив чисел
                    [1, 2, 3, 4, 5] в массив строк
                    [‘1’, ‘2’, ‘3’, ‘4’, ‘5’];
                </c>
                <h2>Decision</h2>
                <code className={s.text}>
                    let arr=[1, 2, 3, 4, 5];<br/>
                    let res=arr.map(v=>v.toString()) ;<br/>
                    console.log(res);<br/>
                </code>
                <h2>task_2</h2>
                <p className={s.text}>
                    Преобразовать массив строк
                    [‘age’, ‘name’, ‘gfgfgf’] в массив строк с верхним регистром

                </p>
                <h2>Decision</h2>
                <code className={s.text}>
                    let arr=['age', 'name', 'gfgfgf'];<br/>
                    let res=arr.map(v=>v.toUpperCase()) ;<br/>
                    console.log(res);<br/>
                </code>
                <h2>task_3</h2>
                <p className={s.text}>
                    [‘andrey’, ‘vasja’, ‘kirill’] в массив у которого каждый элемент будет с первой заглавной буквой
                </p>
                <h2>Decision</h2>
                <code className={s.text}>
                    let arr=["andrey", "vasja", "kirill"];<br/>
                    let res=arr.map(v=> v[0].toUpperCase()+v.slice(1)) ;<br/>
                    console.log(res);<br/>
                </code>
                <h2>task_4</h2>
                <p className={s.text}>
                    Преобразовать массив строк
                    [‘Andrey’, ‘Vasja’, ‘Kirill’]
                    в массив объектов:
                    {`[{ name: ‘Andrey’ }, { name: ‘Vasja’ },{ name: ‘Kirill’ } ]`}

                </p>
                <h2>Decision</h2>
                <code className={s.text}>
                    let arr=["Andrey", "Vasja", "Kirill"];<br/>
                    {`let  res=arr.map(elem=>({name : elem })) ;`}<br/>

                    console.log(res);<br/>
                </code>
                <h2>task_5</h2>
                <p className={s.text}>
                    Есть массив имен


                    ['Andrey', 'Vasja', 'Kirill']

                    и есть массив возрастов


                    [23, 30, 50]

                    Каждый индекс имени в массиве совпадает с индексом возраста массива возрастов.

                    Используя метод map и данные два массива создать новый массив, каждый элемент которого будет
                    объектом:


                </p>
                <h2>Decision</h2>
                <code className={s.text}>
                    let arr=['Andrey', 'Vasja', 'Kirill'];<br/>
                    let arr2=[223, 30, 50];<br/>
                    {`let res=arr.map((value, index, array) => ("{"+array[index]+":"+arr2[index]+"}") );`}<br/>
                    res = eval('[' + res + ']');<br/>
                    console.log(res);<br/>
                    Или <br/>
                    let arr = ['Andrey', 'Vasja', 'Kirill'];<br/>
                    let arr2 = [223, 30, 50];<br/>
                    {`let res = arr.map((v , i  ) => ({name:v,age:arr2[i]}));`}<br/>
                    console.log(res);<br/>
                </code>
                <h2>task_6</h2>
                <p className={s.text}>
                    Преобразовать массив объектов <br/>
                    {`[{age: 23}, {age: 30}, {age: 50}]`} <br/>
                    в массив чисел элементами которого будут числа (значения возрастов из объектов)<br/>

                </p>
                <h2>Decision</h2>
                <code className={s.text}>
                    {`let arr  = [{age: 23}, {age: 30}, {age: 50}];`}<br/>
                    let res = arr.map((v , i ) => v.age);<br/>
                    console.log(res);<br/>
                </code>
                <h2>task_7</h2>
                <p className={s.text}>
                    Имеется массив<br/>


                    [23 , 5, null, true, 'Vasja', {}, []]<br/>

                    Требуется преобразовать данный массив в массив, элементы которого будут:<br/>
                    - если элемент число, то новый элемент будет объектом, у которого свойство будет<br/>
                    являться элементом массива в виде {`{age: 23}`}<br/>
                    - если строка, то в новом массиве элемент будет той же строкой в верхнем регистре<br/>
                    - в остальных случаях элементы преобразуются в строку ‘not a number or a string’)<br/>

                </p>
                <h2>Decision</h2>
                <code className={s.text}>
                    {`let arr  = [{age: 23}, {age: 30}, {age: 50}];`}<br/>
                    let res = arr.map((v , i ) => v.age);<br/>
                    console.log(res);<br/>
                </code>
                <h2>task_8</h2>
                <p className={s.text}>
                    Требуется преобразовать исходный массив в массив, элементы которого будут:<br/>
                    - если исходный элемент - число, то новый элемент будет объектом в виде {`{age: 23}`};<br/>
                    - если строка, то в новом массиве элемент будет той же строкой в верхнем регистре;<br/>
                    - в остальных случаях элементы преобразуются в строку ‘not a number or a string’.<br/>

                </p>
                <h2>Decision</h2>
                <text className={s.text}>
                    let oldArray = [23, 5, null, true, 'Bob', [], {}];<br/>
                    {`let newArray = [];`}<br/>
                    {`// Код пишем здуесь!!!`}<br/>
                    {` newArray=oldArray.map(el=>{`}<br/>
                    {` let result;`}<br/>
                    {`switch (typeof el) {`}<br/>
                    case "number":<br/>
                    {`result={age:el};`}<br/>
                    break;<br/>
                    case "string":<br/>
                    result=el.toUpperCase();<br/>
                    break;<br/>
                    default:<br/>
                    result="not a number or a string";<br/>
                    break

                    }<br/>
                    return result;<br/>
                    })<br/>
                </text>
                <h2>task_8</h2>
                <p className={s.text}>
                    Создайте новый массив с элементами из исходного массива, которые больше 2.
                </p>
                <h2>Decision</h2>
                <code className={s.text}>
                    let myNumbers = [1, 2, 3, 4];<br/>
                    let myBigNumbers = [];<br/>
                    myBigNumbers=myNumbers.filter(num=>num>=2);<br/>
                    console.log(myBigNumbers);<br/>
                </code>
                <h2>task_9</h2>
                <p className={s.text}>
                    Создайте новый массив совершеннолетних пользователей.
                </p>
                <h2>Decision</h2>
                <code className={s.text}><br/>
                    let users = [<br/>
                    {`  {age: 11, name: 'Vasja'},`}<br/>
                    {`{age: 13, name: 'Ivan'},`}<br/>
                    {`   {age: 18, name: 'Katya'},`}<br/>
                    {`{age: 23, name: 'Andrey'}`}<br/>
                    ];<br/>
                    {`let oldUsers = [];`}<br/>

                    {`// Код пишем здесь!!!`}<br/>
                    oldUsers=users.filter(us=>us.age>=18);<br/>
                    console.log(oldUsers);<br/>
                </code>
                <h2>task_10</h2>
                <p className={s.text}>
                    Сформируйте из исходного массива массив слов, содержащих более 5 символов.<br/>
                    массив совершеннолетних пользователей.
                </p>
                <h2>Decision</h2>
                <code className={s.text}><br/>
                    let words = ['run', 'execution', 'let', 'function', 'const'];<br/>
                    let shortWords = [];<br/>
                    shortWords=words.filter(el=>el.length>5)<br/>
                    console.log(shortWords);<br/>
                    console.log(words);<br/>

                </code>
                <h2>task_11</h2>
                <p className={s.text}>
                    Отфильтровать исходный массив таким образом, чтобы в нем были только строки и числа.
                </p>
                <h2>Decision</h2>
                <code className={s.text}><br/>
                    let arr = ['function', 23, null, 'object', 55, 'null', true, undefined]<br/>
                    let filtredArr = [];<br/>
                    filtredArr=arr.filter(el=>typeof el==="number"||typeof el==="string");<br/>
                    или<br/>
                    filtredArr=arr.filter(el=>["string","numder"].includes(typeof el));<br/>

                    console.log(filtredArr)<br/>

                </code>
                <h2>task_12</h2>
                <p className={s.text}>
                    Удалите из исходного массива чётные числа
                </p>
                <h2>Decision</h2>
                <code className={s.text}><br/>
                    let randomNumbers = [1, 34, 32, 456, 47, 97];<br/>
                    let oddNumbers = [];<br/>
                    или<br/>
                    oddNumbers=randomNumbers.filter(num=>num%2)<br/>
                    oddNumbers=randomNumbers.filter(num=>num%2)<br/>
                    console.log(oddNumbers);<br/>

                </code>
                <h2>task_13</h2>
                <p className={s.text}>
                    Найдите сумму всех элементов массива.<br/>
                  Используйте метод массивов 'reduce'.<br/>
                </p>
                <h2>Decision</h2>
                <code className={s.text}><br/>
                    let arrTоSum = [1, 2, 3, 4, 5, 6];<br/>
                    let sum;<br/>
                    sum=arrTоSum.reduce((sum,el)=>sum+el,0);<br/>
                    console.log(sum);<br/>

                </code>
                <h2>task_14</h2>
                <p className={s.text}>
                    .Создайте функцию "average", которая    принимает массив из чисел и возвращает<br/>
                    среднее арифметическое значение элементов массива.<br/>
                </p>
                <h2>Decision</h2>
                <code className={s.text}><br/>
                    let array = [1, 2, 3, 4, 5, 6];<br/>

                  {`  let average= (arr)=>{`}<br/>
                        {`return arr.reduce((sum,el)=>sum+el,0)/arr.length`}<br/>
                    {`};`}<br/>
                    console.log(average(array));<br/>

                </code>
                <h2>task_14</h2>
                <p className={s.text}>
                    Дан произвольный массив из чисел. Напишите функцию, <br/>
                    которая возвращает максимальное значение из массива.<br/>
                    Подумайте, каким ещё способом это мложно сделать? .<br/>
                </p>
                <h2>Decision</h2>
                <code className={s.text}><br/>
                    let array55= [6, 9, 5, 4, 5, 6];<br/>
                    let max = array55.sort()<br/>
                    let max1 = array55.pop()<br/>
                    console.log(max);<br/>

                </code>

            </div>
        </div>
    );
}


export default MapTaskAndExamples;
