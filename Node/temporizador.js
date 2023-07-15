const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/2 * 19 * * 6', function () {
    console.log('Executando a tarefa 1:', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Tarefa cancelada!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,6)]
regra.hour = 19
regra.second = 2

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando a tarefa 2:', new Date().getSeconds())
})