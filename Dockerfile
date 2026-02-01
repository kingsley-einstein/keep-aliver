FROM oven/bun
WORKDIR /app
COPY *.js .
COPY package.json .
RUN bun install
EXPOSE 17500
ENTRYPOINT ["bun", "start"]