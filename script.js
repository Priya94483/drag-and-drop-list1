let list = document.getElementById("list");
let items = list.getElementsByTagName("li");
for (let item of items) {

    item.addEventListener("dragstart", function() {
        draggedItem = item;
    });
    item.addEventListener("dragover", function(e) {
        e.preventDefault();
    });
    item.addEventListener("drop", function() {
        if (draggedItem != item) {
            list.insertBefore(draggedItem, item);
        }
    });
}