////Async API выполняеться после callStack, JS однопоточный язык.
/////
// let that = this; кастыль для this

// setTimeout(() => {
//     console.time()
//     console.log(1)
// }, 2000)

// let newDate = new Date().getTime()
// let obj = {
//     name:  'Vasya',
//     getName: function(){return this}
// }

// setTimeout(() => {
//     console.log(this)
// }, 2000)

// // console.log(obj.getName())

// let newDate = new Date().getTime()
// let obj= {
//     name:  'Vasya',
//     getName: function(){return this}
// }
// let count = 0;

// setInterval(() => {
//     console.log(cout++)
// }, );

//Часы
// setInterval(() => {
//    let h = new Date().getHours()
//    let m = new Date().getMinutes()
//    let s = new Date().getSeconds()
//    console.clear()
//    console.log (`${h} : ${m} : ${s}`)
// }, 1000);


// let prom = new Promise ((reselve, reject) => {
//     setTimeout(() => reselve('Works'), 4000)
// })

// console.log(prom)
// prom.then(res => console.log(res))
// console.log(prom)


/////base64= асинхронный, преображение картинки в код, через jS.


////Вызов ошибки
// throw new Error('msg')
// let a = 5;

// try  {
//     a = a + 5
//     // throw new Error('msg')
// } catch(e) {
//     console.log(e)
// } finally {
//     console.log('finally')
// }

/// Проверка на ошибки 
// let prom = new Promise((reselve, reject) => {
//     setTimeout(() => {
//         let result = ~~(Math.random() * 10) > 5
//         if (result) {
//             reselve(result)
//         } else {
//             reject('Error')
//         }
//     }, 500);
// })
// prom
//     .then(res => console.log('Reselve', res))
//     .catch(rej => console.log('Reject', rej))
//     .finally(() =>console.log('End'))



// const prom = () => {
//     return new Promise((reselve, reject) => {
//         setTimeout(() => {
//               let result = ~~(Math.random() * 10) > 5
//               if (result > 5) {
//                   reselve([1,2,3])
//               } else {
//                   reject([4,5,6])
//                 }
//         }, 500);
//     })  
// }  

// let foo = async () => {
//     let a = 5
//     try {
//         let arr = await prom()
//         for(let val of arr) {
//             console.log(val + a)
//         }
//     }
// }

// foo()


//// async всегда возвращяет Promise 

const prom = () => {
    return new Promise((reselve, reject) => {
        setTimeout(() => {
            reselve(condidateArr)
        }, 500);
    })
}


let foo = async () =>{
    let a = 5;
    let arr = await prom()
    for (let va of arr) {
        let elem =document.createElement('p')
        elem.innerText = val.name;
        document.body.appendChild(elem)
    }
    return 5
}
let a = async () => {
    return 5
};
let b = async () => {
    return 5
};


