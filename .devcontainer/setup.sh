#!/usr/bin/env bash

set -e

mkdir -p ~/.cache/yarn ~/.config/yarn ~/.yarn

test -f ~/.yarnrc || touch ~/.yarnrc
