FROM node
WORKDIR /app
COPY . /app
WORKDIR ./backend
RUN npm install && npm install --prefix ../frontend && npm run build-frontend
EXPOSE 3000
CMD ["node", "index.js"]
