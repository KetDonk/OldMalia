function get_eco3(cb) {
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

function render_eco3() {
    get_eco3(function (eco3) {
        var tablebody = document.querySelector(".main-table-eco3");

        for (let i in eco3) {
            var spawner = eco3[i];

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
            
            var spawnRate = document.createElement("td");
            spawnRate.className = "main-table-eco-cell";
            spawnRate.innerHTML = spawner.spawnRate.join(" & ");

            row.appendChild(name);
            row.appendChild(cost);
            row.appendChild(sellprice);
            row.appendChild(spawnRate);
            tablebody.appendChild(row);
        }
    });
}