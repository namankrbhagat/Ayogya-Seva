function checkSymptoms() {
    const symptomsInput = document.getElementById('symptomsInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
  
    // Common symptoms and corresponding possible conditions with descriptions
    const symptomConditions = {
        "fever": [
            { 
                name: "Flu", 
                description: "Flu, or influenza, is a contagious respiratory illness caused by influenza viruses. Symptoms include fever, cough, sore throat, and body aches." 
            },
            { 
                name: "Typhoid", 
                description: "Typhoid fever is caused by Salmonella Typhi bacteria. Symptoms include high fever, weakness, stomach pain, headache, and loss of appetite." 
            },
            { 
                name: "Malaria", 
                description: "Malaria is a disease caused by a parasite transmitted through mosquito bites. Symptoms include fever, chills, and flu-like illness." 
            }
        ],
        "cough": [
            { 
                name: "Common Cold", 
                description: "The common cold is a viral infection of your nose and throat. Symptoms include a runny nose, cough, congestion, and sneezing." 
            },
            { 
                name: "COVID-19", 
                description: "COVID-19 is a respiratory illness caused by the SARS-CoV-2 virus. Symptoms range from mild to severe and can include cough, fever, and shortness of breath." 
            },
            { 
                name: "Bronchitis", 
                description: "Bronchitis is inflammation of the lining of your bronchial tubes. It often causes a persistent cough and mucus production." 
            }
        ],
        "headache": [
            { 
                name: "Migraine", 
                description: "A migraine is a type of headache that causes intense, throbbing pain, often accompanied by nausea, vomiting, and sensitivity to light and sound." 
            },
            { 
                name: "Tension Headache", 
                description: "Tension headaches are the most common type of headache and are characterized by a dull, aching head pain, tightness or pressure across the forehead or on the sides and back of the head." 
            },
            { 
                name: "Cluster Headache", 
                description: "Cluster headaches are severe headaches that occur in cyclical patterns or clusters, characterized by intense pain on one side of the head." 
            }
        ]
    };
  
    // Process user input
    const symptomsArray = symptomsInput.split(',').map(symptom => symptom.trim());
    const possibleConditions = [];
  
    // Match symptoms with possible conditions and their descriptions
    symptomsArray.forEach(symptom => {
        if (symptomConditions[symptom]) {
            symptomConditions[symptom].forEach(condition => possibleConditions.push(condition));
        }
    });
  
    // Display results
    if (possibleConditions.length > 0) {
        resultsDiv.innerHTML = possibleConditions.map(condition => `
            <div class="disease-section">
                <h3>${condition.name}</h3>
                <p>${condition.description}</p>
            </div>
        `).join('');
    } else {
        resultsDiv.innerHTML = "<p>No matching conditions found. Please consult a doctor for a proper diagnosis.</p>";
    }
  }