FROM node:20 AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

# docker build -t jayabrata180/dailyblog .
# docker run -p 5000:5000 jayabrata180/dailyblog
# docker push jayabrata180/dailyblog