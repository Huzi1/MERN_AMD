FROM  node:10.15-stretch-slim


USER root 

# Define environment variables
ENV APP_DIR /app
ENV PORT 3000


# Creating Application dir
RUN mkdir -p $APP_DIR

# Defining workdir
WORKDIR $APP_DIR


COPY package*.json ./
RUN npm ci
RUN npm install react-scripts@3.4.0 -g --silent

COPY . .

CMD [ "npm", "start" ]

EXPOSE $PORT