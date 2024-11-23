FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src 

RUN npm install
RUN npm run build

RUN npx prisma generate

FROM node:18

WORKDIR /app

COPY --from=builder /app /app

CMD ["npm", "run", "dev"]
