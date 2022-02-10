

FROM node:lts as dependencies
WORKDIR /rootlogic-frontend
COPY package.json package-lock.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /rootlogic-frontend
COPY . .
COPY --from=dependencies /rootlogic-frontend/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /rootlogic-frontend
ENV NODE_ENV production


COPY --from=builder /rootlogic-frontend/public ./public
COPY --from=builder /rootlogic-frontend/.next ./.next
COPY --from=builder /rootlogic-frontend/node_modules ./node_modules
COPY --from=builder /rootlogic-frontend/package.json ./package.json

EXPOSE 3000
CMD ["npm","run", "start"]

