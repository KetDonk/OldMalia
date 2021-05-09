const BASE_URL = "https://mcapi.us/server/status?ip=135.125.16.191&port=25570";

function get_members() {
    var e = document.querySelector(".main-center-ip-num");
    
    fetch(BASE_URL).
        then(function (response) {
            var txt = response.json().online ? response.json().players.now : 0;
            
            e.innerHTML = txt
        });
}