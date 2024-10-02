# Hung-Sheng Lee Coding Assignment 12

This is a React web application that has been dockerized for easy setup. Follow the instructions below to get the application up and running on `localhost:8083`.

## Getting Started

1. **Clone the repository** to your local machine:

   ```bash
   git clone https://github.com/Sam11030111/Coding-Assignment-12-Web-Component-Library.git
2. **Build the Docker image** using docker-compose:

   ```bash
   docker-compose build
3. **Start the container**:

   ```bash
   docker-compose up
4. Once the container is up, the application will be running on http://localhost:8083.

## Dockerfile Overview
- The Dockerfile is based on the node image.
- After building the application for production, we use Nginx as a web server to serve the static files. We then expose port 80 for external access and start the Nginx server to serve the application.

## Docker Compose Overview
- The service is named frontend with a custom container name Hung-Sheng_Lee_coding_assignment11.
- The application will run on port 8083 mapped to the container’s port 80.

## Stop the application
To stop the running container, use:
   ```bash
   docker-compose down
