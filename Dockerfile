FROM node
WORKDIR /app
COPY . /app
WORKDIR /app/backend
RUN npm install
RUN npm install --prefix ../frontend
RUN npm run build-frontend
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]
