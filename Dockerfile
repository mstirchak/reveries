ARG NODE_VERSION=12.16.0

FROM node:${NODE_VERSION} as base
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
USER node
COPY package*.json ./

#dependencies image
FROM base AS dependencies
RUN npm set progress=false && npm config set depth 0
RUN npm install
COPY src/ tsconfig*.json ./
RUN npm run build

FROM base AS prod
WORKDIR /usr/src/app/dist
COPY --from=dependencies /usr/src/app/dist ./
COPY --from=dependencies /usr/src/app/node_modules ./node_modules/
EXPOSE 8080
ENTRYPOINT ["node", "main"]