// let mostrarAmigos = function () {
//     $('#lista').empty();
//     $.get('http://localhost:5000/amigos', function (data) {
//         data.forEach(amigo => {
//             //$('#lista').append('<li id=' + amigo.id + '>' + amigo.name + '<span onclick = "deleteFriend(' + amigo.id + ')"> X </span></li>');
//             $('#lista').append(`<li id= ${amigo.id}>${amigo.name}<span onclick= "deleteFriend(${amigo.id})"> X </span></li>`);
//         });
//     });
// }

let mostrarAmigos = function(){
    $('#lista').empty();
    $.ajax({
        url: `http://localhost:5000/amigos`,
        type: 'Get',
        success: function(data){
            data.forEach(amigo => {
            $('#lista').append(`<li id= ${amigo.id}>${amigo.name}
            <span onclick= "deleteFriend(${amigo.id})"> X </span></li>`);
            })
        }
    })
}

$('#boton').click(mostrarAmigos);

// $('#search').click(function(){
//     let id= $('#input').val();
//     if(id){
//         // $.get('http://localhost:5000/amigos/' + id, function(data){
//         //     console.log(data);
//         // })
//         $.get(`http://localhost:5000/amigos/${id}`, function(data){
//                 $('#amigo').html(data.name);
//              })
//     }
//     else{
//         $('#amigo').html('');
//         alert('Ingresa un dato!');
//     }
// })

let search = function(){
    let id = $('#input').val();
    if(id){
        $.ajax({
            url: `http://localhost:5000/amigos/${id}`,
            type: 'GET',
            success: function(data){
                $('#amigo').html(data.name);
                mostrarAmigos();
                $('#input').val('');
            }
        });
    } 
    else{
        $('#amigo').html('');
        alert('Ingresa un dato!');
    }
}
$('#search').click(search);

let deleteFriend = function(idAmigo){
    let id;
    if(typeof idAmigo === 'number'){
        id = idAmigo;
    } 
    else{
        id = $('#inputDelete').val();
    }
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: function (data) {
            $('#sucess').text(`el amigo fue borrado exitosamente`);
            mostrarAmigos();
            $('#inputDelete').val('');
        }
    })
}; 
$('#delete').click(deleteFriend);