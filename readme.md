# Networth Tracker
This project is a secure RESTful API built with the MERN stack using Hapi.js for handling requests, MongoDB as the database, and Mongoose as the ODM. The API provides user management functionality, including user creation, login, fetching users, and deleting users.

### Features
- User Registration: Create users with name, email, and password.
- User Login: Authenticate users based on email and password.
- Get All Users: Retrieve a list of all users.
- Get User by ID: Fetch details of a specific user by their ID.
- Delete User by ID: Delete a specific user by their ID.
- Validation: Request validation using Joi to ensure valid data is passed.
- Error Handling: Proper error handling and responses with appropriate HTTP status codes.

## Requirements
To run this project, you will need:
- Node.js installed
- MongoDB instance
- npm for package management

## Installation
#### 1. Clone the repository:
``git clone https://github.com/avi9984/networth-tracker.git``
#### 2. Change to the project directory:
``cd networth-tracker``
#### 3. Install the project dependencies:
``npm install``
#### 4. Create a .env file in the root directory and add the following:
``MONGO_URI="mongodb://localhost:27017/networth_tracker"
JWT_SECRET="67cc6be124ce398bda71586fc6163cc6edf3684ef8fc4adf2905e262b5d88485"
PORT=3000``
#### 5. Start the server:
``npm start``
#### 6. The API will be available at http://localhost:3000.

### API Endpoints
#### 1. User Registration

- URL: /users
- Method: POST
- Request Body:

``{
    
    "name":"{{$randomFullName}}",

    "email":"{{$randomEmail}}",

    "password":"Avi@2345"

}
``

responce:

``{
    "message": "User created successfully"
}``
####  2. User Login
- URL: /login
- Method: POST
- Request Body:
``{
    "email": "avi16351@gmail.com",
    "password": "Avi@2345"
}``

responce: 
``{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDM5MWE4Mzc1ZDJiZGFmNGYyOTg1NSIsImlhdCI6MTcyODI5NDQ0NSwiZXhwIjoxNzI4Mjk4MDQ1fQ.H1azqXoPtSCaPrOthPqjW6dkjtZeb4NQ_s6nYNX2bJA"
}``
#### 3. Get All Users
- URL: /users
- Method: GET
- Response:

``{
  "message": "Get all users",
  "users": [
    {
      "_id": "603c9d2f8f1b2c34f4dcd9d0",
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
  ]
}
``
#### 4. Get User by 
- URL: /users/:id
- Method: GET
- responce:

``{
  "_id": "603c9d2f8f1b2c34f4dcd9d0",
  "name": "John Doe",
  "email": "johndoe@example.com"
}
``
#### 5: Delete User by ID
- URL: /users/:id
- Method: DELETE
- Response:

``{
  "message": "User deleted successfully"
}
``

## Technologies Used
- Node.js: JavaScript runtime for building the server-side logic.
- Hapi.js: A rich framework for building applications and services.
- MongoDB: NoSQL database for storing user data.
- Mongoose: ODM for interacting with MongoDB.
- Joi: Data validation library.
- bcrypt: Hashing library for password security.
- JWT: Used for generating and verifying JSON Web Tokens.
