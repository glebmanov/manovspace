defmodule Mix.Tasks.Webbuild do
  use Mix.Task
  require Logger

  def run(args) do
    Logger.info("Compiling frontend...")

    case args do
      ["prod"] -> System.cmd("npm", ["run", "build"], cd: "./frontend")
      ["dev"] -> System.cmd("npm", ["run", "dev"], cd: "./frontend")
    end

    Logger.info("Frontend ready.")
  end
end
