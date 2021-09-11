FROM node:14-alpine as build-deps
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD npm run build


FROM nginx:1.12-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]