# ### STAGE 1: Build ###
# FROM node:20.11-alpine AS build
# RUN apk update && apk add bash && apk add less && apk add nano

# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY ./ /app/
# RUN npm cache clean --force
# RUN npm run build

# ### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
# RUN apk update && apk add bash && apk add less && apk add nano

# RUN rm /usr/share/nginx/html/*
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/dist /usr/share/nginx/html

FROM node:20.11-alpine as node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "build" ]
# RUN npm run build

# EXPOSE 9999

# CMD [ "npm", "run", "preview" ]

FROM nginx:1.17.1-alpine
RUN apk update && apk add bash && apk add less && apk add nano

RUN rm /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist /usr/share/nginx/html