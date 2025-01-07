import Config

phx_server = System.get_env("PHX_SERVER")
port = System.get_env("MANOVSPACE_PORT", "4000")
host = System.get_env("MANOVSPACE_HOST", "localhost")
# TODO: .env
secret_key_base = System.get_env("SECRET_KEY_BASE", "temporary")

if phx_server do
  config :manovspace, ManovspaceWeb.Endpoint, server: true
end

if config_env() == :prod do
  secret_key_base =
    secret_key_base ||
      raise """
      environment variable SECRET_KEY_BASE is missing.
      You can generate one by calling: mix phx.gen.secret
      """

  config :manovspace, :dns_cluster_query, System.get_env("DNS_CLUSTER_QUERY")

  config :manovspace, ManovspaceWeb.Endpoint,
    http: [port: port],
    url: [host: host, port: 443, scheme: "https"],
    secret_key_base: secret_key_base,
    server: true

  # ## SSL Support
  #
  # To get SSL working, you will need to add the `https` key
  # to your endpoint configuration:
  #
  #     config :manovspace, ManovspaceWeb.Endpoint,
  #       https: [
  #         ...,
  #         port: 443,
  #         cipher_suite: :strong,
  #         keyfile: System.get_env("SOME_APP_SSL_KEY_PATH"),
  #         certfile: System.get_env("SOME_APP_SSL_CERT_PATH")
  #       ]
  #
  # The `cipher_suite` is set to `:strong` to support only the
  # latest and more secure SSL ciphers. This means old browsers
  # and clients may not be supported. You can set it to
  # `:compatible` for wider support.
  #
  # `:keyfile` and `:certfile` expect an absolute path to the key
  # and cert in disk or a relative path inside priv, for example
  # "priv/ssl/server.key". For all supported SSL configuration
  # options, see https://hexdocs.pm/plug/Plug.SSL.html#configure/1
  #
  # We also recommend setting `force_ssl` in your config/prod.exs,
  # ensuring no data is ever sent via http, always redirecting to https:
  #
  #     config :manovspace, ManovspaceWeb.Endpoint,
  #       force_ssl: [hsts: true]
  #
  # Check `Plug.SSL` for all available options in `force_ssl`.
end
