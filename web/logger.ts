// import winston from 'winston'
// const { combine, timestamp, json } = winston.format
let logger = console;
// console.log(globalThis?.window)
// if (globalThis?.window === null) {
//     // logger = winston.createLogger({
//     //     level: 'info',
//     //     format: combine(timestamp(), json()),
//     //     transports: [
//     //         new winston.transports.File({ 
//     //             filename: 'app.log'
//     //         }),
//     //     ],
//     // })
// } else {
//     logger = console
// }

export { logger }