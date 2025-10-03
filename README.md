# MissionPerform Todolist

A single-page application (SPA) for managing tasks. Built with React and Express.js + MongoDB (backend).

---

## Features

- Add new tasks with title, description, and status  
- View all tasks in a list  
- Inline edit task title, description, and status  
- Delete tasks  
- Persistent storage using MongoDB  

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone git@github.com:JasianE/Mission_Perform_Assignment.git
```

### 2. Install packages
```bash
cd Mission_perform_Assignment       # --> Enters folder containing project
cd backend                          # --> enters backend folder
npm install                         # --> installs necessary packages for backend
cd ../                              # --> returns to main folder
cd front-end                        # --> enters front-end folder
npm install                         # --> installs necessary packages for front-end
```

### 3. Create .ENV file
```bash
touch .env                          # --> Creates .env file
./code                              # --> Opens up code editor
#Now add the following two lines:
PORT=3000
MONGO_URI=mongodb+srv://mission_perform:Password123@cluster0.wrnrs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

### 4. Running the code
```bash
cd front_end                        # --> Enter front_end folder
npm run dev                         # --> Starts development server for react on localhost:5173
cd ../                              # --> Returns to previous folder
cd backend                          # --> Enter backend folder
npm run start                       # --> Begins express server on localhost:3000
```

### 5. Access App Locally
Enter http://localhost:3000 on your browser of choice. Enjoy! :)



