
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
│     └── configuration_css
│         ── Config.json
│     └── configuration_language
│         ── ConfigEnLanguage.json
│         ── ConfigIdLanguage.json
│     ── ErrorPage.jsx
│     ── ModalSyaratKetentuan.jsx
│ └── constantFile
│     ── I_Constant.jsx
│ └── layouts
│ └── pages
│    └── accordionTopupPage
│         ── AccordionTopUp.jsx
│    └── createNewPinPage
│         ── ConfirmationPin.jsx
│         ── CreatePin.jsx
│    └── pageHome
│         ── InputNoHp.jsx
│    └── pinInputIfUserLoginPage
│         ── InputPin.jsx
│    └── registrationPage
│         ── Register.jsx
│     ── SuccessPin.jsx
│ └── routers
│     ── Index.jsx
│ └── service
│     ── APIServices.jsx
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

Buat new file dengan nama Dockerfile
copy script ini : 

## STAGE 1: Build ###
FROM node:20.11.0-alpine AS build
RUN apk update && apk add bash && apk add less && apk add nano

WORKDIR /FRONTEND_DIWA_WEBVIEW
COPY package.json /FRONTEND_DIWA_WEBVIEW
RUN npm install
COPY ./ /FRONTEND_DIWA_WEBVIEW/
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
RUN apk update && apk add bash && apk add less && apk add nano

RUN rm /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /fe/build /usr/share/nginx/html

-------------===========================-------------------

Kemudian jalankan commend ini pada terminal : 

docker buildx build --platform linux/amd64 --push -t itdevbankdki/svc-diwa-webview-fe:tag_image .

catatan tag_image : wajib diganti dengan angka bebas lepas tinggal semua itu