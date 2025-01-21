FROM elixir:1.17.3-alpine

WORKDIR /app

RUN apk add --no-cache build-base git
RUN apk add --no-cache nodejs npm

RUN mix local.hex --force \
  && mix local.rebar --force

COPY mix.exs mix.lock ./
COPY config config
COPY apps apps

RUN mix deps.get --only prod
RUN mix deps.compile
RUN MIX_TARGET=tracker mix webbuild prod
RUN mix assets.deploy
RUN mix phx.digest
RUN mix release

CMD ["_build/prod/rel/manovspace/bin/manovspace", "start"]
CMD ["_build/prod/rel/tracker/bin/tracker", "start"]
