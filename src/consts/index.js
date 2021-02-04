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

const MEDIAQUERIES = {
    mobile: 320,
    tablet: 768,
    labtop: 1440,
    desktop: 1920,
  };

export {ROUTES,LABELS,MEDIAQUERIES };