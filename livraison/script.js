

function sendMail(params) {
    var tempParams ={
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    }

    emailjs.send('service_j56r6f6', 'template_d2ztakw', tempParams )
    .then(function(res){
        console.log("succes", res.status);
        alert("Impossible d'envoyer une demande ( Boutique par encore ouvert )")
        
    })
}