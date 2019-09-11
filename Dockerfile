#  repo.treescale.com/hublot/manager
FROM node:latest
COPY . . 
RUN npm install yarn -g
RUN yarn install
RUN yarn build 

FROM nginx
COPY --from=0 dist /usr/share/nginx/html
