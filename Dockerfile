FROM node:8
RUN mkdir /usr/src/palindrome
WORKDIR /usr/src/palindrome
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8082
CMD ["npm", "start"]
