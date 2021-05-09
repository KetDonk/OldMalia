function get_ranks(cb) {
    fetch("/api/ranks.json").then(function (response) {
        response.json().then(function (json) {
            cb(json.ranks);
        });
    });
}

function format_price(x) {
    return "$" + (x.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
}

function render_ranks() {
    get_ranks(function (ranks) {
        const rankslist = document.querySelector(".main-ranks-list-flex");

        for (let i in ranks) {
            var level = ranks[i];

            var item = document.createElement("div");
            item.className = "main-ranks-list-item";

            var iconcont = document.createElement("div");
            iconcont.className = "main-ranks-item-section main-ranks-item-icon";
            
            var img = document.createElement("img");
            img.src = "/res/image/" + level.icon;
            img.width = 128;
            img.height = 128;
            img.className = "main-ranks-item-image";

            var description = document.createElement("div");
            description.className = "main-ranks-item-section main-ranks-item-description";
            
            var itemname = document.createElement("span");
            itemname.className = "main-ranks-item-name";
            itemname.innerHTML = level.name;

            var cost = document.createElement("span");
            cost.className = "main-ranks-item-cost";
            cost.innerHTML = format_price(level.cost);

            description.appendChild(itemname);
            description.appendChild(document.createElement("br"));
            description.appendChild(cost);

            iconcont.appendChild(img);

            item.appendChild(iconcont);
            item.appendChild(description);

            rankslist.appendChild(item);
        }
    });
}