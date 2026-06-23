# 1. Choose the base environment
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /usr/src/app

# 3. Copy only package files first (for caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the port the app runs on
EXPOSE 3001

# 7. Define the command to run the app
CMD ["npm", "run", "dev"]