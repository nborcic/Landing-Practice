#  Build the application
FROM node:23-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#  Serve the application
FROM node:23-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app ./

EXPOSE 3005

ENTRYPOINT ["npm", "run", "start", "--", "--port=3005", "--host=0.0.0.0"]