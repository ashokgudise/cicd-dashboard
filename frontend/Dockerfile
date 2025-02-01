FROM node:16 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/devops-dashboard /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf