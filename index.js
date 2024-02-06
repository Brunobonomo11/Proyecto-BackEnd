console.log(10, typeof 10)
console.log(10n, typeof 10n)
console.log("Me llamo Bruno", typeof "Me llamo Bruno")
console.log(true, typeof true)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log([1,2,3,4,5], typeof  [1,2,3,4,5])
console.log({id: 100, nombre: "Bruno Bonomo", edad:23}, typeof {id: 100, nombre: "Bruno Bonomo", edad:23})

let user = { name: 'Bruno', edad: 23, email:"bruno.bonomo11@gmail.com"};

let admin = user;

admin.name = 'Pato';

console.log(user.name)

let usuario2 = {...user}

usuario2.name = "Patricio"

console.table({user, usuario2})
