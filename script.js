document.addEventListener('DOMContentLoaded', function() {
    // Your DOM manipulation code can go here
    // For example, dynamically creating form fields and handling form submission

    // Dummy data for testing
    const dummyData = [
        {"name": "John", "age": 30, "city": "New York"},
        {"name": "Alice", "age": 22, "city": "San Francisco"},
        {"name": "Bob", "age": 25, "city": "Los Angeles"}
    ];

    const dataForm = document.getElementById('dataForm');
    const resultContainer = document.getElementById('resultContainer');

    // Function to display the results
    function displayResults(persons) {
        resultContainer.innerHTML = '';  // Clear previous results

        persons.forEach(person => {
            const personInfo = document.createElement('div');
            personInfo.innerHTML = `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
            resultContainer.appendChild(personInfo);
        });
    }

    // Assuming you have a button to trigger the data manipulation
    const manipulateButton = document.createElement('button');
    manipulateButton.textContent = 'Manipulate Data';
    manipulateButton.addEventListener('click', function() {
        // Dummy filtering and sorting (replace with actual logic)
        const personsUnder25 = dummyData.filter(person => person.age < 25);
        const sortedPersons = personsUnder25.sort((a, b) => a.city.localeCompare(b.city));

        // Display the results
        displayResults(sortedPersons);
    });

    dataForm.appendChild(manipulateButton);
});
