function validate()
{
var password=document.getElementById("password").value;
if(password=="user")
{
    alert("login succesfully");
    return false;
}
else
{
    alert("login failed");
}


}
