document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality for 'Home', 'Knowledge Centre', 'Store', and 'About' sections
    const dropdowns = document.querySelectorAll('.custom-dropdown');
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');

        btn.addEventListener('click', () => {
            content.classList.toggle('show');
        });

        window.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                content.classList.remove('show');
            }
        });
    });

    // Filter functionality (if needed to be dynamic)
    const filterHospital = document.getElementById('department-hospital');
    const filterDepartment = document.getElementById('department-department');

    filterHospital.addEventListener('change', function() {
        const selectedHospital = filterHospital.value;
        console.log('Selected Hospital:', selectedHospital);
        // Add filtering logic here
    });

    filterDepartment.addEventListener('change', function() {
        const selectedDepartment = filterDepartment.value;
        console.log('Selected Department:', selectedDepartment);
        // Add filtering logic here
    });
});