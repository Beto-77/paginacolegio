@echo off
REM Script para iniciar la aplicación del Colegio
REM Este script instala dependencias y inicia el servidor de desarrollo

echo.
echo ========================================
echo   Iniciando Aplicación del Colegio
echo ========================================
echo.

cd /d "%~dp0"

REM Verificar si npm está instalado
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: npm no está instalado.
    echo Por favor, instala Node.js desde https://nodejs.org
    pause
    exit /b 1
)

echo [1/3] Instalando dependencias...
call npm install --legacy-peer-deps

if %errorlevel% neq 0 (
    echo ERROR: No se pudieron instalar las dependencias.
    pause
    exit /b 1
)

echo.
echo [2/3] Compilando proyecto...
call npm run build

if %errorlevel% neq 0 (
    echo ERROR: Hubo un problema al compilar.
    pause
    exit /b 1
)

echo.
echo [3/3] Iniciando servidor de desarrollo...
call npm start

pause
