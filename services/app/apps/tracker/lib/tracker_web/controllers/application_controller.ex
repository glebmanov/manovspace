defmodule TrackerWeb.ApplicationController do
  use TrackerWeb, :controller

  def index(conn, _params) do
    render(conn, :index, layout: false)
  end
end
