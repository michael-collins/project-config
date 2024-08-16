document.addEventListener("DOMContentLoaded", function() {
    fetch('project_schedule.csv')
        .then(response => response.text())
        .then(csvText => {
            const lines = csvText.trim().split('\n').map(line => line.split(','));

            const projectTitle = lines[1][2].trim();
            const specializationTag = lines[2][2].trim();
            const scheduleHeader = lines[5].slice(1);
            const productionTitles = lines[6].slice(1);
            const productionOverview = lines[7].slice(1);
            const deliverables = lines[8].slice(1);
            const lectures = lines[14].slice(1);
            const exercises = lines[18].slice(1);

            document.getElementById('project-title').textContent = `Project: ${projectTitle}`;
            document.getElementById('specialization-tag').textContent = `Specialization Tag: ${specializationTag}`;

            const projectScheduleContainer = document.getElementById('project-schedule');

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
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
});
