FROM laravelsail/php80-composer:latest

# Instalar dependencias necesarias
RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev pkg-config libssl-dev

# Instalar la extensión de MongoDB
RUN pecl install mongodb && docker-php-ext-enable mongodb

# Otros comandos de instalación necesarios
# ...

# Configuración de Laravel Sail
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY . /var/www/html

WORKDIR /var/www/html

# Ejecutar Sail
ENTRYPOINT ["./vendor/bin/sail"]
CMD ["up"]
