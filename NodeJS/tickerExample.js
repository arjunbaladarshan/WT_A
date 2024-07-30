const EventEmmiter = require('events')
class MyEvent extends EventEmmiter{
	startTicks(){
		setInterval(()=>{
			this.emit('tick')
		},1000)

		setInterval(()=>{
			this.emit('arjun')
		},5000)
	}
}


const obj = new MyEvent();

obj.startTicks();

obj.on('tick',()=>{
	console.log('Got Tick Message')
})

obj.on('arjun',()=>{
	console.log('Got Arjun Message')
})