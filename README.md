
# Frontend diwa servie

- sebelum memulai silahkan clone dari git@10.100.113.85:outsource/frontend-diwa-webview.git


### untuk memulai pastikan node yang ada miliki minimal v20.11.0
```bash
lihat instalasi disini :
https://nodejs.org/en/download


atau jika anda memakai nvm silahkan install seperti dibawah :
- nvm install v20.10.0
- nmv list (pastikan sudah terinstall)
- nvm use v20.10.0
```

### cara install aplikasi

setelah di clone silahkan buka project
```bash
- cd:\direktori_anda\Frontend_Diwa_Webview
```

cara menjalankan projectnya anda bisa menggunakan npm atau pun yarn
*disarankan npm karna tidak disediakan yarn

```bash
menggunakan npm:
- npm install (install dulu node modulenya)
- lalu npm run dev (lihat deskripsi yang ada di package.json)
````

```bash
menggunakan yarn:
- yarn install (install dulu node modulenya)
*cek apakah sudah terdapat yarn.locknya
- lalu yarn run dev (lihat deskripsi yang ada di package.json)
````



### struktur dari aplikasi :
``` bash
Frontend_Diwa_Webview
├── node_modules
├── public
│ └── vite.svg
├── src
│ └── apis
│ └── assets
│ └── components
│ └── constantFile
│ └── layouts
│ └── pages
│    └── createNewPin
│    └── HomePage
│    └── pinInputIfUserLoginPage
│    └── registrationPage
│ └── routers
│ └── App.css
│ └── App.jsx
│ └── filenManager.json
│ └── main.jsx
│ └── index.css
├── .gitignore
├── .eslintrc.cjs
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```
