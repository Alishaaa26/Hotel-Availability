function checkAvailability() {
    // In a real scenario, you would perform an AJAX request to a server to check availability
    // For simplicity, let's assume some predefined data for available rooms
    const availableRooms = ["Room 101", "Room 202", "Room 303", "Suite 404"];

    // Display the results section
    const resultsSection = document.getElementById("results-section");
    resultsSection.style.display = "block";

    // Clear previous results
    const roomList = document.getElementById("room-list");
    roomList.innerHTML = "";

    // Display available rooms
    availableRooms.forEach(room => {
        const listItem = document.createElement("li");
        listItem.textContent = room;
        roomList.appendChild(listItem);
    });
}
