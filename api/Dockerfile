FROM keymetrics/pm2-docker-alpine:latest

COPY . .

EXPOSE 6500

# TODO: add scheduler -> what happens when request comes in between updating reps data?
#      --> https://www.npmjs.com/package/node-schedule
# TODO: add deploy script --> how can we handle credentials?

CMD ["pm2-docker", "start", "index.js"]
