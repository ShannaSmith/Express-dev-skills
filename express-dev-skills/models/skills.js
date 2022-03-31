const skills = [
    {id:191234, skill: 'MongoDB', done: true},
    {id:191345, skill: 'Express', done: true},
    {id:191456, skill: 'React', done: true},
    {id:191567, skill: 'Node.js', done: true},
    {id:191678, skill: 'JavaScript', done: true},
    {id:191789, skill: 'CSS', done: true},
    {id:192345, skill: 'HTML', done: true},
    {id:192456, skill: 'Postman', done: true},
    {id:192567, skill: 'Firebase', done: false},
    {id:192678, skill: 'Heroku', done: true},
    {id:192789, skill: 'Docker', done: true},
    {id:193456, skill: 'GraphQl', done: true},
    {id:193567, skill: 'Bootstrap', done: true},
    {id:193678, skill: 'Python', done: false},
    {id:193789, skill: 'Strapi', done: true},
    {id:194567, skill: 'Angular', done: false}
];

module.exports ={
    getAll,
    getOne,
    create,
    deleteOne
};
function getAll() {
    return skills;
}
function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}
function create(skill) {
    skill.id = Date.now() % 2000000;
//    skill.done = ;
    skills.push(skill);
}
function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
	skills.splice(idx, 1); 
}