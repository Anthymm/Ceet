FROM postgres:latest AS database
COPY ./init/init.sql /docker-entrypoint-initdb.d/

FROM node:18-alpine AS backend
WORKDIR /app
COPY . .
WORKDIR /app/backend
RUN npm install
RUN npm install --prefix ../frontend
RUN npm run build --prefix ../frontend
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]

FROM nginx:stable AS nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=backend /app/frontend/dist /usr/share/nginx/html
EXPOSE 80
