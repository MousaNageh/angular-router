FROM node:16.14 

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app 

COPY ./package.json /app/package.json

RUN npm install -g @angular/cli

RUN npm install 

COPY . /app

EXPOSE 4200
