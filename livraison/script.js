
function sendMail(params) {
    var tempParams ={
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    }

    emailjs.send('service_j56r6f6', 'template_d2ztakw', tempParams )
    .then(function(res){
        console.log("succes", res.status);
        alert("Nos Service sont actuellement indisponible ( attente de validation du dossier sur le forum CTG )  ")
        
    })
        var request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/845722512976642068/2WbtqJd7XlTOmr9I29ROzr0hGe7DQgEJzuMssBl3dFlCYunFAQKInqbZS8yRYm1znhAm");

        request.setRequestHeader('Content-type', 'application/json');
  
        var params = {
            
                "embeds": [{
                  "title": ` ${fromName.value} - Demande une livraison !`,
                  "description": `Numéros de téléphone du client : ${toName.value}`,
                  "color": 5614830,
                  "author": {
                    "name": "livraison ! ",
                    "url": "https://biocoolshop.github.io/",
                  },
                  "fields": [
                    {
                    "name": "Commande souhaiter : ",
                    "value": `${msg.value}`,
                    "inline": true
                    }],
                    "footer": {
                        "text": "Dev by Bebert#6666"
                        },

                        


                }],
        }
        
      var params= {        
          content: "<@&845720712349745183>"
      }
  
        request.send(JSON.stringify(params));;
      }

