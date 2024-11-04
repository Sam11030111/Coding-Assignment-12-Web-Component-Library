# Hung-Sheng Lee Coding Assignment 14

This is a React web application that has been dockerized for easy setup and is integrated with GitHub Actions for automated code quality checks. Follow the instructions below to get the application up and running on `localhost:5575`.

## Getting Started

1. **Clone the repository** to your local machine:

   ```bash
   git clone https://github.com/Sam11030111/Coding-Assignment-14.git
2. **Build the Docker image** using docker-compose:

   ```bash
   docker-compose build
3. **Start the container**:

   ```bash
   docker-compose up
4. Once the container is up, the application will be running on http://localhost:5575.

## Dockerfile Overview
- The Dockerfile is based on the node image.
- After building the application for production, we use Nginx as a web server to serve the static files. We then expose port 80 for external access and start the Nginx server to serve the application.

## Docker Compose Overview
- The service is named frontend with a custom container name Hung-Sheng_Lee_coding_assignment14.
- The application will run on port 8018 mapped to the container’s port 80.

## Stop the application
To stop the running container, use:
   ```bash
   docker-compose down
   ```

## GitHub Actions

This project includes a **GitHub Actions** workflow that automatically performs the following tasks on each push:

- **Prettier**: Checks code formatting.
- **ESLint**: Analyzes code for potential errors and ensures adherence to coding standards.
- **Tests**: Runs unit tests to verify application functionality.

You can view the results of these checks in the "Actions" tab of your GitHub repository.

