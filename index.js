// server.route({
//     method: 'GET',
//     path: '/users/{username?}',
//     handler: (request, h) => {
//         const {username = 'stranger'} = request.params;
//         return `Hallo ${username}!`;
//     },
// });

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const {name, location} = request.query;
        return `Hello ${name} from ${location}!`;
    },

});