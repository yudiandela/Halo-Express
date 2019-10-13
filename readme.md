# Halo Express

Halo Express adalah sebuah aplikasi untuk membuat catatan singkat.

[Lihat Demo](https://catatan-express.herokuapp.com)

![](./index-catatan-express-baru.png)

## Mulai Gunakan Aplikasi

### Kloning Repo

```
git clone git@github.com:yudiandela/Halo-Express.git
```

### Masuk ke Directory Aplikasi

```
cd Halo-Express
```

### Install Paket yang di perlukan

```
npm install
```

### Jalankan Aplikasi

Pastikan database anda aktif dan lakukan konfigurasi database `knexfile.js`.

Import semua tabel yang di perlukan :

```
npm run migrate
```

Untuk penggunaan di server production, jalankan perintah :

```
npm start
```

Untuk penggunaan di server development, jalankan perintah :

```
npm run dev
```

## Dependencies

### Library

-   [ Express ](https://github.com/expressjs/express)
-   [ ejs template ](https://ejs.co)

### Library Query Builder SQL

-   [ Knex.js ](http://knexjs.org)

### Database Support

-   [ MySQL ](https://www.mysql.com/)
-   [ PostgreSQL ](https://www.postgresql.org)

### Style CSS

-   [ Animate CSS ](https://daneden.github.io/animate.css/)
-   [ Cosmo Bootstrap Style ](https://bootswatch.com/cosmo)

### Icon

-   [ Font Awesome ](https://fontawesome.com/)
