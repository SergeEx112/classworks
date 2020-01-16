let timerFunc = () => {
    let time;
    return () => {
        if (!time) {
            time = new Date().getTime();
            return 'Enabled';
        } else {
            let olderTime = time;
            let temp =new Date().getTime();
            time = temp
            return temp - olderTime;
        }
    }
}

let getTime = timerFunc();

// let foo = (n,) => {
    // return this.name + n;

// }

// bind  ////биндитить кнопки 
// foo.bind(this)
// foo()
// foo.bind(human)

// call //// использовать одну и ту же функцую 
// foo.call(cat, '!!!!')

// aply /////
// foo.aply(this,[])


// let human = {
//     name: 'Vasyuo'
// }

// let cat = {
//     name: 'Zelda'
// }

// function foo(){
//     return this.name
// }

// let bar = foo.bind(human)
// console.log()

// foo = foo.bind(cat)
// console.log(foo())


// let obj = {
//     name: 'Vasya',
//     age: 2,
//     surname: 'Spls',
// }

// let obj1 = Object.assign({},obj, )

// obj1.name = 'Petya'

// console.log(obj)
// console.log(obj1)


////obj.freeze -замараживает объект.

let arr = ['Pety','Serhii','Kiklo']

//////unshift - добавляет в начало массива
///////arr.pop - удаляет с конца
////////arr.shift -удаляет с начала
/////////arr.splice(1. 0. '') удаляет по индексу или добавляет 
/////////arr.join(' : ') добавляет символ между значениями.


