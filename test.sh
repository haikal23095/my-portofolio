#!/bin/bash

# Setel agar skrip berhenti jika ada perintah yang gagal
set -e

echo "Running Simple Validation Test..."

# 1. Periksa apakah file index.html ada
if [ ! -f "index.html" ]; then
    echo "ERROR: File index.html tidak ditemukan!"
    exit 1
fi

# 2. Periksa apakah konten "NIM:" ada di dalam file
# 'grep -q' berarti 'quiet mode', hanya mengembalikan status (0 jika ketemu, 1 jika tidak)
if ! grep -q "NIM:" "index.html"; then
    echo "VALIDATION FAILED: Teks 'NIM:' tidak ditemukan di index.html."
    exit 1
fi

# 3. Periksa apakah konten "Nama:" ada
if ! grep -q "Nama:" "index.html"; then
    echo "VALIDATION FAILED: Teks 'Nama:' tidak ditemukan di index.html."
    exit 1
fi

echo "VALIDATION PASSED: Semua konten yang dibutuhkan ada."
exit 0