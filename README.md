# How to use Docker and Docker Compose for PHP development

## How to use the presentation

- Install the dependencies:

  ```bash
  $ docker compose run --rm dev yarn install --frozen-lockfile --check-files
  ```

- Use the development server to serve the presentation and have hot-reloading while coding:

  ```bash
  $ docker compose up -d dev
  ```

- or build the artifacts, then serve the presentation in a production-like mode:
  ```bash
  $ docker compose up -d prod
  ```

## License

This repository is under the MIT license. You can see the complete license in the [LICENSE](./LICENSE) file.

## TODO

- Try to remove "dev" and "prod" services and launch them instead in background in the dev container to forward the ports
- Test Docker in Docker instead if it doesn't work
- Update this readme for the "how to use part" to include VS Code Dev Containers (or replace it by it depending on the success of the 2 points above)
- Add a CI (GitHub actions or CircleCi?)
