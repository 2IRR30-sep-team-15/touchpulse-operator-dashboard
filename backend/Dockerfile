# 1. Build Stage
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (for better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the NestJS app
RUN npm run build

# 2. Production Stage
FROM node:20-alpine AS production

# Set NODE_ENV to production
ENV NODE_ENV=production

WORKDIR /app

# Copy only necessary files from the build stage
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built files from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port your NestJS app listens on
EXPOSE 8080

# Start the app
CMD ["node", "dist/main"]
