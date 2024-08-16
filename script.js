document.addEventListener("DOMContentLoaded", function() {
    fetch('project_schedule.csv')
        .then(response => response.text())
        .then(csvText => {
            // Split the CSV into lines and use PapaParse to handle the data
            Papa.parse(csvText, {
                complete: function(results) {
                    const data = results.data;

                    const projectTitle = data[1][2].trim();
                    const specializationTag = data[2][2].trim();
                    const scheduleHeader = data[5].slice(1);
                    const productionTitles = data[6].slice(1);
                    const productionOverview = data[7].slice(1);
                    const deliverables = data[8].slice(1);
                    const lectures = data[14].slice(1);
                    const exercises = data[18].slice(1);

                    // Set the project title and specialization tag
                    document.getElementById('project-title').textContent = `Project: ${projectTitle}`;
                    document.getElementById('specialization-tag').textContent = `Specialization Tag: ${specializationTag}`;

                    // Select the container where the schedule will be rendered
                    const projectScheduleContainer = document.getElementById('project-schedule');

                    // Loop through each week to render the schedule
                    for (let i = 0; i < scheduleHeader.length; i++) {
                        const weekCard = document.createElement('div');
                        weekCard.className = "bg-white shadow-md rounded p-6 mb-4";

                        const weekTitle = document.createElement('h2');
                        weekTitle.className = "text-xl font-bold mb-2";
                        weekTitle.textContent = `${scheduleHeader[i]}: ${productionTitles[i]}`;
                        weekCard.appendChild(weekTitle);

                        const overview = document.createElement('p');
                        overview.className = "text-gray-700 mb-4";
                        overview.textContent = productionOverview[i];
                        weekCard.appendChild(overview);

                        const deliverablesList = document.createElement('ul');
                        deliverablesList.className = "list-disc pl-5 mb-4";

                        if (deliverables[i]) {
                            const deliverableItem = document.createElement('li');
                            deliverableItem.textContent = `Deliverables: ${deliverables[i]}`;
                            deliverablesList.appendChild(deliverableItem);
                        }

                        if (lectures[i]) {
                            const lectureItem = document.createElement('li');
                            lectureItem.textContent = `Lecture/Quiz: ${lectures[i]}`;
                            deliverablesList.appendChild(lectureItem);
                        }

                        if (exercises[i]) {
                            const exerciseItem = document.createElement('li');
                            exerciseItem.textContent = `Mastery Exercises: ${exercises[i]}`;
                            deliverablesList.appendChild(exerciseItem);
                        }

                        weekCard.appendChild(deliverablesList);

                        projectScheduleContainer.appendChild(weekCard);
                    }
                },
                header: false,
                skipEmptyLines: true
            });
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
});
