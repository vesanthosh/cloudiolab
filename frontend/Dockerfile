# Build frontend
FROM node:alpine AS builder

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production && npm cache clean --force

COPY . .

RUN npm run build

# Gettting ready for production
FROM node:alpine

RUN npm install -g serve

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build .

CMD ["serve", "-p", "3001", "-s", "."]