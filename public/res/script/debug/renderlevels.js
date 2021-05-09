function get_levels(cb) {
    fetch("/api/levels.json").then(function (response) {
        response.json().then(function (json) {
            cb(json.levels);
        });
    });
}

function format_price(x) {
    return "$" + (x.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
}

function render_levels() {
    get_levels(function (levels) {
        const levelslist = document.querySelector(".main-levels-list-flex");

        for (let i in levels) {
            var level = levels[i];

            var item = document.createElement("div");
            item.className = "main-levels-list-item";

            var iconcont = document.createElement("div");
            iconcont.className = "main-levels-item-section main-levels-item-icon";
            
            var img = document.createElement("img");
            img.src = "/res/image/" + level.icon;
            img.width = 128;
            img.height = 128;
            img.className = "main-levels-item-image";

            var description = document.createElement("div");
            description.className = "main-levels-item-section main-levels-item-description";
            
            var itemname = document.createElement("span");
            itemname.className = "main-levels-item-name";
            itemname.innerHTML = level.name;

            var cost = document.createElement("span");
            cost.className = "main-levels-item-cost";
            cost.innerHTML = format_price(level.cost);

            description.appendChild(itemname);
            description.appendChild(document.createElement("br"));
            description.appendChild(cost);

            iconcont.appendChild(img);

            item.appendChild(iconcont);
            item.appendChild(description);

            levelslist.appendChild(item);
        }
    });
}