defmodule ManovspaceUmbrella.MixProject do
  use Mix.Project

  def project do
    [
      name: "Manovspace Umbrella",
      apps_path: "apps",
      version: "0.1.0",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      releases: [
        manovspace: [
          applications: [manovspace: :permanent],
          validate_compile_env: false
        ]
      ]
    ]
  end

  defp deps do
    [
      {:credo, "~> 1.7", only: [:dev, :test], runtime: false},
      {:dialyxir, "~> 1.1", only: [:dev], runtime: false}
    ]
  end
end
