import Config

secret_key_base = System.get_env("SECRET_KEY_BASE")

tracker_port = System.get_env("TRACKER_PORT", "4001")
tracker_host = System.get_env("TRACKER_HOST", "localhost")
tracker_db = System.get_env("TRACKER_DB", "tracker_repo")
user_db = System.get_env("USER_TRACKER_DB")
pass_db = System.get_env("PASSWORD_TRACKER_DB")

if config_env() == :prod do
  maybe_ipv6 = if System.get_env("ECTO_IPV6") in ~w(true 1), do: [:inet6], else: []

  config :tracker, Tracker.Repo,
    username: user_db,
    password: pass_db,
    database: tracker_db,
    hostname: "db_tracker",
    pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10"),
    socket_options: maybe_ipv6

  config :tracker, :dns_cluster_query, System.get_env("DNS_CLUSTER_QUERY")

  config :tracker, TrackerWeb.Endpoint,
    http: [port: tracker_port],
    url: [host: tracker_host, port: 443, scheme: "https"],
    secret_key_base: secret_key_base,
    server: true
end

manovspace_port = System.get_env("MANOVSPACE_PORT", "4000")
manovspace_host = System.get_env("MANOVSPACE_HOST", "localhost")

if config_env() == :prod do
  config :manovspace, :dns_cluster_query, System.get_env("DNS_CLUSTER_QUERY")

  config :manovspace, ManovspaceWeb.Endpoint,
    http: [port: manovspace_port],
    url: [host: manovspace_host, port: 443, scheme: "https"],
    secret_key_base: secret_key_base,
    server: true
end
