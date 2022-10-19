#!/bin/bash

export PGPASSWORD='node_password'

echo "Configuring accountdb"

dropdb -U node_user accountdb
createdb -U node_user accountdb

psql -U node_user accountdb < ./bin/sql/account.sql

echo "accountdb configured successfully"