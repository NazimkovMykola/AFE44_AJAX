//синхронний код
console.log('hello')

function someFunction () {
    setTimeout(()=> {
        return 5
    }, 5000)
}

//асинхронний код
const data = 5
const data2 = someFunction() // - ця фукнція виконаєтся не миттєво
console.log(data2) // undefined

// проблема асинхроного коду - це те що нам потрібно вказати скрипту дочекатись певних результатів роботи функції

//Promise - обіцянка
// асинхронна функція нам повертає замість даних - обіцянку

const asyncFunction = async () => {
    const promise = new Promise((resolve, reject)=> {
            resolve('Готово, я все зробив!!!!')
    })
    return promise
}

//async, await
console.log('Старт асинхронного скрипта')
//fetch
const json = await fetch("https://jsonplaceholder.typicode.com/todos/1")
const obj = await json.json()
console.log(obj)
console.log("Ура, ми дочекались поки виконаєтся асинхронна функція!!!!!")

 
console.log('початок')
try {
const json = await fetch("https://jsonholder.typicode.ua/tos/1")
const obj = await json.json()
console.log(obj)
} catch (e) {
console.log(`Помилка ${e.name}, повідомлення - ${e.message}`)
}
console.log("кінець")