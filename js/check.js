(function(){
  // Your web app's Firebase configuration
       var firebaseConfig = {
       apiKey: "AIzaSyD0-pPL3lwmPfgMIrh9_waN_4lk9ghrNys",
       authDomain: "androidnotification-c2b5e.firebaseapp.com",
       databaseURL: "https://androidnotification-c2b5e.firebaseio.com",
       projectId: "androidnotification-c2b5e",
       storageBucket: "androidnotification-c2b5e.appspot.com",
       messagingSenderId: "269768846990",
       appId: "1:1038576669413:android:02257ed5fcb68d92557a0c"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   firebase.auth.Auth.Persistence.LOCAL;

$("#signinbtn").click(function(){
    var email=$("#InputEmail").val();
    var password=$("#InputPassword").val();
    //alert("huraay");
    SignIn(email,password);
});
$("#signupbtn").click(function(){
    var email=$("#InputEmail").val();
    var password=$("#InputPassword").val();
    //alert("huraay");
    SignUp(email,password);
});
$("#signoutbtn").click(function(){
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
      window.location.href="index.html";
    }).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
    // An error happened.
    });
});
// const InputEmail=document.getElementById('InputEmail');
// const InputPassword=document.getElementById('InputPassword');
// const Signinbtn=document.getElementById('signinbtn');
// const Signupbtn=document.getElementById('signupbtn');

// Signinbtn.addEventListener('click',e=>{
//  const email=InputEmail.value;
//  const password=InputPassword.value;
//  SignIn(email,password);
//
// });

// Signupbtn.addEventListener('click',e=>{
//   const email=InputEmail.value;
//   const password=InputPassword.value;
//   SignUp(email,password);
// });

function SignIn(email,password){
 var result=firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
   //alert(email+password);
   //alert(result);
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // ...
   console.log(errorCode);
   console.log(errorMessage);
  if(!result){
    alert("Enter Correct Information");
  }
 });
}
function SignUp(email,password){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode);
  console.log(errorMessage);
});
}
}());
