ARG NODE_VERSION=12.16.0

FROM node:${NODE_VERSION} as dev
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
USER node
COPY package*.json tsconfig*.json ./
RUN npm install
COPY /src ./src
ENTRYPOINT ["npm", "run", "start:dev"]