//Register user
function RegisterUser() {
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
   alert('User Register successfully');
   window.location.href='https://deyaan.github.io/EV-MAIN/'
   var id=firebase.auth().currentUser.uid;
   
   firebase.database().ref('Users/'+id).set({
    Name:name,
    Email:email,
    Password:password,
   });

  }).catch(function(error){
    var errorcode=error.code;
    var errormsg=error.message;
    alert(errormsg);
  });
}
