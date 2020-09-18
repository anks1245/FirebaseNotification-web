
var {google}=require('googleapis');
var Messaging_Scope="https://fcm.googleapis.com/auth/firebase.messaging";
var SCOPES=[Messaging_Scope];

var http=require('http');
function getAccessToken(){
    return new Promise(function(resolve,reject){
        var key=require('./service-account.json');
        var jwtClient=new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function(err,tokens){
            if(err){
                reject(err);
                return;
            }
            resolve(tokens.access_token);
        });
    });
}
getAccessToken().then(function(access_token){
    console.log(access_token);
});

// $("#btn-send").click(function(){
//     //alert("working");
//     var to=$("#users").val();
//     var title=$("#title").val();
//     var body=$("#message").val();
//     //ajaxnotify(to,title,body);
//     $.ajax({
//         type:'POST',
//         url:'https://fcm.googleapis.com/fcm/send',
//         headers:{
//             Authorization: 'key=BLTb7eNCZDjCTpyvmS8pYEFTAzaCEk18GSxA96ADjig4ACfnOcXQutZY5I5S9yKPAQT5n0Cn3UpCep1wmlTxzPg'
//         },
//         contentType:'application/json',
//         dataType:'json',
//         data:JSON.stringify({
//             "registration_ids":to,
//             "notification":{
//                 "tittle":title,
//                 "body":body
//             }
//         }),
//         success: function(response){
//             alert("sent to"+response.success+"devices");
//         },
//         error: function(error){
//             alert("Some Error Occured"+error.error);
//         }
//     });

    
// });
// function ajaxnotify(to,title,body){
    
//     alert(to+title+body);
//}