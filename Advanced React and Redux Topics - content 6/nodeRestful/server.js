'use strict';
const Hapi = require('hapi');
const MySQL = require('mysql');
const Joi = require('joi');
var corsHeaders = require('hapi-cors-headers');

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
    port: 8000,
});

connection.connect();

server.route({
    method: 'GET',
    path: '/api/todos_all',
    handler: function (request, reply) {
       connection.query('Select todo_item.name, todo_item.description, todo_item.task_id, todo_item.priority,  status_task.name as status, type_task.name as type from todo_item, status_task, type_task where status_task.id = todo_item.status_id AND type_task.id = todo_item.type_id',
       function (error, results, fields) {
       if (error) throw error;

       reply(results);
    });
  }
});

server.route({
    method: 'GET',
    path: '/api/todos',
    handler: function (request, reply) {
       connection.query('SELECT * FROM todo_item',
       function (error, results, fields) {
       if (error) throw error;

       reply(results);
    });
  }
});

server.route({
    method: 'GET',
    path: '/api/type_tasks',
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
    path: '/api/status_tasks',
    handler: function (request, reply) {
       connection.query('SELECT * FROM status_task',
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
    method: ['PUT', 'POST', 'OPTIONS'],
    path: '/api/create_todo',
    handler: function (request, reply) {
    const name = request.payload.name;
    const description = request.payload.description;
    const priority = request.payload.priority;
    const type = request.payload.type_id;
    const status = request.payload.status_id;

    connection.query('INSERT INTO todo_item (name, description, priority, type_id, status_id) VALUES ("' + name + '","' + description + '", "'+ priority +'","' + type + '","'+ status +'")',
    function (error, results, fields) {
        if (error) throw error;
        var objectResult = {task_id : results.insertId, name : name, description : description, priority : priority, type_id : type, status_id : status};
        reply(objectResult);
    });
}
});

server.route({
    method: 'GET',
    path: '/api/get_todo/{todoid}',
    handler: function (request, reply) {
    const todoID = request.params.todoid;

    connection.query('Select todo_item.name, todo_item.description, todo_item.task_id, todo_item.priority,  status_task.name as status, type_task.name as type from todo_item, status_task, type_task where status_task.id = todo_item.status_id AND type_task.id = todo_item.type_id AND task_id = "' + todoID + '"',
    function (error, results, fields) {
       if (error) throw error;

       reply(results[0]);
});
}
});

server.route({
    method: 'DELETE',
    path: '/api/delete_todo/{todoid}',
    handler: function (request, reply) {
    const todoID = request.params.todoid;

    connection.query('DELETE FROM todo_item WHERE task_id = "' + todoID + '"',
    function (error, results, fields) {
       if (error) throw error;

       reply(results);
});
}
});

server.ext('onPreResponse', corsHeaders);

server.start((err) => {
   if (err) {
     throw err;
   }
  console.log('Server running at:', server.info.uri);
});
