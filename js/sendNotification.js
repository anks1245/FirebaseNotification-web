$("#btn-send").click(function(){
    //alert("working");
    var to=$("#users").val();
    var title=$("#title").val();
    var body=$("#message").val();
    //ajaxnotify(to,title,body);
    $.ajax({
        type:'POST',
        url:'https://fcm.googleapis.com/fcm/send',
        headers:{
            Authorization: 'key=AAAA8c_-UuU:APA91bFuSi3DFr0ZPgiKdfyxJTQyvSxCZw7oh7ltnT8My9lvFmMz1hs5MVavC2f5b1ZeFYRakktdeJ0RXQcYs8qRoaAh8Ku0rVofJdPsmlJP7pfwpQb_7s41FZoKU3GdVbKpqOa1JyZW'
        },
        contentType:'application/json',
        dataType:'json',
        data:JSON.stringify({
            "registration_ids":to,
            "notification":{
                "tittle":title,
                "body":body
            }
        }),
        success: function(response){
            alert("sent to"+response.success+"devices");
        },
        error: function(error){
            alert("Some Error Occured "+error.error);
        }
    });

    
 });
function ajaxnotify(to,title,body){
    
    alert(to+title+body);
}