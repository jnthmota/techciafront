FROM node:10-alpine AS BUILD

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
USER root
COPY --from=BUILD /app/dist/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
