FROM node:13.8.0-alpine as build

WORKDIR /var/www/html

# Copy git repository files to image
COPY . /var/www/html

RUN npm install --production && npm run build && npm cache clean --force

FROM alpine:3.10

ARG GIT_SHA
ENV GIT_SHA $GIT_SHA
LABEL git_sha="$GIT_SHA"

COPY --from=build /var/www/html/dist /var/www/html
