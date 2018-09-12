const campuses = [
    {
        id: 0,
        name: 'Bixby High School'
    },
    {
        id: 1,
        name: 'Bixby Middle School'
    },
    {
        id: 2,
        name: 'Bixby 9th Grade Center'
    },
    {
        id: 3,
        name: 'Bixby Central Elementary'
    },
    {
        id: 4,
        name: 'Bixby Central Intermediate'
    },
    {
        id: 5,
        name: 'Bixby North Elementary'
    },
    {
        id: 6,
        name: 'Bixby North Intermediate'
    },
    {
        id: 7,
        name: 'Bixby Northeast Elementary/Intermediate'
    }
];

const requestTypes = [
    {
        id: 0,
        name: "New Service"
    },
    {
        id: 1,
        name: "Complete Transfer IEP PT Services"
    },
    {
        id: 2,
        name: "Observe Student - gross motor concerns"
    },
    {
        id: 3,
        name: "Evaluate Student - parent permission already signed"
    }
];

const statusTypes = [
    {
        id: 1,
        name: "New Request"
    },
    {
        id: 2,
        name: "In Progress"
    },
    {
        id: 3,
        name: "Completed"
    }
];

module.exports = {
    campuses: campuses,
    requestTypes: requestTypes,
    statusTypes: statusTypes
}