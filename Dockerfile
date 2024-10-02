FROM node:18-alpine AS build

WORKDIR /Hung-Sheng_Lee_ui_garden

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

# Copy the build output from the first stage to Nginx's default static directory
COPY --from=build /Hung-Sheng_Lee_ui_garden/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
