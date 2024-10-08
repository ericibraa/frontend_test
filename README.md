FRONTEND TEST

## Environment Configuration

Proyek ini menggunakan file `.env` untuk menyimpan Environment Configuration. Anda perlu membuat file `.env` di root proyek dan menambahkan variabel-variabel berikut agar aplikasi berjalan dengan baik.

```plaintext
# Contoh file .env

# URL API untuk mendapatkan daftar game
NUXT_GAMES=

# URL API untuk mendapatkan detail game
NUXT_DETAIL_GAMES=
```

Setelah itu lakukan instal

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```
