FROM node:20.11-alpine

WORKDIR /app

COPY package* .
COPY next* .
COPY postcss.config.js .
COPY tailwind* .
COPY tsconfig.json .

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]