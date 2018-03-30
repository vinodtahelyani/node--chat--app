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
    $('#msgs').append(`<li>${data.from}: ${data.msg}</li>`)  
});

$('#message-form').submit(function(e){
    e.preventDefault();
    socket.emit('createMsg',{
        from:'User',
        msg:$('#msg').val()
    },function(data){
        $('#msgs').append(`<li>Me: ${$('#msg').val()}</li>`);
        $('#msg').val(null);
    });
});
