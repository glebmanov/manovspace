defmodule TrackerWeb.Router do
  use TrackerWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_live_flash)
    plug(:put_root_layout, html: {TrackerWeb.Layouts, :root})
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  # Enable LiveDashboard in development
  if Application.compile_env(:tracker, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through(:browser)

      live_dashboard("/dashboard", metrics: TrackerWeb.Telemetry)
    end
  end

  scope "/", TrackerWeb do
    pipe_through(:browser)

    get("/", ApplicationController, :index)
    get("/*path", ApplicationController, :index)
  end

  # Other scopes may use custom stacks.
  # scope "/api", TrackerWeb do
  #   pipe_through :api
  # end
end
