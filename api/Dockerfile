FROM keymetrics/pm2-docker-alpine:latest

RUN mkdir -p /code
WORKDIR /code

COPY . .
RUN npm install

# Remove credentials if they existed before locally
RUN rm -f client_secret.json
RUN rm -rf .credentials

EXPOSE 6500

# TODO: add scheduler -> what happens when request comes in between updating reps data?
#      --> https://www.npmjs.com/package/node-schedule

CMD ["pm2-docker", "start", "/code/index.js"]
