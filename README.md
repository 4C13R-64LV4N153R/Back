# My Express API

This project is an API built with Express.js that communicates with a PostgreSQL database using Prisma ORM.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- PostgreSQL database up and running.
- Basic understanding of JavaScript/TypeScript, Node.js, and SQL.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. **Clone the repo**

    ```sh
    git clone https://github.com/your-username/my-express-api.git
    cd my-express-api
    ```

2. **Install NPM packages**

    ```sh
    npm install
    ```

3. **Set up your environment variables**

    Create a `.env` file in the root directory of the project and add your database URL and JWT secret:

    ```plaintext
    DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
    JWT_SECRET="your_jwt_secret"
    ```

4. **Initialize Prisma**

    ```sh
    npx prisma init
    ```

    This will create the `prisma` directory with `schema.prisma` file. Update the `schema.prisma` file as needed.

5. **Run Prisma migrations**

    ```sh
    npx prisma migrate dev --name init
    npx prisma generate
    ```

6. **Start the server**

    ```sh
    npm run dev
    ```

### Authentication

- **Register**

    ```sh
    POST /auth/register
    ```

    Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "yourpassword"
    }
    ```

- **Login**

    ```sh
    POST /auth/login
    ```

    Body:
    ```json
    {
      "email": "john@example.com",
      "password": "yourpassword"
    }
    ```

    Response:
    ```json
    {
      "token": "your_jwt_token"
    }
    ```

- **Protected Routes**

    Add the JWT token in the `Authorization` header with `Bearer` prefix to access protected routes.

    ```sh
    GET /users
    Authorization: Bearer your_jwt_token
    ```

That's it! You now have a basic authentication system set up in your Express API using Prisma and PostgreSQL.
