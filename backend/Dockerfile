
# 1. Use Node.js runtime
FROM node:22-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy dependency files
COPY package*.json ./

# 4. Install production dependencies
RUN npm install --omit=dev

# 5. Copy backend source code
COPY src ./src

# 6. Document the backend port
EXPOSE 5000

# 7. Start the backend server
CMD ["npm", "start"]
