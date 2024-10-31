FROM git@github.com:Anthymm/Ceet.git
COPY . /backend
COPY . /frontend
WORKDIR /backend
RUN npm install && npm install --prefix ../frontend && npm run build-frontend
EXPOSE 3000
CMD ["node", "index.js"]
