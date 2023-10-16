# Training Plan

## Slide Template

```html
<section>
  <h2>Title</h2>

  <div class="centered-slide-content">
    <ul>
      <li class="fragment">A point</li>
    </ul>

    <pre class="fragment"><code class="shell">
$ command associated to above point
    </code></pre>
  </div>

  <aside class="notes">
    <p>Some comments</p>
  </aside>
</section>
```

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
    - introduce `--rm` option of `docker container run`
- Going further - environment variables, volumes and users
  - [x] env variables
    - Try to echo a variable through `docker container run -e MY_VAR="test" debian:stable-slim sh -c 'echo $MY_VAR'`
    - First, export MY_VAR on host, run without `-e` → nothing, run with `-e MY_VAR` → display host value. - Careful: '', not "".
  - volumes:
    - [x] Real volumes
      - Create a named volume
      - Bind-mount it, create a file in the container
      - Stop the container (ensure to have use `--rm`) and check the files are still here
      - Delete the volume
    - [x] Bind-mount host data
      - Bind-mount local folder
      - Beware of binding directories that do not exist yet on the host
      - Try to create a file with touch → oops, root!
  - [x] user: fix the above issue
- Run the Symfony project with PHP internal server
  - [x] use composer to create a symfony project with `docker container run`
    - Combine everything we saw until now
    - Customize the paths for Composer cache and config through volumes and environment variables
  - [x] serve the app
    - first with `docker container run --rm` direclty
    - introduce "detached" mode and port mapping
    - introduce `docker container logs`
    - introduce `docker container exec`
    - introduce `docker container stop`
- Networks
  - [x] Can we access the app from another container?
- Let's build our own image - practice the Dockerfile
  - [x] debian slim as a base, install PHP and needed extensions
    - back to layers, important to not create too many of them once we're OK with the image
    - OK to create many for tests to gain time
    - Clean-up must be performed in the same layer that wasted space, or no effect
    - COPY, ENV, ARG, etc...
  - [x] Exercise:
    - Build an image running the PHP internal Server with the Symfony app inside the image
    - launch the server from the image in production mode with right user
      - should only need `docker container run -P -d image`
  - [x] Multistage building
    - Separate the image in base, build and prod
    - Build both prod and dev stages

## Docker Compose

- [x] Compose → Use YAML instead of commands with lot of options
  - present compose v2
  - encourage use of v2 vs v1 (no buildx and efficient cache without config, abandoned since July)
  - Show an example of the specification, with every concepts presented in the previous section
- [x] Put as a compose file what was done previously
  - no build for now, use the existing image build with Docker
  - present deploy.replicas and port ranges (show how exec and logs behave)
  - Clean the orphans (rename the service) when stopping
  - Run does not do port mapping by default, need an option
- [x] Build the image directly with compose
- [ ] Run the app through nginx and FPM
  - Bind-mount the code to use the built-in server for dev
  - Add a dev stage for CLI operations
  - Reuse parts of yaml through merge key
  - use volumes to share data between both (read-only for nginx and only what it needs: public directory)
  - Run only nginx (use require on FPM)
  - Clean the volumes at down

## Running and Debugging with PHPStorm

- [ ] A PHP setup with no PHP installation on the host
- [ ] XDebug

## TODO

- Harmonize exercises with "practice", "constraints", "goal"
- Put a glossary at the end of the Docker and Docker Compose sections
