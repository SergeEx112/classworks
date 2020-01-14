let user1 = {
	name: '',
	choise: '',
};
let user2 = {
	name: '',
	choise: '',
}
user1.name = prompt('Enter you name')
user2.name = prompt('Enter you name')

user1.choise = prompt(user1.name + ' enter choise:')
user2.choise = prompt(user2.name + ' enter choise:')


// k, n, b
if (!user1.choise.length) {
	console.log('User 1 value is empty')
	user1.choise = prompt('User1 enter choise:')
}

if (!user2.choise.length) {
	console.log('User 2 value is empty')
	user2.choise = prompt('User2 enter choise:')
}
 
if(user1.choise == 'k' && user2.choise == 'n' ||
	user1.choise == 'n' && user2.choise == 'b' ||
	user1.choise == 'b' && user2.choise == 'k') {
	console.log('user1.choise won')
}	else if (user1.choise == 'k' && user2.choise == 'k' ||
	user1.choise == 'n' && user2.choise == 'n' ||
	user1.choise == 'b' && user2.choise == 'b') {
	console.log('Draw')
} else {
	console.log('user2.choise won')
}
