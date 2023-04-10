# First stage: Build the Next.js app
FROM node:19-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Second stage: Run the built app
FROM node:19-alpine

WORKDIR /app

# Copy only the necessary files from the first stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install production dependencies
RUN npm ci --only=production

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
