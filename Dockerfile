FROM node:14.4.0-alpine3.10

WORKDIR /app
COPY package.json .
RUN npm install
COPY ./tsconfig.json .
COPY ./config ./config
COPY ./jest.config.js .
COPY ./next.config.js .
COPY ./next-env.d.ts .
COPY ./README.md .
COPY ./src ./src
COPY ./pages ./pages
# RUN npm run build --only=prod
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
# CMD ["npm", "run", "dev"] --only=dev
