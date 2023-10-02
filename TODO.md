# Training Plan

## Introduction to Docker

- [x] What is and is not Docker?
  - Containers vs Virtual machines
- [x] How does it works
  - Docker components (shim, engine, etc...)
  - The Dockerfile as instructions to assemble an image

## How to use Docker

- Using Docker - the very basics
  - [x] invoke the command
  - [x] pull an image
    - pull 2 different tags and show the result
      - debian:bookworm-slim
      - debian:12-slim
    - introduce the notion of layers
      - show that the layers are the same, no double space
  - [x] run an container from this image
    - you could run it directly, it would pull it for you if you need. But you need to explicitly pull for update.
    - goal: be in the containers and having access to bash (interactive mode needed)
    - introduce `--rm` option of `docker run`
- Going further - environment variables, volumes and users
  - [ ] env variables
    - Try to echo a variable through `docker run -e TATA="test" debian:bookworm-slim sh -c 'echo $TATA'`
    - First, export TATA on host, run without `-e` → nothing, run with `-e TATA` → display host value.
    - Careful: '', not "".
  - [ ] volumes:
    - Simply try to mount local folder
    - create a file with touch → oops, root!
  - [ ] user: fix the above issue
  - [ ] all of that together: use composer to create a symfony project with `docker run`
- Run the Symfony project with PHP internal server
  - [ ] introduce "detached" mode
  - [ ] introduce `docker logs`
- Networks
  - [ ] Let's try to run the app twice, same internal port
    - shouldn't work because of port conflict
- Let's build our own image - practice the Dockerfile
  - [ ] debian slim as a base, install PHP and needed extensions
    - back to layers, important to not create to many of them once we're OK with the image
    - OK to create many for tests to gain time
    - Clean-up must be performed in the same layer that wasted space, or no effect
  - [ ] launch the server from the image in production mode with right user
    - should only need `docker run -d image`
    - introduce `docker exec`
  - [ ] put logs in a file thanks to monolog and expose them through a volume
    - shows that volumes are not only for bind mount
    - access the volume from another container
- Summary
  - [ ] Glossary of commands

## Docker Compose

- [ ] Compose → Use YAML instead of commands with lot of options
  - present compose v2
- [ ] Put as a compose file what was done previously
  - no build for now, use the existing image build with Docker
- [ ] Build the image directly with compose
- [ ] Run the app through nginx and FPM
  - separate the 2 in different networks
  - use volumes to share data between both (read-only for nginx and only what it needs: public directory)
  - Run and stop them separately, then together
  - Clean the volumes and orphans (rename a service) when stopping

## Running and Debugging with PHPStorm

- [ ] A PHP setup with no PHP installation on the host
- [ ] XDebug
