var socket = io.connect('http://localhost:4000');  

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

message.addEventListener('keypress', ()=>{
    socket.emit('typing', handle.value);
})

btn.addEventListener('click', ()=>{
    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });
});

socket.on('chat', (data)=>{
    feedback.innerHTML = "";
    output.innerHTML += `<p><strong> ${data.handle}: </strong> ${data.message} </p>`
})

socket.on('typing', (data)=>{
    feedback.innerHTML = `<p><em> ${data}: </em> is typing... </p>`
})