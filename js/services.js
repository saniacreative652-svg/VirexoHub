// =========================
// SERVICES SEARCH & FILTER
// =========================

const searchInput = document.getElementById("serviceSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const serviceCards = document.querySelectorAll(".market-service-card");
const noResults = document.getElementById("noResults");


// Current selected category
let selectedCategory = "all";


// =========================
// FILTER SERVICES
// =========================

function filterServices() {

    const searchText = searchInput.value.toLowerCase().trim();

    let visibleCards = 0;


    serviceCards.forEach(function (card) {

        const category = card.dataset.category;
        const cardText = card.textContent.toLowerCase();


        const categoryMatch =
            selectedCategory === "all" ||
            category === selectedCategory;


        const searchMatch =
            cardText.includes(searchText);


        if (categoryMatch && searchMatch) {

            card.style.display = "block";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });


    // Show / hide no results message

    if (visibleCards === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


// =========================
// CATEGORY BUTTONS
// =========================

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active from all buttons

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });


        // Add active to clicked button

        button.classList.add("active");


        // Get selected category

        selectedCategory = button.dataset.category;


        // Apply filter

        filterServices();

    });

});


// =========================
// SEARCH
// =========================

searchInput.addEventListener("input", function () {

    filterServices();

});