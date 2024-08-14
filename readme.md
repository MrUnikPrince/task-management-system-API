Task Management API

Setup


Get Started with Node.js
Install Node.js and npm (the package manager for Node.js) on your machine.
Clone the repository and navigate to the project directory.
Run npm install to install the dependencies.
Start the server by running node app.js.


Endpoints


GET /tasks
Retrieves a list of all tasks.
Response: JSON array of task objects.


POST /tasks
Creates a new task.
Request Body: JSON object with title and description properties.
Response: JSON object with the newly created task.


GET /tasks/:id
Retrieves a task by ID.
Path Parameter: id (integer)
Response: JSON object with the task details.


PUT /tasks/:id
Updates a task.
Path Parameter: id (integer)
Request Body: JSON object with title and description properties.
Response: JSON object with the updated task.


DELETE /tasks/:id
Deletes a task.
Path Parameter: id (integer)
Response: JSON object with a success message.


Postman Collection
Import the collection into Postman by clicking on the "Import" button and selecting the Task Management API.postman_collection.json file.
The collection includes the following requests:
GET /tasks
POST /tasks
GET /tasks/:id
PUT /tasks/:id
DELETE /tasks/:id

Environment Variables
baseUrl: The base URL of the API (e.g. http://localhost:3000)

Example Requests
GET /tasks: {{baseUrl}}/tasks
POST /tasks: {{baseUrl}}/tasks with request body { "title": "New Task", "description": "This is a new task" }
GET /tasks/:id: {{baseUrl}}/tasks/1
PUT /tasks/:id: {{baseUrl}}/tasks/1 with request body { "title": "Updated Task", "description": "This is an updated task" }
DELETE /tasks/:id: {{baseUrl}}/tasks/1