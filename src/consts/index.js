const ROUTES = {
    home: "/",
    tour:  { path: "/tour/:id", to: "/tour/" },
    likes: { path: "/likes/:id", to: "/likes/" },
    tourInput: "/tour/input",
}


const CAMERA = { 
    begin:[],
    tour:[-2 , 2 , 3],
    favourites:[],
    students:[],
}

export {ROUTES, CAMERA};