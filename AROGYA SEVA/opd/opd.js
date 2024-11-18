// document.addEventListener("DOMContentLoaded", function () {
//     var popup = document.getElementById("popup");
//     var container = document.getElementById("booking-container");
//     var form = document.getElementById("appointment-form");
//     var formInputs = document.querySelectorAll("#appointment-form input");
  
    
//     function pauseAnimation() {
//       container.classList.add("paused");
//       popup.classList.add("paused");
//     }
  
    
//     function resumeAnimation() {
//       container.classList.remove("paused");
//       popup.classList.remove("paused");
//     }
  
//     // Event listener for mouse entering the container
//     container.addEventListener("mouseenter", function () {
//       pauseAnimation();
//     });
  
//     container.addEventListener("mouseleave", function () {
//       resumeAnimation();
//     });
  
//     form.addEventListener("submit", function (event) {
//       event.preventDefault();
//       pauseAnimation();
//       setTimeout(function () {
        
//         var messageDiv = document.getElementById("message");
//         messageDiv.innerHTML = "Done successfully!";
//         messageDiv.style.color = "green";
        
//         form.reset();
//         resumeAnimation();
//       }, 1000); 
//     });
   
//     formInputs.forEach(function (input) {
//       input.addEventListener("focus", pauseAnimation);
//       input.addEventListener("blur", resumeAnimation);
//     });
//   });




document.getElementById('specialist').addEventListener('change', function () {
  const specialist = this.value;
  const doctorSelect = document.getElementById('doctor');

  // Clear previous options
  doctorSelect.innerHTML = '';

  // Doctor data based on specialist
  const doctors = {
      cardiologist: [
          { name: 'Dr. Rajesh Kumar (St. Mary Hospital) 2Km (383733)', value: 'rajesh-kumar' },
          { name: 'Dr. Ayesha Singh (City Hospital) 5Km (733583)', value: 'ayesha-singh' }
      ],
      neurologist: [
          { name: 'Dr. Amit Sharma (Global Health Clinic) 3Km (383733)', value: 'amit-sharma' },
          { name: 'Dr. Suman Das (NeuroCare Clinic) 7Km (376363)', value: 'suman-das' }
      ],
      psychiatrist: [
          { name: 'Dr. Priya Mehta (Wellness Center) 4Km (364844)', value: 'priya-mehta' },
          { name: 'Dr. Vikram Patel (MindCare Hospital) 6Km (986373)', value: 'vikram-patel' }
      ]
  };

  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.text = 'Select a Doctor';
  defaultOption.value = '';
  doctorSelect.appendChild(defaultOption);

  // Add new options based on the selected specialist
  if (specialist && doctors[specialist]) {
      doctors[specialist].forEach(doctor => {
          const option = document.createElement('option');
          option.text = doctor.name;
          option.value = doctor.value;
          doctorSelect.appendChild(option);
      });
  }
});