
$('#m').keyup(function(){
    if($.trim(this.value).length > 0)
        $('#send_bttn').show();
     else
        $('#send_bttn').hide();
 });