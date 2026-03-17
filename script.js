// console.log("mensagem normal")
// console.info("informaçao")
// console.warn("aviso")
// console.error("error")
// -----------

// console.tablet([
//     {
//         id: 1, tarefa "estudar2"
//     },
//     {
//         id: 2, tarefa: "praticar codigo"
//     }
// ])

// console.group("grupo de logs")
// console.log('log 1')
// console.log('log 2')
// console.log('log 3')
// console.groupEnd()

// console.timer("timer")

// let casa = ""
// if (casa == "casa") {console.log('casa')}
// console.timerend()


// var antigo = "forma antiga de declarar variaveis"

// let username "maria"

// const API_URL = "url"

// let texto = "ola"
// console.log("nome= "+(texto) + " tipo " + typeof (texto))

// let numero = 10
// console.log("numero="+(numero) + " tipo " + typeof (numero))

// let semvalor
// console.log("semvalor="+ semvalor+ "tipo"+typeof (semvalor))

// let nulo = null
// console.log("nulo="+ nulo+ "tipo"+ typeof (nulo))

// let uniqueId = Symbol("id")
// console.log(typeof(uniqueId))
// console.log(uniqueId)

// let bignumero = 99999999n
// console.log("bignumero"+ bignumero + "tipo" + typeof(bignumero))

// let task = {
//     // propriedade 1
//   id: 1,
//   // propriedade 2
//   title: "Aprender JavaScript",
//   //propriedade 3
//   completed: false,
// //   propriedade 4
//   assignee: {
//     name: "João",
//     email: "joao@example.com"
//   },
//   toggleComplete() {
//     this.completed = !this.completed;
//   }
// };

// let tasks = {
//   id: 1,
//   title: "Aprender JavaScript",
//   completed: false,
//   assignee: {
//     name: "João",
//     email: "joao@example.com"
//   },
//   toggleComplete() {
//     this.completed = !this.completed;
//   }
// }
// console.table(tasks) 

// let hoje = new Date()
// console.log(hoje)

// let amanha = new Date
// ("03-18-2026")
// console.log(amanha)

let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
console.log(pattern.test("+55(11)92299-0899")); // true
console.log(pattern.test("+55(11)2299-0899"));  // true
