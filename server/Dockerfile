FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

#Skipping copy of the node_modules and installing them in the container directly.
RUN npm install 

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]
