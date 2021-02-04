const ROUTES = {
    home: "/",
    tour:  "/tour/",
    likesDetail: { path: "/likes/:id", to: "/likes/" },
    tourDetail: { path:"/project/:id", to:"/project/"}
}

const LABELS = [
    'Animation',
    'Music','Film',
    'Interior','Photography',
    'Virtual reality',
    'Storytelling'
];

export {ROUTES,LABELS };