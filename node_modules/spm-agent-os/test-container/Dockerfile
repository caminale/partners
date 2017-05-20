FROM mhart/alpine-node

WORKDIR /src
ADD . /src
RUN apk add --update procps && npm install && npm install mocha -g
CMD "npm test"

