// document.getElementById('sendRequest').addEventListener("click", sendRequest)
document.getElementById('solidColor').addEventListener("input", setSolidColor)
// document.getElementById('niceColor').addEventListener("input", setNiceColor)
document.getElementById('brightness').addEventListener("input", setBrightness)
function sendRequest(request) {

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
            console.log(json) // answer here
        }
    };
    // {"seg": [{"col":[[0,255,200]]}]
    var data = JSON.stringify(request);

    xhr.send(data);

}

function setSolidColor() {

    var colorString = document.getElementById('solidColor').value;

    // console.log(colorString);

    colorArr = calculateRgbFromString(colorString);
    var request = {
        "seg": [
            { "col": [[colorArr[0], colorArr[1], colorArr[2]]] }
        ]
    }
    // console.log(colorArr);
    sendRequest(request);
}

function calculateRgbFromString(string) {

    r = string.slice(1, 3);
    r = parseInt(r, 16);
    g = string.slice(3, 5);
    g = parseInt(g, 16);
    b = string.slice(5, 7);
    b = parseInt(b, 16);

    return [r, g, b]
}

function setNiceColor() {

}


function setBrightness() {
    var value = document.getElementById('brightness').value;   
    // console.log(value)
    var message = {
        "bri" : value
    }

sendRequest(message);


}