#CoffeeCoder-API
The back-end for [CoffeeCoder](https://github.com/phobos101/CoffeeCoder)
The CoffeeCoder API allows for CoffeeCoder to perform full RESTful routes on **lessons** and **users**.

The backend was made via a TDD process using Mocha and Chai.

Routes have both authentication and authorization. Authentication is done with JSON Web Tokens (JWTs) and the authorization is done from my own custom code. (You can view it in the `/config/routes.js` file).

##Installation
1. `git clone git@github.com:phobos101/CoffeeCoder-API.git`
2. `npm install`
3. `npm test` (optional - for testing)
4. 'nodemon app.js`

##The build
The backend was build as part of a MEAN stack. The full of packages are:
* MongoDB
* Node.JS
* Express
* Bcrypt
* Cors
* Path
* Body-parser
* Mongoose
* Morgan
* Passport
* Jsonwebtoken
* Express-jwt
* Mocha
* Chai
* Supertest


##Routes
The standard routes for CoffeeCoder.

####/lessons
**GET** Retrieves all the lessons.
**POST** Creates a new lesson.

####/lessons/:id
**GET** Retrieves the lesson based on the ID.
**PUT** Updates a lesson based on the ID (authorization based on the author).
**DELETE** Deletes a lesson based on the ID (authorization based on the author).

####/users
**GET** Retrieves all users registered.

####/users/:id
**GET** Retrieves the user based on the ID.
**PUT** Updates a user based on the ID (authorization based on the user).
**DELETE** Retrieves the user based on the ID (authorization based on the user).

####/login
**POST** Sends credentials to be evaluated (unsecured).

####/register
**POST** Registers a user (unsecured).

##Models
The structure of the models.

####Lessons
* title - ~2-3 words explaining the topic.
* summary - A brief summary of what the lesson teaches.
* content - In depth instructions, and lesson notes.
* expectedResult - What the user should enter to complete the lesson. If multiple lines expected, write the first expression to expect. E.g if lesson is to print 1 - 5 then expect 1. (To be updated!)
* difficulty - How hard the lesson is on a range form 1-10.

####User
* points - How many points a user has.
* lessonsSubbed - An array of lessons the user has subscribed to.
* lessonsCreated - An array of lessons the user has created.
* lessonsCompleted - An array of lessons the user has completed.
* local.email - the users email address they used to register.
