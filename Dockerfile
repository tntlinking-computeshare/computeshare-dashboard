FROM node:18-alpine
WORKDIR /app
COPY .next ./.next
COPY public ./public
COPY package*.json ./
RUN npm install --production  --registry https://registry.npmmirror.com
EXPOSE 3000
CMD ["npm", "start"]
#CMD ["ls", ".next"]
