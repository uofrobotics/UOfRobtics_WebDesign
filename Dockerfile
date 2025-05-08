# 1) Build stage
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2) Serve stage
FROM nginx:1.28.0-alpine-slim
# Remove default NGINX content
RUN rm -rf /usr/share/nginx/html/*
# Copy built React files
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
