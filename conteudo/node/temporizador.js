const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 2', function(){
    console.log('Executando tarefa', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando primeira tarefa')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [ new schedule.Range(1, 5) ]
regra.hour = 23
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Tarefa 2 iniciada', new Date().getSeconds())
})

//Alem do schedule e do setTimeout temos outros temporizadores disponiveis no node!

//node-schedule - https://www.npmjs.com/package/node-schedule
//setImmediate - https://nodejs.org/api/timers.html
//setInterval - https://nodejs.org/api/timers.html
//setTimeout - https://nodejs.org/api/timers.html