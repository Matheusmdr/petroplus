#!/bin/bash
# Post-deploy setup script — run via SSH after FTP upload
# Run: bash ~/petroplus_app/deploy/setup.sh

set -e

APP_DIR="$HOME/petroplus_app"
PUBLIC_DIR="$HOME/public_html"

echo "==> Copying public assets to public_html..."
cp -r "$APP_DIR/public/build" "$PUBLIC_DIR/"
cp -r "$APP_DIR/public/images" "$PUBLIC_DIR/" 2>/dev/null || true
cp "$APP_DIR/public/favicon.ico" "$PUBLIC_DIR/" 2>/dev/null || true
cp "$APP_DIR/public/robots.txt" "$PUBLIC_DIR/" 2>/dev/null || true
cp "$APP_DIR/public/.htaccess" "$PUBLIC_DIR/"
cp "$APP_DIR/deploy/index.php" "$PUBLIC_DIR/index.php"

echo "==> Setting up storage symlink..."
rm -f "$PUBLIC_DIR/storage"
ln -s "$APP_DIR/storage/app/public" "$PUBLIC_DIR/storage"

echo "==> Running migrations..."
cd "$APP_DIR"
php artisan migrate --force

echo "==> Optimizing Laravel for production..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

echo "==> Setting permissions..."
chmod -R 755 "$APP_DIR/storage"
chmod -R 755 "$APP_DIR/bootstrap/cache"

echo ""
echo "✅ Deploy complete! Visit https://petroplus.com.br"
