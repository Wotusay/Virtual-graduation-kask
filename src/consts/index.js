const ROUTES = {
    home: "/",
    tour:  { path: "/tour/:id", to: "/tour/" },
    likes: { path: "/likes/:id", to: "/likes/" },
    tourInput: "/tour/input",
}

const LABELS = [
    'Animation',
    'Muziek','Film',
    'Interieur','Fotografie',
    'Virtual reality',
    'Mode','Storytelling'
];

export {ROUTES,LABELS };