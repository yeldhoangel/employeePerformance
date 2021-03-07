# employeePerformance
Design a web application that allows employees to submit feedback toward each other's performance review

Technologies used: 

Frontend: typescript, webpack, babel, gulp

Backend: Node.js

Database: MongoDB

how to test

##Clone this repo or download the .zip file, install dependencies, then npm run dev for server and npm start for client:

####"server"

  	> cd server
  	> npm install
  	> npm install -g nodemon
	> npm run dev
####"client" (2nd terminal)

  	> cd client
  	> npm install
	> npm run dev
	> npm install gulp-sass --save-dev
  > gulp sass
  
####Database setup:

	Download MongoDB and run MongoDB server such as localhost:27017
	Inside employee-performance-server/server/index.js, change mongoose.connect('mongodb://dbuser:dbpassword@hostname:port/dbname'); with your setting


Now, we can't create admin through the browser as expected.
To create sample admin, download Postman or similar app for the browser.
In Postman, post http://localhost:8080/createAdmin => sample admin will be create
username: "admin" / password: "password"
