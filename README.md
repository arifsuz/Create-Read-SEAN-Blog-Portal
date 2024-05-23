# Portal Blog Create Read SEAN

## Deskripsi

#### **1. Pendahuluan**
Proyek Portal Blog ini adalah platform blogging yang modern dan responsif, dibangun menggunakan stack SEAN yang terdiri dari Supabase, Express, Astro, dan Node.js. Proyek ini dirancang untuk memungkinkan pengguna membuat, mengelola, dan membaca blog post dengan antarmuka yang ramah pengguna dan performa yang optimal.

#### **2. Teknologi yang Digunakan**

1. **Supabase**:
   - **Database**: Supabase menyediakan layanan backend yang mencakup database PostgreSQL yang di-host dan API otomatis yang dapat digunakan untuk menyimpan dan mengelola data blog post, pengguna, komentar, dan lain-lain.
   - **Auth**: Layanan otentikasi yang mudah digunakan untuk mengelola login dan registrasi pengguna.

2. **Express**:
   - **Server Backend**: Express adalah framework web untuk Node.js yang digunakan untuk membangun server backend. Ini akan menangani logika bisnis, routing, dan komunikasi antara frontend dan database Supabase.

3. **Astro**:
   - **Frontend**: Astro adalah framework modern untuk membangun situs web yang cepat dan optimal. Ini digunakan untuk membangun antarmuka pengguna (UI) yang statis dan dinamis untuk portal blog ini.
   
4. **Node.js**:
   - **Runtime Environment**: Node.js menyediakan lingkungan runtime JavaScript yang memungkinkan kita untuk menjalankan kode server-side, termasuk aplikasi Express dan utilitas lainnya yang diperlukan untuk pengembangan.

#### **3. Fitur Utama**

- **Manajemen Blog Post**:
  Pengguna yang telah terautentikasi dapat membuat, mengedit, dan menghapus blog post. Setiap blog post disimpan dalam database Supabase.

- **Tampilan Responsif**:
  Antarmuka pengguna dibangun dengan Astro untuk memastikan pengalaman yang responsif dan cepat di berbagai perangkat.

- **Logic Fullstack**:
  Situs web ini dirancang untuk memberi gambaran bagaimana cara kerja sebuah sistem web base dengan Mendapatkan sebuah data dengan cara meminta persetujuan kepada API (SERVER) lalu divalidasi dan mengambil sebuah data didalam database dan memberikan respon ke tampilan utama (client).

#### **4. Struktur Proyek**

- **Backend**:
  - `server.js`: File utama untuk menginisialisasi dan menjalankan server Express.
  - `routes/`: Direktori yang berisi semua routing API untuk blog post, pengguna, dan komentar.
  - `controllers/`: Direktori yang berisi logika bisnis untuk berbagai operasi CRUD.
  - `models/`: Skema data dan model yang digunakan untuk berinteraksi dengan database Supabase.

- **Frontend**:
  - `src/pages/`: Direktori yang berisi halaman-halaman utama situs web, seperti halaman beranda, halaman blog post, dan halaman profil pengguna.
  - `src/components/`: Komponen UI yang dapat digunakan kembali, seperti header, footer, dan form komentar.
  - `public/`: Direktori yang berisi aset statis seperti gambar dan stylesheet.

- **Konfigurasi**:
  - `.env`: File konfigurasi lingkungan yang menyimpan variabel lingkungan seperti kunci API Supabase dan informasi koneksi database.

#### **5. Alur Pengembangan**

    1. **Setup Proyek**:
   - Inisialisasi proyek dengan Node.js dan instal semua dependensi yang diperlukan (`express`, `supabase`, `astro`, dll).
   - Konfigurasi Supabase dan buat proyek baru, serta atur database dan tabel yang diperlukan (users, posts, comments).

    2. **Bangun Backend**:
   - Buat server Express dan tentukan routing untuk operasi CRUD pada blog post, pengguna, dan komentar.
   - Integrasi dengan Supabase untuk menyimpan dan mengambil data.

    3. **Bangun Frontend**:
   - Gunakan Astro untuk membuat halaman dan komponen UI.
   - Integrasi dengan backend melalui API yang disediakan oleh server Express.

    4. **Pengujian dan Deployment**:
   - Uji aplikasi secara lokal untuk memastikan semua fitur berfungsi dengan benar.
   - Deploy aplikasi ke platform hosting pilihan, seperti Vercel untuk frontend dan Heroku untuk backend.

#### **6. Kesimpulan**
Proyek Portal Blog ini menunjukkan bagaimana stack SEAN (Supabase, Express, Astro, Node.js) dapat digunakan untuk membangun aplikasi web modern yang responsif dan berperforma tinggi. Dengan menggunakan teknologi-teknologi ini, kita dapat dengan mudah mengelola data, menyediakan autentikasi pengguna yang aman, dan membangun antarmuka pengguna yang ramah dan cepat.

## Setup

Berikut adalah instruksi langkah demi langkah untuk mengatur proyek ini di lingkungan lokal untuk setiap stack yang digunakan:

### Frontend: Astro

1. Clone repositori ini dengan `git clone <url-repo>`.
2. Pindah ke direktori proyek dengan `cd <nama-repo>`.
3. Install dependencies dengan `npm install`.
4. Jalankan server pengembangan lokal dengan `npm run dev`.

### Backend: Node.js, Express.js

1. Clone repositori ini dengan `git clone <url-repo>`.
2. Pindah ke direktori proyek dengan `cd <nama-repo>`.
3. Install dependencies dengan `npm install`.
4. Buat file `.env` dan isi variabel lingkungan yang diperlukan (misalnya, `DATABASE_URL` untuk URL database).
5. Jalankan server dengan `npm start`.

### Database: Supabase

1. Buat akun di [Supabase](https://supabase.io/).
2. Buat proyek baru dan ikuti petunjuk untuk mengatur database.
3. Dalam file `.env` di proyek backend Anda, set `SUPABASE_URL` dan `SUPABASE_KEY` dengan nilai yang disediakan oleh Supabase.
## Penggunaan

### GET
```
/**
 * Mengambil blog dengan ID yang diberikan.
 *
 * @param {string} id - ID blog yang akan diambil.
 * @returns {object} - Objek respons yang berisi pesan sukses.
 */
app.get('/:id', (req, res) => {
    const id = req.params.id;
    
    // Lakukan logika untuk mengambil blog dengan ID yang diberikan
    
    const blog = // Lakukan pengambilan blog dari database berdasarkan ID
    
    if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
    }
    
    return res.json({ message: 'Blog retrieved successfully', blog });
});
```

### POST
```
/**
 * Membuat blog baru.
 *
 * @param {object} req - Objek permintaan yang berisi data blog yang akan dibuat.
 * @param {object} res - Objek respons yang akan mengembalikan pesan sukses.
 */
app.post('/', (req, res) => {
    const { title, content } = req.body;
    
    // Lakukan logika untuk membuat blog baru
    
    const newBlog = {
        id: "456",
        title,
        content
    };
    
    return res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
});
```

**Endpoint:**

```ENDPOINT
http://localhost:3030/
```

**Respons:**

```json
{
    "message": "Blog retrieved successfully",
    "blog": {
        "id": "123",
        "title": "Sample Blog",
        "content": "This is a sample blog post"
    }
}
```
## Tech Stack

**Client:** Astro

### Frontend: Astro

[Astro](https://astro.build/) adalah generator situs statis modern yang memungkinkan Anda membangun situs web yang lebih cepat dengan kurang JavaScript. Astro memungkinkan Anda menulis komponen dalam bahasa favorit Anda (seperti JavaScript, TypeScript, JSX, dan lainnya) dan kemudian merendernya sebagai HTML statis pada build time. Hasilnya adalah situs web yang sangat cepat dan optimal.

**Server:** Node, Express

### Backend: Node.js, Express.js

[Node.js](https://nodejs.org/) adalah runtime JavaScript yang memungkinkan Anda menjalankan JavaScript di server. Node.js sangat populer untuk pengembangan backend karena memungkinkan Anda menggunakan JavaScript, bahasa yang sudah dikenal oleh banyak pengembang frontend, di server.

[Express.js](https://expressjs.com/) adalah framework web untuk Node.js yang menyederhanakan pengembangan aplikasi web. Express.js menyediakan fitur-fitur seperti routing, middleware, dan template engine, yang membuatnya lebih mudah untuk membangun aplikasi web dan API.

**Database:** Supabase

### Database: Supabase

[Supabase](https://supabase.io/) adalah alternatif open source untuk Firebase. Seperti Firebase, Supabase menyediakan berbagai layanan backend seperti database real-time, autentikasi, penyimpanan, dan fungsi serverless. Namun, berbeda dengan Firebase, Supabase menggunakan PostgreSQL, sebuah database SQL yang kuat dan fleksibel, sebagai database utamanya.
## Installation NODE JS
Instalasi Node.js pada sistem operasi yang berbeda memiliki sedikit perbedaan. Berikut ini adalah panduan instalasi untuk berbagai sistem operasi: Windows, macOS, dan Linux.

### Windows

1. **Unduh Installer Node.js**:
   Kunjungi [situs resmi Node.js](https://nodejs.org/) dan unduh installer Windows yang sesuai (LTS atau Current).

2. **Jalankan Installer**:
   Jalankan file installer yang telah diunduh (`.msi`). Ini akan membuka jendela setup.

3. **Ikuti Panduan Instalasi**:
   Ikuti langkah-langkah yang ditunjukkan oleh installer. Biasanya Anda hanya perlu menekan tombol "Next" beberapa kali dan menyetujui lisensi. Pastikan untuk mencentang opsi "Automatically install the necessary tools" jika ditawarkan.

4. **Verifikasi Instalasi**:
   Setelah instalasi selesai, buka Command Prompt atau PowerShell, kemudian jalankan perintah berikut untuk memastikan Node.js dan npm telah terinstal dengan benar:
   ```bash
   node -v
   ```
   ```bash
   npm -v
   ```
   Perintah tersebut akan menampilkan versi Node.js dan npm yang telah terinstal.

### macOS

1. **Menggunakan Homebrew**:
   Jika Anda menggunakan Homebrew, instalasi Node.js sangat sederhana. Jalankan perintah berikut di Terminal:
   ```bash
   brew install node
   ```

2. **Unduh Installer Node.js**:
   Alternatifnya, Anda bisa mengunduh installer dari [situs resmi Node.js](https://nodejs.org/). Unduh versi macOS (`.pkg`) dan jalankan installer tersebut.

3. **Verifikasi Instalasi**:
   Buka Terminal dan jalankan perintah berikut untuk memastikan Node.js dan npm telah terinstal dengan benar:
   ```bash
   node -v
   ```
   ```bash
   npm -v
   ```

### Linux

Instalasi Node.js di Linux bisa dilakukan dengan beberapa cara, salah satu cara yang direkomendasikan adalah menggunakan Node Version Manager (nvm).

1. **Instal nvm**:
   Jalankan perintah berikut untuk mengunduh dan menginstal nvm:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```
   Setelah instalasi selesai, tutup dan buka kembali terminal atau jalankan perintah berikut untuk memuat nvm:
   ```bash
   source ~/.bashrc
   ```

2. **Instal Node.js Menggunakan nvm**:
   Dengan nvm terinstal, Anda dapat menginstal Node.js versi terbaru dengan perintah:
   ```bash
   nvm install node
   ```
   Anda juga bisa menginstal versi spesifik, misalnya:
   ```bash
   nvm install 14.17.0
   ```

3. **Verifikasi Instalasi**:
   Jalankan perintah berikut untuk memastikan Node.js dan npm telah terinstal dengan benar:
   ```bash
   node -v
   ```
   ```bash
   npm -v
   ```

Dengan mengikuti panduan di atas sesuai dengan sistem operasi yang Anda gunakan, Anda dapat menginstal Node.js dengan mudah dan mulai mengembangkan aplikasi JavaScript di lingkungan lokal Anda.

## Installation ASTRO
Astro adalah framework modern untuk membangun situs statis yang cepat. Instalasi Astro cukup sederhana dan dapat dilakukan dengan mengikuti beberapa langkah dasar. Berikut ini adalah panduan umum untuk menginstal Astro:

### Prasyarat
1. **Node.js**: Pastikan Anda memiliki Node.js versi terbaru yang sudah terinstal di komputer Anda. Anda dapat mengunduhnya dari [situs resmi Node.js](https://nodejs.org/).

2. **npm**: npm biasanya sudah terinstal bersama Node.js. Namun, jika Anda lebih suka menggunakan yarn, itu juga didukung.

### Langkah-langkah Instalasi Astro

1. **Buat Proyek Baru dengan Astro**:
   Anda dapat membuat proyek baru dengan menggunakan perintah `npm init astro` atau `yarn create astro`. Berikut contoh menggunakan npm:
   ```bash
   npm init astro
   ```

2. **Ikuti Panduan Interaktif**:
   Setelah menjalankan perintah di atas, Anda akan diminta untuk menjawab beberapa pertanyaan untuk mengonfigurasi proyek Anda, seperti nama proyek dan template yang ingin digunakan.

3. **Pindah ke Direktori Proyek**:
   Pindah ke direktori proyek yang baru dibuat:
   ```bash
   cd nama-proyek-anda
   ```

4. **Instal Dependensi**:
   Setelah membuat proyek dan berpindah ke direktori proyek, instal semua dependensi yang diperlukan dengan perintah:
   ```bash
   npm install
   ```
   atau jika menggunakan yarn:
   ```bash
   yarn install
   ```

5. **Jalankan Server Pengembangan**:
   Setelah semua dependensi terinstal, Anda bisa memulai server pengembangan dengan perintah:
   ```bash
   npm run dev
   ```
   atau
   ```bash
   yarn dev
   ```

   Server pengembangan akan berjalan dan Anda bisa mengakses proyek Anda melalui browser dengan membuka `http://localhost:3000` sebagai contoh.

### Menyebarkan Proyek Astro
Setelah selesai mengembangkan situs Anda dengan Astro, Anda dapat membangunnya untuk produksi dan menyebarkannya. Untuk membangun proyek, gunakan perintah berikut:
```bash
npm run build
```
atau
```bash
yarn build
```

Proyek Anda akan dibangun dan outputnya akan berada di folder `dist` (atau yang ditentukan dalam konfigurasi Astro). Anda dapat menyebarkan isi folder ini ke hosting statis pilihan Anda, seperti Netlify, Vercel, atau GitHub Pages.

### Catatan Tambahan
- **Dokumentasi Resmi**: Untuk informasi lebih lanjut dan panduan mendetail, kunjungi [dokumentasi resmi Astro](https://docs.astro.build/).
- **Template dan Contoh Proyek**: Astro menyediakan berbagai template dan contoh proyek yang bisa membantu Anda memulai dengan cepat.

Dengan mengikuti langkah-langkah di atas, Anda seharusnya bisa menginstal dan memulai proyek dengan Astro tanpa masalah. Selamat mencoba!.

## Kontribusi

Jika Anda ingin berkontribusi ke proyek ini, Anda dapat mengikuti langkah-langkah berikut:

1. Fork repositori ini ke akun GitHub Anda.
2. Clone repositori hasil fork ke komputer lokal Anda.
3. Pindah ke direktori proyek dengan `cd <nama-repo>`.
4. Buat branch baru untuk fitur atau perbaikan yang akan Anda tambahkan dengan `git checkout -b <nama-branch>`.
5. Lakukan perubahan yang diperlukan pada kode.
6. Commit perubahan Anda dengan pesan yang jelas dan deskriptif menggunakan `git commit -m "Deskripsi perubahan"`.
7. Push branch ke repositori GitHub Anda dengan `git push origin <nama-branch>`.
8. Buka halaman repositori hasil fork di GitHub dan buat pull request baru.
9. Isi deskripsi pull request dengan jelas menjelaskan perubahan yang Anda buat.
10. Tunggu tanggapan dan diskusi dari pemilik repositori.

Pastikan untuk mengikuti aturan dan pedoman kontribusi yang ditetapkan oleh proyek ini. Ini mungkin termasuk hal-hal seperti kode etik, gaya penulisan, dan proses review kode.

Proses pull request melibatkan mengusulkan perubahan kode ke repositori utama. Setelah pull request dibuat, pemilik repositori akan meninjau perubahan Anda dan memutuskan apakah akan menggabungkannya ke repositori utama atau tidak. Diskusi dan perbaikan mungkin diperlukan sebelum pull request dapat diterima.

Pastikan untuk memahami dan mengikuti proses pull request yang ditetapkan oleh proyek ini. Ini mungkin termasuk langkah-langkah seperti pengujian kode, peninjauan kode oleh rekan kerja, dan persyaratan dokumentasi.

Selalu berkomunikasi dengan pemilik repositori dan tim proyek untuk memastikan bahwa kontribusi Anda sesuai dengan kebutuhan dan harapan mereka.

**Developed by: Muhamad Nur Arif**

**Website:** https://arifsuz.vercel.app/

**LinkedIn:** https://www.linkedin.com/in/marif8/
## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2024 Muhamad Nur Arif

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.#