# API Documentation

## POST /users/register

### Description

This endpoint registers a new user in the system. It requires the user's first name, email, and password. Optionally, the user can provide their last name.

### Request Body

- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): A valid email address for the user. This will be used for login and communication purposes.
- `password` (string, required): A secure password for the user's account. Must be at least 6 characters long.

### Response Status Codes

- **201 Created**: The user was registered successfully. The response will include the user's ID and creation timestamp.
- **400 Bad Request**: There were validation errors with the provided data. The response will include details about the validation errors.

### Endpoint

`POST /users/register`

### Example Request

```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securePassword123"
}
```

### Example Response

```json
{
    "id": "1234567890abcdef",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2023-10-05T14:48:00.000Z"
}
```

### Additional Information

- Ensure that the email address provided is unique and not already registered in the system.
- Passwords should be stored securely using hashing algorithms.
- The `createdAt` field in the response indicates the timestamp when the user was registered.

## POST /users/login

### Description

This endpoint logs in an existing user. It requires the user's email and password.

### Request Body

- `email` (string, required): A valid email address for the user.
- `password` (string, required): The user's account password. Must be at least 6 characters long.

### Response Status Codes

- **200 OK**: The user was logged in successfully. The response will include the user's details and an authentication token.
- **400 Bad Request**: There were validation errors with the provided data. The response will include details about the validation errors.
- **401 Unauthorized**: The email or password provided is incorrect.

### Endpoint

`POST /users/login`

### Example Request

```json
{
    "email": "john.doe@example.com",
    "password": "securePassword123"
}
```

### Example Response

```json
{
    "id": "1234567890abcdef",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2023-10-05T14:48:00.000Z"
}
```

## GET /users/profile

### Description

This endpoint retrieves the profile of the logged-in user. It requires the user to be authenticated.

### Response Status Codes

- **200 OK**: The user's profile was retrieved successfully. The response will include the user's details.
- **401 Unauthorized**: The user is not authenticated.

### Endpoint

`GET /users/profile`

### Example Response

```json
{
    "id": "1234567890abcdef",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2023-10-05T14:48:00.000Z"
}
```

## POST /users/logout

### Description

This endpoint logs out the authenticated user. It requires the user to be authenticated.

### Response Status Codes

- **200 OK**: The user was logged out successfully.
- **401 Unauthorized**: The user is not authenticated.

### Endpoint

`POST /users/logout`

### Example Response

```json
{
    "message": "User logged out successfully."
}
```

## POST /captains/register

### Description

This endpoint registers a new captain in the system. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body

- `fullname.firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string, required): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): A valid email address for the captain. This will be used for login and communication purposes.
- `password` (string, required): A secure password for the captain's account. Must be at least 6 characters long.
- `vehicle.color` (string, required): The color of the captain's vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string, required): The plate number of the captain's vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (number, required): The capacity of the captain's vehicle. Must be at least 1.
- `vehicle.vehicleType` (string, required): The type of the captain's vehicle. Must be one of 'car', 'motorcycle', or 'auto'.

### Response Status Codes

- **201 Created**: The captain was registered successfully. The response will include the captain's ID and creation timestamp.
- **400 Bad Request**: There were validation errors with the provided data. The response will include details about the validation errors.

### Endpoint

`POST /captains/register`

### Example Request
```json
{
    "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "password": "securePassword123",
    "vehicle": {
        "color": "red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

### Example Response

```json
{
    "id": "abcdef1234567890",
    "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "createdAt": "2023-10-05T14:48:00.000Z",
    "vehicle": {
        "color": "red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

### Additional Information

- Ensure that the email address provided is unique and not already registered in the system.
- Passwords should be stored securely using hashing algorithms.
- The `createdAt` field in the response indicates the timestamp when the captain was registered.

## POST /captains/login

### Description

This endpoint logs in an existing captain. It requires the captain's email and password.

### Request Body

- `email` (string, required): A valid email address for the captain.
- `password` (string, required): The captain's account password. Must be at least 6 characters long.

### Response Status Codes

- **200 OK**: The captain was logged in successfully. The response will include the captain's details and an authentication token.
- **400 Bad Request**: There were validation errors with the provided data. The response will include details about the validation errors.
- **401 Unauthorized**: The email or password provided is incorrect.

### Endpoint

`POST /captains/login`

### Example Request

```json
{
    "email": "jane.smith@example.com",
    "password": "securePassword123"
}
```

### Example Response

```json
{
    "token": "jwt_token_here",
    "captain": {
        "id": "abcdef1234567890",
        "fullname": {
            "firstname": "Jane",
            "lastname": "Smith"
        },
        "email": "jane.smith@example.com",
        "createdAt": "2023-10-05T14:48:00.000Z",
        "vehicle": {
            "color": "red",
            "plate": "XYZ123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

## GET /captains/profile

### Description

This endpoint retrieves the profile of the logged-in captain. It requires the captain to be authenticated.

### Response Status Codes

- **200 OK**: The captain's profile was retrieved successfully. The response will include the captain's details.
- **401 Unauthorized**: The captain is not authenticated.

### Endpoint

`GET /captains/profile`

### Example Response

```json
{
    "captain": {
        "id": "abcdef1234567890",
        "fullname": {
            "firstname": "Jane",
            "lastname": "Smith"
        },
        "email": "jane.smith@example.com",
        "createdAt": "2023-10-05T14:48:00.000Z",
        "vehicle": {
            "color": "red",
            "plate": "XYZ123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

## POST /captains/logout

### Description

This endpoint logs out the authenticated captain. It requires the captain to be authenticated.

### Response Status Codes

- **200 OK**: The captain was logged out successfully.
- **401 Unauthorized**: The captain is not authenticated.

### Endpoint

`POST /captains/logout`

### Example Response

```json
{
    "message": "Logout successfully"
}
```

### Additional Information

- Ensure that the captain is authenticated before making this request.
- The token used for authentication will be blacklisted to prevent further use.