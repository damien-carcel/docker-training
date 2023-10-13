# Commands to use in the Dockerfile

## Install PHP with APT

```bash
export DEBIAN_FRONTEND=noninteractive
echo 'APT::Install-Recommends "0" ; APT::Install-Suggests "0" ;' > /etc/apt/apt.conf.d/01-no-recommended
echo 'path-exclude=/usr/share/doc/*' > /etc/dpkg/dpkg.cfg.d/path_exclusions
echo 'path-exclude=/usr/share/groff/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions
echo 'path-exclude=/usr/share/info/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions
echo 'path-exclude=/usr/share/linda/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions
echo 'path-exclude=/usr/share/lintian/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions
echo 'path-exclude=/usr/share/locale/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions
echo 'path-exclude=/usr/share/man/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions
apt-get update
apt-get --yes install ca-certificates curl lsb-release
curl -sSLo /usr/share/keyrings/deb.sury.org-php.gpg https://packages.sury.org/php/apt.gpg
sh -c 'echo "deb [signed-by=/usr/share/keyrings/deb.sury.org-php.gpg] https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list'
apt-get update
apt-get --yes install php8.2-apcu php8.2-cli php8.2-curl php8.2-dom php8.2-intl php8.2-mbstring php8.2-opcache php8.2-zip
apt-get clean
apt-get --yes autoremove --purge
rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```

## Run Composer

```bash
composer install --optimize-autoloader --no-interaction --no-scripts --prefer-dist --no-dev
```

Beware of your cache location

## Serve the app with PHP built-in server

```bash
php -S 0.0.0.0:8000 -t public
```
