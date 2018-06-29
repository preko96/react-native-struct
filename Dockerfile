FROM node:8.11.3

WORKDIR /usr/src/empty
COPY ./ ./
RUN npm install
CMD ["/bin/bash"]