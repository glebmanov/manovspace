import Config

config :tracker,
  ecto_repos: [Tracker.Repo],
  generators: [timestamp_type: :utc_datetime]

# Configures the endpoint
config :tracker, TrackerWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: TrackerWeb.ErrorHTML, json: TrackerWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: Tracker.PubSub,
  live_view: [signing_salt: "4e8mV0IY"]

config :manovspace,
  generators: [timestamp_type: :utc_datetime]

# Configures the endpoint
config :manovspace, ManovspaceWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: ManovspaceWeb.ErrorHTML, json: ManovspaceWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: Manovspace.PubSub,
  live_view: [signing_salt: "HQVTpLEq"]

# Configure esbuild (the version is required)
config :esbuild,
  version: "0.17.11",
  manovspace: [
    args:
      ~w(js/app.js --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../apps/manovspace/assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

if config_env() in [:dev, :test] do
  import_config ".env.exs"
end

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
