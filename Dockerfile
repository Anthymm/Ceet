FROM node:18-alpine AS backend
WORKDIR /app
COPY . /app
WORKDIR /app/backend
RUN npm install
RUN npm install --prefix ../frontend
RUN npm run build-frontend
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]

FROM nginx:latest AS nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=backend /app/backend/dist /etc/nginx//html
EXPOSE 80
