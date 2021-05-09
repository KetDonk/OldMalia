function dark() {
    document.querySelectorAll(".body-light").forEach(function (e) {
        e.className = e.className.replace("body-light", "body-dark");
    });

    document.querySelectorAll(".nav-light").forEach(function (e) {
        e.className = e.className.replace("nav-light", "nav-dark");
    });

    document.querySelector(".dark-mode-toggle").innerHTML = "Light Mode";
    document.querySelector(".dark-toggle-icon").className = "fa fa-sun-o dark-toggle-icon";

    document.body.className = "dark-mode";
    
    setCookie("dark-mode", "1");
}

function light() {
    document.querySelectorAll(".body-dark").forEach(function (e) {
        e.className = e.className.replace("body-dark", "body-light");
    });

    document.querySelectorAll(".nav-dark").forEach(function (e) {
        e.className = e.className.replace("nav-light", "nav-light");
    });
    
    document.querySelector(".dark-mode-toggle").innerHTML = "Dark Mode";
    document.querySelector(".dark-toggle-icon").className = "fa fa-moon-o dark-toggle-icon";
    
    document.body.className = "light-mode";

    setCookie("dark-mode", "0");
}

function toggle_dark_mode() {
    if (document.body.className === "light-mode") {
        light()
    } else {
        dark();  
    }
}

function toggle_light() {
    toggle_dark_mode();
}

function light_start() {
    if (getCookie("dark-mode") == "0") {
        dark();
    }

    document.body.style.display = "block";
}