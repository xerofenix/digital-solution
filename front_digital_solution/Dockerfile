# Use public Bun image from Docker Hub
FROM docker.io/oven/bun:latest

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
COPY tsconfig.json .

RUN bun install

# Copy all source files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start in development mode
CMD ["bun", "run", "dev"]
