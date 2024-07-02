#!/bin/bash
set -e

# Attendre que MySQL soit prêt
until mysqladmin ping -h db --silent; do
  echo 'waiting for mysqld to be connectable...'
  sleep 1
done

# Exécuter les migrations Prisma
npx prisma migrate deploy

# Lancer l'application
exec "$@"
