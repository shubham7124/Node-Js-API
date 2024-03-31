# Required Library
  ** 1 npm install express**
  ** 2 npm install mongoose**
  ** 3 npm install Nodemon**
  ** 4 npm install mongoose**

# Shopping Portal API
## Endpoints

Create Data
- **URL:** `http://localhost:3000/create`
- **Method:** `POST`
- **Description:** Create a new Data.
- **Request Body:**
  - `title` (String, required): Title of the Data.
  - `description` (String): Description of the Data.
  - `status` (String): Status of the Data (e.g., Pending, Completed).
- **Success Response:**
  - **Code:** 201 CREATED
  - **Content:** JSON representation of the created Data.
- **Error Response:**
  - **Code:** 400 BAD REQUEST
  - **Content:** `{ "message": "Error message" }`

Get All Data
- **URL:** `http://localhost:3000/gatAll`
- **Method:** `GET`
- **Description:** Retrieve all Data.
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** JSON array of tasks.
- **Error Response:**
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ "message": "Error message" }`

Get By ID
- **URL:** `http://localhost:3000/getbyId/:id`
- **Method:** `GET`
- **Description:** Retrieve Specific data.
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** JSON object of Data.
- **Error Response:**
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ "message": "Error message" }`

Update Task
- **URL:** `http://localhost:3000/update/:id`
- **Method:** `PUT`
- **Description:** Update an existing data.
- **URL Params:**
  - `id` (String, required): ID of the data to update.
- **Request Body:** Any fields to be updated.
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** JSON representation of the updated data.
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:** `{ "message": "Task not found" }`
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ "message": "Error message" }`

Delete Task
- **URL:** `http://localhost:3000/delete/:id`
- **Method:** `DELETE`
- **Description:** Delete a data.
- **URL Params:**
  - `id` (String, required): ID of the data to delete.
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** `{ "message": "Task deleted" }`
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:** `{ "message": "Task not found" }`
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ "message": "Error message" }`
