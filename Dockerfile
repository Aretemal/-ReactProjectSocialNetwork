FROM node:18-alpine as builder

COPY package.json package-lock.json ./

RUN npm install

WORKDIR /app

COPY . .

RUN npm run build


FROM nginx:stable

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000 80

CMD ["npm", "start"]
