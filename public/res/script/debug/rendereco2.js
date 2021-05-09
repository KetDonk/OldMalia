function get_eco2(cb) {
    fetch("/api/eco.json").then(function (response) {
        response.json().then(function (json) {
            cb({
                ...json.farming
            })
        });
    });
}

function format_price(x) {
    return "$" + (x.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
}

function render_eco2() {
    get_eco2(function (eco2) {
        var tablebody = document.querySelector(".main-table-eco2");

        for (let i in eco2) {
            var spawner = eco2[i];

            var row = document.createElement("tr");
            row.className = "main-table-eco-row";

            var name = document.createElement("td");
            name.className = "main-table-eco-cell";
            name.innerHTML = spawner.name;
        
            var cost = document.createElement("td");
            cost.className = "main-table-eco-cell";
            cost.innerHTML = format_price(spawner.cost);
            
            var sellprice = document.createElement("td");
            sellprice.className = "main-table-eco-cell";
            sellprice.innerHTML = format_price(spawner.sellprice);

            row.appendChild(name);
            row.appendChild(cost);
            row.appendChild(sellprice);
            
            tablebody.appendChild(row);

        }
    });
}