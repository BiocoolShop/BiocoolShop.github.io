
function sendMail(params) {
    var tempParams ={
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    }

    emailjs.send('', '', tempParams )
    .then(function(res){
        console.log("succes", res.status);
        alert("Commande envoyer ! ")
        
    })
        var request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/846050321314611251/xqIcud8LoABNsTMR7BhiGAZpzPQiqFXd6pUmDBVXaAOKOPLFMgHmewLmkcSrKxqYTEPc");

        request.setRequestHeader('Content-type', 'application/json');
  
        var params = {
            
                "embeds": [{
                  "title": ` Nouvelle Demande de vente sur le Darkcool!`,
                  "description": `${toName.value} pour ${fromName.value}$/unité`,
                  "color": 5614830,
                  "author": {
                    "name": "Darkcool ",
                    "url": "https://biocoolshop.github.io/",
                  },
                  "fields": [
                    {
                    "name":`Discord du client :`,
                    "value": `${msg.value}`,
                    "inline": true
                    }],
                    "footer": {
                        "text": "Dev by Bebert#6666"
                        },

                    


                }],
                
        }

        alert("Demande envoyer une fois la demande examiné vous receverez un mail anonyme !")

        
  
        request.send(JSON.stringify(params));;
      }

