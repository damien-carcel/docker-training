#!/usr/bin/env bash

set -e

yarn_cache_dir=~/.cache/yarn
mkdir -p $yarn_cache_dir

yarn_config_dir=~/.config/yarn
mkdir -p $yarn_config_dir

yarn_rc=~/.yarnrc
test -f $yarn_rc || touch $yarn_rc
