ajaxGet("http://samples.openweathermap.org/pollution/v1/co/0.0,10.0/2016-12-25T01:04:08Z.json?appid=b1b15e88fa797225412429c1c50c122a1", function (reponse) {
    
    var air = JSON.parse(reponse);
    var carbon = air.data.pressure;

    var carbonElt = document.createElement("div");
    carbonElt.textContent = "L'indice du Monoxyde de Carbone est" + carbon;
    var airElt = document.getElementById("air");
    airElt.appendChild(carbonElt);

    });
