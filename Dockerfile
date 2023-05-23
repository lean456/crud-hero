FROM node:18.12.1 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --configuration production

FROM nginx:alpine

COPY --from=builder /app/dist/crud-hero /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]