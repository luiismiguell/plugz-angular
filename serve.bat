@echo off
chcp 65001 > nul
set NG_DISABLE_VERSION_CHECK=1
npx ng serve --host localhost --port 4200