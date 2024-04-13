const travelEntries = [
    { date: '2016-07-15', location: 'Vietnam', description: 'Visited my family since I do not get to see them often.'},
    { date: '2021-06-21', location: 'Paris', description: 'Visited the Eiffel tower to see how it looks in person.' },
    { date: '2022-07-13', location: 'Tokyo', description: 'Wanted to visit Japan becuase it is one of my bucket list.' },
];

function createTimeline() {
    travelEntries.sort((a, b) => new Date(a.date) - new Date(b.date));

    const timeline = document.getElementById('timeline');

    timeline.innerHTML = '';

    travelEntries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'timeline-entry';
        entryElement.innerHTML = `
            <h1>${entry.location} - ${entry.date}</h1>
            <p>${entry.description}</p>
        `;
        timeline.appendChild(entryElement);
    });
}

document.addEventListener('DOMContentLoaded', createTimeline);
