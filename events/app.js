// const EventEmitter = require('events');
// console.log(EventEmitter);

const EventEmitter = require('events')
const emisorProducts = new EventEmitter();

emisorProducts.on('compra', (total)=>{
    console.log(`Se realizo la compra, ${total}$`)
});
//emisorProducts.emit('compra');

emisorProducts.emit('compra',500);
emisorProducts.emit('compra',100);
emisorProducts.emit('compra',400);