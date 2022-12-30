FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && yarn &&  \
  npm i -g pm2 \
  apt-get upgrade -y && \ 
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN yarn

COPY . .

CMD ["node", "DhaniOfc.js"]
