import Config

# Configure your database
config :tracker, Tracker.Repo,
  username: "user",
  password: System.get_env("PASSWORD_TRACKER_DB"),
  hostname: "db_tracker",
  database: "tracker_repo",
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

config :tracker, TrackerWeb.Endpoint,
  # Binding to loopback ipv4 address prevents access from other machines.
  # Change to `ip: {0, 0, 0, 0}` to allow access from other machines.
  http: [ip: {0, 0, 0, 0}, port: 4001],
  check_origin: false,
  code_reloader: true,
  debug_errors: true,
  secret_key_base: "cs44tKsnKLyRw1tRbUQeR37rTMz4h0aT2CRrBGN1QvE2qupVelcjjEFdxU8wLinc",
  watchers: [
    npm: ["run", "dev", cd: Path.expand("../apps/tracker/frontend", __DIR__)]
  ]

# Watch static and templates for browser reloading.
config :tracker, TrackerWeb.Endpoint,
  live_reload: [
    patterns: [
      ~r"priv/static/(?!uploads/).*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"priv/gettext/.*(po)$",
      ~r"lib/tracker_web/(controllers|live|components)/.*(ex|heex)$"
    ]
  ]

# Enable dev routes for dashboard and mailbox
config :tracker, dev_routes: true

config :manovspace, ManovspaceWeb.Endpoint,
  # Binding to loopback ipv4 address prevents access from other machines.
  # Change to `ip: {0, 0, 0, 0}` to allow access from other machines.
  http: [ip: {0, 0, 0, 0}, port: 4000],
  check_origin: false,
  code_reloader: true,
  debug_errors: true,
  secret_key_base: "ZJqNgFS2v99uaWYRHzPXnjiK0htns0dzmvqD5/yv3dC2lkbDE81TuPGfOpnesggp",
  watchers: [
    esbuild: {Esbuild, :install_and_run, [:manovspace, ~w(--sourcemap=inline --watch)]}
  ]

# Watch static and templates for browser reloading.
config :manovspace, ManovspaceWeb.Endpoint,
  live_reload: [
    patterns: [
      ~r"priv/static/(?!uploads/).*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"priv/gettext/.*(po)$",
      ~r"lib/manovspace_web/(controllers|live|components)/.*(ex|heex)$"
    ]
  ]

# Enable dev routes for dashboard and mailbox
config :manovspace, dev_routes: true

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Initialize plugs at runtime for faster development compilation
config :phoenix, :plug_init_mode, :runtime

config :phoenix_live_view,
  # Include HEEx debug annotations as HTML comments in rendered markup
  debug_heex_annotations: true,
  # Enable helpful, but potentially expensive runtime checks
  enable_expensive_runtime_checks: true
