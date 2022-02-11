

FROM ubuntu:latest as dependencies
WORKDIR /rootlogic-frontend
COPY package.json package-lock.json ./
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm install

FROM ubuntu:latest as builder
WORKDIR /rootlogic-frontend
COPY . .
COPY --from=dependencies /rootlogic-frontend/node_modules ./node_modules
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm run build

FROM ubuntu:latest as runner
WORKDIR /rootlogic-frontend
ENV NODE_ENV production
ENV MAIL_CHIP_API_KEY 9b04b820beaed4e46b498a2b6d3d2c3c-us20
ENV MC_DATA_CENTER us20
ENV MC_LIST_ID 2ff11b5ae4


COPY --from=builder /rootlogic-frontend/public ./public
COPY --from=builder /rootlogic-frontend/.next ./.next
COPY --from=builder /rootlogic-frontend/node_modules ./node_modules
COPY --from=builder /rootlogic-frontend/package.json ./package.json
COPY --from=builder /rootlogic-frontend/next.config.js ./next.config.js

EXPOSE 3000
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update && apt-get install -y nodejs
CMD ["npm","run", "start"]

