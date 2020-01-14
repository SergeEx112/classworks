// let user = {};

// user.firstName = 'Kolya';
// user.lastName  = 'Rasputin'
// user.age = 58;
// const fn = 'firstName'

// const inputElement = 'firstName'

// user.pushVal = (val) => {
// 	user.surname = val
// }


// console.log(user.firstName)
// console.log(user['lastName'])



// arr.splice(1,0, 'asasdasda') добавлять в массив.

//// Arrays

// const arr = ['Kolya', 'Rasputin']
// // console.log(arr)
// arr.push('Sema')
// // console.log(arr)

// for (let i = 0; i < 4; i++) {
// 	console.log(arr[i])
// }

// for (let key in user) {
// 	console.log(key, ' : ', user[key])
// }

// console.log('---------in--------')

// for (let key of arr) {
// 	console.log(key, ' : ', user[key])
// }




// let arr = [];
// let size = 10;

// for (let i = 0; i < size; i++) {
// 	console.log(arr.push(i));
// }




// let cat = {
// 	name: 'Bysiy',
// 	age: 1,
// 	legsCount: 4,
// 	color: 'White',
// 	sayMew: () => {
// 		return 'Meow'
// 	}
// }
//  const getAllPropertyes = (pet) => {
// 	 let result = '';
// 	 for (let key in pet) {
// 		 let keysOfpet = key
// 		 let propertyesOfPet = cat[key]
// 		 if (typeof propertyesOfPet == 'function') {
// 			 result += keysOfpet + ' : ' + propertyesOfPet() + ' , '
// 		 } else {
// 			 result += key + ' : ' + propertyesOfPet + ' , '
// 		}

// 	  }
// 	  return result
//  }
// let result = getAllPropertyes(cat)
// console.log(result)
// console.log(getAllPropertyes(cat))


////////////////////////////////////////////////////


 ////////////// Конструктор


// function User(name, surname, age){
// 	this.name = name;
// 	this.surname = surname;
// 	this.age = age;
// 	sayYourName = function() {
// 		return `My name is ${this.name}`;
// 	}
// }

// const userWU = {
// 	name: "Vasya",
// 	surname: "Pupkin",
// 	age: 18,
// }

// const user = new User('Vasya', 'Pupkin', 18)
// const userSecond = new User('Petya', 'Lapkin', 48)
// console.log('userWU: ', userWU)
// console.log('user: ', user)
// const userWU = {
// 	name: "Vasya",
// 	surname: "Pupkin",
// 	age: 18,
// }

// function User({name, surname, age}) {
// 	this.name = name || 'No name';
// 	this.surname = surname || 'No surname';
// 	this.age = age || null;
// 	this.getAge = function() {
// 		return '12312';
// 	}
// }

// User.prototype.getAge = function() {
// 	 return this.age;
// }

// const user = new User('Vasya', 'Pupkin', 18)
// const userSecond = new User('Petya', 'Lapkin', 48)
// console.log('userWU: ', userWU)
// console.log('user: ', user)





// const arrofUsers = [];

// function User({name, surname, age}) {
// 	this.name = name || 'No name';
// 	this.surname = surname || 'No surname';
// 	this.age = age || null;
// 	arrOfUsers.push(this)
// 	this.indexOfUser = arrOfUsers.lenght -1
// 	}

// 	const firstUser = new User ({
// 		name: "Vasya",
// 		surname: "Pupkin",
// 		age: 18,
// 	})

// const secondUser = new User({
// 	name: "Kolya",
// 	surname: "Piton",
// 	age: 48,
// })

// const newUser = new User({
// 	name: "Lola",
// 	surname: "Fish",
// 	age: 30,
// })

// User.prototype.getPreviewUser = function () {
// 	const indexOfPreviewUser = this.indexOfUser
// 	const user = arrOfUsers[indexOfNextUser]
// 	if (user !== undefined) {
// 		return user
// 	}
// 	return "User not defined"
// }

// console.log(indexOfPreviewUser)
// console.log(secondUser)


// for (let {name, email} of arr) { ключи для массива
// 	arr.push( {name, email } )
// }
//  Object.assign(Object, custom)

// class Numbers{
// 	constructor(){
// 		this.name = 'Vasya',
// 		this.email = 'exaple@gmail.com'
// 		console.log('User has been created')
// 	}
// 	getinfo(){
	
// 	}
// }



// let user = new Numbers()
// console.log(user)

// class Numbers{
// 	constructor(name, email){
// 		this.name = name
// 		this.email = email
// 		console.log('User has been created')
// 	}

// 	getinfo(){
// 		return this.name + '' + this.email
// 	}
// }



// let user = new Numbers('Vasya', 'example@gmail.com')
// let user1 = new Numbers('Serhii', 'example11@gmail.com')
// console.log(user)
// console.log(user1)

// class Human {
// 	constructor(name, surname, age, gender) {
// 		this.name = name
// 		this.surname = surname
// 		this.age = age
// 		this.gender = gender
// 	}
	
// 	getFullInfo(){
// 		let infoStr = ''
// 		for (let key in this) {
// 			infoStr += key + ': ' + this [key]+ ', '
// 		}
// 		return infoStr
// 	}
// 	getEmail() {
// 		return this.email
// 	}
// }

// let hum = new Human('Vasya', 'Pipkin', 19, 'male')

 
// class User extends Human{
// 	constructor(email, password, name, surname, age, gender) {
// 		super(name, surname, age, gender)
// 		this.email = email
// 		this.password = password
// 	}
// }

// let user = new User('example11@gmail.com', 'qwerty', 'Vasya', 'Pipkin', 19, 'male')


// class Numbers{
// 	constructor(name, email){
// 		this.name = name
// 		this.email = email
// 		console.log('User has been created')
// 	}

// 	getinfo(){
// 		return this.name + '' + this.email
// 	}
// }



// let user = new Numbers('Vasya', 'example@gmail.com')
// let user1 = new Numbers('Serhii', 'example11@gmail.com')
// console.log(user)
// console.log(user1)


//////Д.З  6 

// const monthDate = [
// 	'Январь',
// 	'Февраль',
// 	'Март',
// ]

// const arrOfUsers = []
// for (let i = 0; i < 5; i ++) {
//     let fakeData = faker.helpers.createCard()
//     arrOfUsers.push(fakeData)
// }

// class Customer{
// 	constructor(customer){
// 		this.getCustomersProperties(customer)

// 	}

// 	getCustomersProperties(customer){
// 		for(let key in customer){
// 			this[key] = customer[key]
// 		}
// 	}
	
// 	getTotalAmount(){
// 		let totalCount = 0;
// 		for (let {amount} of this.accountHistory){
// 			console.log(totalCount += +amount)
// 		}
// 		return ~~(totalCount)
// 	}

// 	getAmountAndMonth(){
// 		return this.accountHistory.map(item => {
// 			return {
// 				amount: item.amount,
// 				month: monthDate[item.date.getMonth()]
// 			}
// 		})
// 	}

	// getAmountAndMonth(){
	// 	let arrOfResults = []
	// 	for (let {date, amount} of this.accountHistory){
	// 		arrOfResults.push({
	// 			month: monthDate[date.getMonth()],
	// 			amount,
	// 		})
	// 	}
	// 	return arrOfResults
	// }
// }

// const cust = new Customer(arrOfUsers[1])

// const monthDate = [
// 	'Январь',
// 	'Февраль',
// 	'Март',
// ]




//////////14.01.2020

// function foo(){
// 	return this.name;
// }	

// let fooResult = foo()

// let obj = {
// 	name: 'Vasya',
// 	fooResult: foo,
// }

// console.log(fooResult)
// console.log(obj.fooResult())


// function newFunction() {
// 	let clouser = () => {
// 		return () => ++count;
// 	};
// 	let count = clouser();
// }

// let clouser = () => {
// 	let nameStr = ''
// 	return (name) => {
// 		if (nameStr.length) {
// 			nameStr += `, ${name}`
// 			return nameStr
// 		}
// 		nameStr += `${name}`
// 		return nameStr;
// 	}
// }

// let getnames = clouser()
// getnames('Loli')
// getnames('jojo')
// console.log(getName('hoho'))


const arrOfUsers = []

for (let i = 0; i < 10; i++) {
	let user = faker.helpers.createCard()
	arrOfUsers.push(user)
}

class User {
	constructor(user){
		this.id = ++User.nextId;
		Object.assign(this, user)
	}
	static nextId = 0

	get fullName() {
		return 'My name Is ' + this.name
	}

	get totalAmount (){
	return this.accountHistory.reduce((counter, item) => {
		return counter + +item.amount
	  }, 0)
	}

	set newId(id){
		if (typeof id !== 'number'){
			this.id = ++User.nextId;
			return this.id
		}
		if (User.nextId > id) {
			this.id = ++User.nextId;
			return this.id
		}
		this.id = id;
		User.nextId = id;
		return this.id;
	}
}

for (let index in arrOfUsers){
	let user = arrOfUsers[index]
	arrOfUsers[index] = new User(user);
}