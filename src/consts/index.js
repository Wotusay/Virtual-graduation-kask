const ROUTES = {
    home: "/",
    tour:  { path: "/tour/:id", to: "/tour/" },
    likes: { path: "/likes/:id", to: "/likes/" },
    tourInput: "/tour/input",
}

const LABELS = [
    'Animation',
    'Music','Film',
    'Interieur','Fotografie',
    'Virtual reality',
    'Storytelling'
];

export {ROUTES,LABELS };