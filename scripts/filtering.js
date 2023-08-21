document.addEventListener('DOMContentLoaded', () => {
    const locationFilter = document.getElementById('locationFilter');
    const typeFilter = document.getElementById('typeFilter');

    locationFilter.addEventListener('change', () => {
        filterTrips();
    });

    typeFilter.addEventListener('change', () => {
        filterTrips();
    });

    function filterTrips() {
        const selectedLocation = locationFilter.value;
        const selectedType = typeFilter.value;

        const tripCards = document.querySelectorAll('.trip-card');

        tripCards.forEach(card => {
            const location = card.getAttribute('data-location');
            const type = card.getAttribute('data-type');

            const showLocation = selectedLocation === 'all' || selectedLocation === location;
            const showType = selectedType === 'all' || selectedType === type;

            if (showLocation && showType) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});