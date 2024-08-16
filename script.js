document.addEventListener("DOMContentLoaded", function() {
    const csvData = `
,,Project:,,,,,,
,,Building a room interior,,,,,,
,,Specialization tag:,,,,,,
,,CGI Foundations,,,,,,
,,Project Schedule,,,,,,
,,Week 1,Week 2,Week 3,Week 4,Week 5,Week 6,Week 7
,Production title,Concept and Reference Gathering,Room Layout and Blocking,Detailed Modeling,UV Mapping and Texturing,Lighting and Environment Setup,Final Rendering and Scene Polishing,Discussion and Critique
,Production overview,"1. Choose the type of room and gather reference materials.
2. Create initial sketches or mood boards to visualize the concept.","- Block out the basic layout of the room, including walls, windows, doors, and major furniture pieces.
- Focus on overall proportions and spatial relationships.","- Add detailed architectural features such as windows, doors, and fixtures.
- Model interior and exterior elements as needed.","- Unwrap the UVs for all architectural elements.
- Create and apply realistic textures to surfaces.","- Set up lighting to simulate natural and artificial light sources.
- Add environmental elements such as landscaping and background scenery.","- Render final images or animations of the architectural visualization.
- Optimize the scene for performance and quality.","- Present the final arch viz project to the class.
- Participate in a critique session to receive feedback and suggestions."
,Project Deliverables,Project brief,Concept art/design,Production Report,Production Report,Production Report,Production Report,Discussion
,,Research,Production Report,,,,,critique
,,Production Report,,,,,,
,,Reference sheets,,,,,,
,,,,,,,,
,,,,,,,,
,,,,,,,,
,,,,,,,,
,,,,,,,,
,Lecture/quiz,CGI History,3D tools and creative approaches,Texturing,,Rendering,,
,,Polygonal modeling,,UV unwrapping,,Lighting,,
,,,,,,Camera,,
,Mastery exercises,Object modeling approaches,UV projection tactics,,,,,
,,Using modeling references,Texture nodes and techniques,,,,,`;

    const lines = csvData.trim().split('\n');
    const projectTitle = lines[2].split(',')[3].trim();
    const specializationTag = lines[4].split(',')[3].trim();
    const scheduleHeader = lines[7].split(',').slice(2);
    const productionTitles = lines[8].split(',').slice(2);
    const productionOverview = lines[9].split(',').slice(2);
    const deliverables = lines[10].split(',').slice(2);
    const lectures = lines[18].split(',').slice(2);
    const exercises = lines[22].split(',').slice(2);

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
});
