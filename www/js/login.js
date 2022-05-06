// This is a JavaScript file

var emailArray=[];
        var passwordArray=[];
function register(){
            event.preventDefault();

            var email = document.getElementById("TB_mail").value;
            var password = document.getElementById("TB_pass").value;
            var passwordRetype = document.getElementById("TB_conpass").value;

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);
               
                // alert(email + "  Thanks for registration. \nTry to login Now");
                ons.notification.alert(email + 'Thanks for registration. \nTry to login Now!');
                 
                document.getElementById("TB_mail").value ="";
                document.getElementById("TB_pass").value="";
                document.getElementById("TB_conpass").value="";
            }
            else{
                // alert(email + " is already register.");
                ons.notification.alert(email + ' is already register!')
                return ;
            }
        }

//     var login = function() {  
//     var username1 = document.getElementById('username').value;  
//     var password1 = document.getElementById('password').value;  
//     if (email === username1 && password === password1) {  
//         ons.notification.alert('Login Success!');  
//     } 
//     else if(email === username1 && password != password1)
//     {  
//         ons.notification.alert('Incorrect password!');  
//     } 
//     else
//     {
//         ons.notification.alert('Incorrect username') ;
//     }
// };


 function login(){
            event.preventDefault();

            var email = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1)
            {
                if (email == "")
                {
                    // alert("Email required.");
                    ons.notification.alert('Email required!');
                    return ;
                }
                // alert("Email does not exist.");
                 ons.notification.alert('Email does not exist!');
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    // alert("Password required.");
                    ons.notification.alert('Password required!');
                    return ;
                }
                // alert("Password does not match.");
                ons.notification.alert('Password does not match!');
                return ;
            }
            else {
                // alert(email + " yor are login Now \n welcome to our website.");
                ons.notification.alert(email +' login sucess!');
                document.getElementById("username").value ="";
                document.getElementById("password").value="";
                return ;
            }

        }