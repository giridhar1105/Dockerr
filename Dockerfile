# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies (including TailwindCSS and Next.js dependencies)
RUN npm install

# Step 5: Copy the rest of the project files into the container
COPY . .

# Step 6: Build the Next.js app for production
RUN npm run build

# Step 7: Expose the port that the Next.js app will run on (default is 3000)
EXPOSE 3000

# Step 8: Start the Next.js app in production mode
CMD ["npm", "start"]
