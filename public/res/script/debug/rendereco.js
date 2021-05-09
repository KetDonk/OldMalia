function get_eco(cb) {
    fetch("/api/eco.json").then(function (response) {
        response.json().then(function (json) {
            cb({
                ...json.spawners
            })
        });
    });
}

function format_price(x) {
    return "$" + (x.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
}

function render_eco() {
    get_eco(function (eco) {
        var tablebody = document.querySelector(".main-table-eco");

        for (let i in eco) {
            var spawner = eco[i];

            var row = document.createElement("tr");
            row.classNmae = "main-table-eco-row";

            var name = document.createElement("td");
            name.className = "main-table-eco-cell";
            name.innerHTML = spawner.name;
        
            var cost = document.createElement("td");
            cost.className = "main-table-eco-cell";
            cost.innerHTML = format_price(spawner.cost);
            
            var drops = document.createElement("td");
            drops.className = "main-table-eco-cell";
            drops.innerHTML = spawner.drops.join(" & ");
            
            var sellprice = document.createElement("td");
            sellprice.className = "main-table-eco-cell";
            sellprice.innerHTML = format_price(spawner.sellprice);

            var secondary = document.createElement("td");
            secondary.className = "main-table-eco-cell";
            secondary.innerHTML = spawner.secondary;

            row.appendChild(name);
            row.appendChild(cost);
            row.appendChild(drops);
            row.appendChild(sellprice);
            row.appendChild(secondary);
            
            tablebody.appendChild(row);

        }
    });
}