document.addEventListener("DOMContentLoaded", function() {
    const sheetID = 'YOUR_SHEET_ID'; // Replace with your Google Sheets ID
    const apiKey = 'YOUR_API_KEY'; // Replace with your API Key
    const projectRange = 'Sheet1!A2:A10'; // Adjust the range to match your data
    const specializationRange = 'Sheet1!B2:B10'; // Adjust the range to match your data

    const projectUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${projectRange}?key=${apiKey}`;
    const specializationUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${specializationRange}?key=${apiKey}`;

    // Fetch project data
    axios.get(projectUrl)
        .then(response => {
            const projectData = response.data.values;
            const projectDropdown = document.getElementById('project');
            projectData.forEach(row => {
                const option = document.createElement('option');
                option.value = row[0];
                option.textContent = row[0];
                projectDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching project data:', error));

    // Fetch specialization data
    axios.get(specializationUrl)
        .then(response => {
            const specializationData = response.data.values;
            const specializationDropdown = document.getElementById('specialization');
            specializationData.forEach(row => {
                const option = document.createElement('option');
                option.value = row[0];
                option.textContent = row[0];
                specializationDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching specialization data:', error));

    // Repeat similar blocks for other dropdowns, like for weeks and deliverables
});
