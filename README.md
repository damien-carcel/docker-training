# How to use Docker and Docker Compose for PHP development

## How to use the presentation

- Install the dependencies:
  ```bash
  $ docker compose run --rm node yarn install --frozen-lockfile --check-files
  ```

- Use the development server to serve the presentation and have hot-reloading while coding:
  ```bash
  $ docker compose run --rm node yarn dev --host
  ```

- or build the artifacts, then serve the presentation in a production-like mode:
  ```bash
  $ docker compose run --rm node yarn build
  $ docker compose run --rm node yarn preview --host
  ```

## License

This repository is under the MIT license. You can see the complete license in the [LICENSE](./LICENSE) file.
