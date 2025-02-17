defmodule ManovspaceWeb.Plugs.Locale do
  @moduledoc """
    locale configuration
  """
  import Plug.Conn

  @locales ["en", "ru"]
  @default_fallback "en"

  def init(default) when default in @locales, do: default
  def init(_default), do: @default_fallback

  def call(%Plug.Conn{params: %{"locale" => loc}} = conn, _default) when loc in @locales do
    assign(conn, :locale, loc)
  end

  def call(conn, default) do
    assign(conn, :locale, default)
  end
end
