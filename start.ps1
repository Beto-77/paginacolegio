# Script para iniciar la aplicación del Colegio

Write-Host "`n" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Iniciando Aplicación del Colegio" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Cambiar al directorio del proyecto
Set-Location -Path $PSScriptRoot

# Verificar si npm está instalado
try {
    $npmVersion = npm --version
    Write-Host "[✓] npm encontrado: v$npmVersion" -ForegroundColor Green
} catch {
    Write-Host "[✗] ERROR: npm no está instalado." -ForegroundColor Red
    Write-Host "Por favor, instala Node.js desde https://nodejs.org" -ForegroundColor Yellow
    pause
    exit 1
}

# Instalar dependencias
Write-Host "`n[1/3] Instalando dependencias..." -ForegroundColor Yellow
npm install --legacy-peer-deps

if ($LASTEXITCODE -ne 0) {
    Write-Host "[✗] ERROR: No se pudieron instalar las dependencias." -ForegroundColor Red
    pause
    exit 1
}

Write-Host "[✓] Dependencias instaladas exitosamente" -ForegroundColor Green

# Iniciar servidor
Write-Host "`n[2/2] Iniciando servidor de desarrollo..." -ForegroundColor Yellow
Write-Host "La aplicación se abrirá en: http://localhost:3000`n" -ForegroundColor Cyan

npm start

pause
