function validate()
{
var password=document.getElementById("password").value;
if(password=="biopass" || password=="biocbio" )
{
    alert("Mot De passe correct ! ");
    return true;
}else{
    do {    alert("Mauvais mot de passe refresh la page !"); } while (true);
}


}