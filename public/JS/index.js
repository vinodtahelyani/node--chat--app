var socket = io();
socket.on('connect',function(){
    console.log('connected');
    // socket.emit('createEmail',{
    //     to:'example@example.com',
    //     message:'hey example'
    // });
    // socket.emit('createMsg',{
    //     msg:'greetings to all'
    // });
});
socket.on('disconnect',function(){
    console.log('disconnected');
});

socket.on('newEmail',function(data){
    console.log(data.from +' '+ data.message);
});

socket.on('newMsg',function(data){
    console.log(data.msg);
    
})