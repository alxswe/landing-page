# syntax=docker/dockerfile:1

# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json package-lock.json ./

# Install dependencies using Yarn
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js application will run on
EXPOSE 3000

# Specify the command to run your application
CMD ["npm", "start"]
