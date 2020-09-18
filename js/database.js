var db=firebase.database().ref("users");
    db.once("value").then(function(snapshot){
        $("#users").empty();
        if(snapshot.exists()){
            snapshot.forEach(function(userSnap){
                var html="<option value='";
                html+=userSnap.val().token;
                html+="'>";
                html+=userSnap.val().email;
                html+="</option>";

                $("#users").append(html);
            });
        }
    });
    