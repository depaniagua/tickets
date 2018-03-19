var API_URL = "https://XXXXXXXXXXXXXXXX.execute-api.us-west-2.amazonaws.com/prod/tickets";

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: API_URL,
        success: function(data){
            data.Items.forEach(function(ticketsItem){
                $('#tickets').append('<tr><td>'+ ticketsItem.ID + '</td>'+'<td>'+ ticketsItem.movie + '</td>'+'<td>'+ ticketsItem.cost + '</td>'+'<td>'+ ticketsItem.quantity + '</td></tr>');
                })
            }
        });
      
    
    $('#send').on('click', function(){
        $.ajax({
            type: "POST",
            url: API_URL,
            data: JSON.stringify({
                'ID': parseInt($('#ID').val()),
                'movie': $('#movie').val(),
                'cost': parseInt($('#cost').val()),
                'quantity': parseInt($('#quantity').val())
            }),
            dataType: 'json',
            contentType: "application/json",
            success: function(data){
            location.reload();
            }
        });
    });
})   