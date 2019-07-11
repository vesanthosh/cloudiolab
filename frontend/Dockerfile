# Build frontend
FROM node:alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Gettting ready for production
FROM node:alpine

RUN npm install -g serve

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build .

CMD ["serve", "-p", "3001", "-s", "."]