# Use the official Bun image
FROM jarredsumner/bun:latest

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY front_digital_solution/package.json .
COPY front_digital_solution/tsconfig.json .
RUN bun install

# Copy the rest of the application code
COPY front_digital_solution/ .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application in development mode
CMD ["bun", "run", "dev"]