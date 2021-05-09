var rules = [];

function load_rules() {
    fetch("/api/rules.json").then(function (response) {
        response.json().then(function (json) {
            rules = json.rules;
        });
    });
}

function select_rule() {

}