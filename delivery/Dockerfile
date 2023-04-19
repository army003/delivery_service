# Intermediary nodejs container
FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN apk add --no-cache --virtual .build-deps \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    && apk add --no-cache --virtual .runtime-deps \
    cairo \
    jpeg \
    pango \
    giflib \
    && yarn install --frozen-lockfile

RUN yarn add canvas

# RUN yarn install

COPY . ./

# RUN npx sentry-cli releases propose-version
# RUN npx sentry-cli releases files "$SENTRY_RELEASE" upload-sourcemaps ./dist --rewrite

RUN yarn build --mode development

FROM nginx:1.21.6

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .
COPY --from=builder /app/nginx.conf.template /etc/nginx/templates/default.conf.template

CMD ["nginx", "-g", "daemon off;"]
