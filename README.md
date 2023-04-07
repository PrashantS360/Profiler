# CipherSchools Assignment

Frontend code is inside `/client` and backend is inside `/backent`. Frontend is made with React, vite TypeScript and sass and for backend NodeJs, Express is used with TypeScript and serverless framework.

## Start frontend on local environment
1. Clone the repository to your local computer using command "git clone https://github.com/PrashantS360/Profiler.git"

2. Install required modules and run the dev server using "npm i" and "npm run dev" respectively

## Start backend on local environment
1. Install required modules and run the dev server using "npm i" and "npm run start" respectively

2. Now before starting the server make sure to add your mongodb url in `.env` file like `.env.example`


### Endpoints

- `/auth/createuser`: register the user to the application
- `/auth/login`: receives email and password in request body to login the user
- `/auth/getuser`: retrieve user details
- `/user/updateid`: receives email and user properties in request body and updates the user
