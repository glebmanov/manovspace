defmodule ManovspaceWeb.PageController do
  use ManovspaceWeb, :controller

  # plug(:plug_me)

  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.

    render(conn, :home, layout: false)
  end

  # defp plug_me(conn, opts) do
  #   IO.puts("INSPECTING OPTS")
  #   opts |> IO.inspect()
  #   IO.puts("=====")

  #   IO.puts("INSPECTING CONN")
  #   conn |> IO.inspect()
  #   IO.puts("=====")

  #   conn
  # end
end
