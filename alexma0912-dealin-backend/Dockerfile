# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Running Stage
FROM node:18-alpine 
RUN mkdir -p /app
COPY --from=builder /app/package*.json /app/

# Create a new group and user
RUN addgroup -S dealin && adduser -S dealin -G dealin

# Change the ownership
RUN chown -R dealin:dealin /app
# # Switch to the new user
USER dealin

WORKDIR /app
RUN npm install --prod
COPY --from=builder /app/dist ./dist

EXPOSE 8080

CMD [ "node", "./dist/src/app/index.js" ]