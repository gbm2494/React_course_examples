'use strict';
const Hapi = require('hapi');
const MySQL = require('mysql');
const Joi = require('joi');

// Create a server with a host and port
const server = new Hapi.Server();

const connection = MySQL.createConnection({
     host: 'localhost',
     user: 'API_user',
     password: 'API1234',
     database: 'API_example'
});

server.connection({
    host: 'localhost',
    port: 8000
});

connection.connect();

server.route({
    method: 'GET',
    path: '/todos',
    handler: function (request, reply) {
       connection.query('SELECT * FROM todos',
       function (error, results, fields) {
       if (error) throw error;

       reply(results);
    });
  }
});

server.route({
    method: 'GET',
    path: '/type_tasks',
    handler: function (request, reply) {
       connection.query('SELECT * FROM type_task',
       function (error, results, fields) {
       if (error) throw error;

       reply(results);
    });
  }
});


server.route({
    method: 'GET',
    path:'/helloworld',
    handler: function (request, reply) {
    return reply('hello world');
}
});

server.route({
    method: 'POST',
    path: '/create_todo',
    handler: function (request, reply) {
    const name = request.payload.name;
    const description = request.payload.description;
    const priority = request.payload.priority;
    const type = request.payload.type_id;

    connection.query('INSERT INTO todos (name, description, priority, type_id) VALUES ("' + name + '","' + description + '", "'+ priority +'","' + type + '")',
    function (error, results, fields) {
        if (error) throw error;

        reply(results);
    });
}
});

server.start((err) => {
   if (err) {
     throw err;
   }
  console.log('Server running at:', server.info.uri);
});
