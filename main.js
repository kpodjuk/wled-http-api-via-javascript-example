document.getElementById('sendRequest').addEventListener("click", sendRequest)
ws://[WLED-IP]/ws


function sendRequest() {

    // Sending and receiving data in JSON format using POST method
    //
    var xhr = new XMLHttpRequest();
    var url = "http://192.168.1.32/json/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            // console.log(json.email + ", " + json.password);
            console.log(json)
        }
    };

    // {"seg": [{"col":[[0,255,200]]}]}



    var data = JSON.stringify({
        "seg": { "col": [[255, 255, 255], [255, 255, 255], [255, 255, 255]] },
        "bri": 255
    });
    xhr.send(data);

}


function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}