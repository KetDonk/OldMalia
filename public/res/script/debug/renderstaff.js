function get_staff(cb) {
    fetch("/api/staff.json").then(function (response) {
        response.json().then(function (json) {
            cb(json.staff);
        });
    });
}

function render_staff() {
    get_staff(function (staff) {
        const stafflist = document.querySelector(".main-staff-list-flex");

        for (let i in staff) {
            var level = staff[i];

            var item = document.createElement("div");
            item.className = "main-staff-list-item";

            var iconcont = document.createElement("div");
            iconcont.className = "main-staff-item-section main-staff-item-icon";
            
            var img = document.createElement("img");
            img.src = "/res/image/" + level.icon;
            img.width = 128;
            img.height = 128;
            img.className = "main-staff-item-image";

            var description = document.createElement("div");
            description.className = "main-staff-item-section main-staff-item-description";
            
            var itemname = document.createElement("span");
            itemname.className = "main-staff-item-name";
            itemname.innerHTML = level.name;

            var cost = document.createElement("span");
            cost.className = "main-staff-item-cost main-staff-item-type-"+level.type;
            cost.innerHTML = level.role;

            description.appendChild(itemname);
            description.appendChild(document.createElement("br"));
            description.appendChild(cost);

            iconcont.appendChild(img);

            item.appendChild(iconcont);
            item.appendChild(description);

            stafflist.appendChild(item);
        }
    });
}