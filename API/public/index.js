// let a = fetch('http://localhost:3000/users')
// a.then(res => res.json()).then(r => console.log(r))

axios.get('http://localhost:3000/users').then(res => {
    for (let name of res.data) {
        const el = document.createElement('h1')
        el.innerText = name;
        el.className = 'name first'
        document.body.appendChild(el)
    }
})

axios.post('http://localhost:3000/users', 'Kolya').then(r => {
    console.log(r.data)
})

console.log('asd')