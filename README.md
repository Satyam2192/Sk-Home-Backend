- This site Sk-Homes is hosted on AWS by GitHub CI/CD Pipeline on - [URL](http://13.49.67.115/)

- Frontend GitHub repositery [GitHub](https://github.com/Satyam2192/Sk-Homes)

![#1 Homepage ](https://github.com/Satyam2192/Sk-Home-Backend/assets/114611745/09ca1bf4-cc28-4ea7-94b0-604e75a8ab7d)


![#2 Listing](https://github.com/Satyam2192/Sk-Home-Backend/assets/114611745/f4f3c15d-4d18-4258-83e4-f30a9c9ba608)

![#3 Details](https://github.com/Satyam2192/Sk-Home-Backend/assets/114611745/ef5c308f-d49b-4b2a-9360-43517985a2cf)

![#4 Dashboard](https://github.com/Satyam2192/Sk-Home-Backend/assets/114611745/11dce20a-cc6d-4712-a8d1-2d197c109af5)

![#5 Create Listing](https://github.com/Satyam2192/Sk-Home-Backend/assets/114611745/fdf23695-b3f4-4afc-936f-19a880585247)

  

## Overview

This API provides endpoints for managing users, authentication, listings, footer, and navbar data. It is built using Node.js, Express, and MongoDB.

## Authentication

- **JWT (JSON Web Token)** is used for authentication.
- Users must obtain a valid JWT token to access protected endpoints.
- The token is stored in an HTTP-only cookie named `access_token`.

## Endpoints

### User Endpoints

- **POST /api/auth/signup**
  - Creates a new user.
  - Requires `username`, `email`, and `password` in the request body.
  - Returns a success message on successful creation.
- **POST /api/auth/signin**
  - Authenticates a user.
  - Requires `email` and `password` in the request body.
  - Returns a JWT token in an HTTP-only cookie and user information (excluding password) on successful authentication.
- **POST /api/auth/google**
  - Authenticates a user using Google OAuth.
  - Requires Google OAuth credentials in the request body.
  - Returns a JWT token in an HTTP-only cookie and user information (excluding password) on successful authentication.
- **GET /api/auth/signout**
  - Logs out a user by clearing the `access_token` cookie.
  - Returns a success message.
- **POST /api/user/update/:id**
  - Updates a user's information.
  - Requires a valid JWT token and the user's `id` in the URL path.
  - Allows updating `username`, `email`, `password`, and `avatar`.
  - Returns the updated user information (excluding password).
- **DELETE /api/user/delete/:id**
  - Deletes a user.
  - Requires a valid JWT token and the user's `id` in the URL path.
  - Returns a success message.
- **GET /api/user/listings/:id**
  - Retrieves a user's listings.
  - Requires a valid JWT token and the user's `id` in the URL path.
  - Returns an array of listings associated with the user.
- **GET /api/user/:id**
  - Retrieves a user's information.
  - Requires a valid JWT token and the user's `id` in the URL path.
  - Returns the user information (excluding password).

### Listing Endpoints

- **POST /api/listing/create**
  - Creates a new listing.
  - Requires a valid JWT token and listing details in the request body.
  - Returns the created listing information.
- **DELETE /api/listing/delete/:id**
  - Deletes a listing.
  - Requires a valid JWT token and the listing's `id` in the URL path.
  - Returns a success message.
- **POST /api/listing/update/:id**
  - Updates a listing's information.
  - Requires a valid JWT token and the listing's `id` in the URL path.
  - Allows updating listing details.
  - Returns the updated listing information.
- **GET /api/listing/get/:id**
  - Retrieves a specific listing.
  - Requires the listing's `id` in the URL path.
  - Returns the listing information.
- **GET /api/listing/get**
  - Retrieves a list of listings with optional filtering and sorting.
  - Supports filtering by `offer`, `furnished`, `parking`, `type`, and `searchTerm`.
  - Supports sorting by `createdAt` (default) or other fields.
  - Returns an array of listings matching the criteria.

### Footer Endpoints

- **POST /api/footer/create**
  - Creates a new footer entry.
  - Requires footer details in the request body.
  - Returns the created footer information.
- **PUT /api/footer/update/:id**
  - Updates a footer entry.
  - Requires the footer's `id` in the URL path and updated details in the request body.
  - Returns the updated footer information.
- **GET /api/footer/get**
  - Retrieves all footer entries.
  - Returns an array of footer entries.

### Navbar Endpoints

- **POST /api/navbar/create**
  - Creates a new navbar entry.
  - Requires navbar details in the request body.
  - Returns the created navbar information.
- **PUT /api/navbar/update/:id**
  - Updates a navbar entry.
  - Requires the navbar's `id` in the URL path and updated details in the request body.
  - Returns the updated navbar information.
- **GET /api/navbar/get**
  - Retrieves all navbar entries.
  - Returns an array of navbar entries.

