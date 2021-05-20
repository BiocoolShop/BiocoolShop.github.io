function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="dark"&& password=="biocbio")
{
    alert("login succesfully");
    return window.location.href="sombre.html";   
    

}
else
{
    alert("login failed");
}


}

Parse.User.logIn(username, password, {
    success: function(user) {
window.location.href="sombre.html";          
    }});
