<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Analisa website ini [www.leanlytics.co](https://www.leanlytics.co), saya ingin migrasi landing page dari framer dengan menggunakan anitgravity agar bisa di self hosted ke server sendiri. Bantu saya bikint planning tech spec doc KHUSUS UNTUK FRONT END TANPA INTEGRASI DAN DATABASE yang lengkap dan bisa cloning dengan tingkat akurasi 100% sama.

Dan Tambahkan pula end to end flow untuk generate AI Research assitant nya di route ini: [https://www.leanlytics.co/ai-research-assistant](https://www.leanlytics.co/ai-research-assistant). Jadi user akan mengklik tombol generate now dan akan diarahkan ke dalam halaman form pada link [https://www.leanlytics.co/ai-research-assistant](https://www.leanlytics.co/ai-research-assistant) setelah user mengisi semua form tersebut user akan diminta untuk melakukan konfirmasi pembayaran dengan rincian seperti gambar pada attachment setelah itu user menekan lanjut bayar maka akan muncul sebuah tampilan "Bayar Sebelum (Dengan Countdown" yang memuat informasi pembayaran melalui QRIS dengan tombol kofirmasi pembayaran untuk melihat status pembayaran dari sisi user. Jika pembayaran berhasil maka akan ada notifikasi pembayaran berhasil dan output research reportnya akan dikirimkan melalui email kurang lebih 2-4 menit prosesnya.

Berikut adalah **Frontend Technical Specification Document (PRD)** dan **User Flow Design** untuk migrasi landing page Leanlytics dari Framer ke solusi self-hosted (menggunakan basis Next.js yang umum digunakan pada boilerplate seperti AntiGravity).

Dokumen ini dirancang khusus untuk **Frontend Only** (UI/UX \& Interaction) tanpa logika backend, menggunakan *mock data* untuk simulasi interaksi 100% akurat.

***

## 1. Project Overview \& Tech Stack

**Tujuan:** Cloning visual 1:1 dari Framer ke kode React yang bersih (clean code) agar bisa di-hosting sendiri, dengan fokus pada performa dan SEO.

### Tech Stack (Frontend)

* **Framework:** Next.js 14/15 (App Router) - *Standar SEO \& Performa*.
* **Styling:** Tailwind CSS - *Untuk kecepatan styling dan konsistensi*.
* **Animation:** Framer Motion - *Wajib digunakan untuk mereplikasi animasi "smooth" bawaan Framer*.
* **Icons:** Lucide React / Heroicons.
* **State Management:** Zustand atau React Context (Untuk simulasi flow data antar halaman tanpa backend).
* **Font:** (Sesuaikan dengan Framer, biasanya Inter atau Plus Jakarta Sans) - *Load via Next/Font*.

***

## 2. Component Architecture (Landing Page)

Halaman ini (`/`) bersifat statis dengan animasi scroll.

### 2.1. Global Layout

* **Navbar:** Sticky dengan efek *glassmorphism* (blur backdrop). Menu: Services, Use Case, Pricing. Tombol CTA: "Talk to Us" (Primary).
* **Footer:** Grid layout memuat HQ Address, Copyright, dan Link navigasi.[^1]


### 2.2. Section Breakdown

1. **Hero Section:**
    * **Headline:** "Gain Deep Insights \& Automate Research..." dengan animasi *fade-in up*.
    * **Sub-headline:** Highlight "Special Price IDR 10.000" dan "100% Free Credits" menggunakan *badge component*.
    * **CTA:** Tombol kontras tinggi.
2. **Value Props (Grid):**
    * 3 Kartu: "2X More Faster", "Certified Researcher", "Research Innovation".
    * *Interaction:* Hover effect (scale up 1.05) pada kartu.
3. **Services Carousel/Grid:**
    * Menampilkan "End to End Research", "AI Survey Generator", "AI Auto Analysis".
    * Gunakan komponen `Tabs` atau `ScrollArea` horizontal untuk tampilan mobile.
4. **Testimonials (Marquee/Slider):**
    * Komponen slider otomatis untuk review dari "Peri Agus (Grab)" dan "Moh. Zein (Selintas Madiun)".[^1]
5. **Bejo Finance Teaser:**
    * Section khusus dengan background berbeda untuk memperkenalkan produk "Bejo Finance" dengan tombol CTA WhatsApp.

***

## 3. End-to-End Flow: AI Research Assistant

**Route:** `/ai-research-assistant`

Flow ini murni frontend menggunakan *client-side state* untuk perpindahan "step".

### State Flow Diagram

`Idle (Form)` -> `Review (Order Summary)` -> `Payment (QRIS & Countdown)` -> `Success (Notification)`

### Detail Komponen \& Flow

#### Step 1: Landing \& Form Input

* **URL:** `/ai-research-assistant`
* **UI Action:** User mengklik "Generate Now" dari Home, diarahkan ke sini.
* **Components:**
    * **Header:** Judul "AI Research Assistant" \& Deskripsi singkat.
    * **Multi-step Form:**
        * *Input 1:* Topic / Research Objective (Textarea).
        * *Input 2:* Target Audience (Dropdown: Gender, Age, SES, Domicile - sesuai lampiran ).[^1]
        * *Input 3:* Jumlah Responden (Slider/Input Number).
    * **Sticky Bottom Bar:** Tombol "Next / Review Order".


#### Step 2: Konfirmasi Pembayaran (Order Summary)

* **Trigger:** Setelah user mengisi form dan klik "Next".
* **UI:** Card ringkasan (seperti struk belanja).
    * **Item:** "Premium Research Report".
    * **Detail:** (Menampilkan data yang diinput user sebelumnya).
    * **Price:** IDR 10.000 (Coret harga lama/diskon).
    * **Total:** IDR 10.000.
* **Action Button:** "Lanjut Bayar" (Primary Color).


#### Step 3: Halaman Pembayaran (Mock QRIS)

* **Trigger:** Klik "Lanjut Bayar".
* **UI Components:**
    * **Countdown Timer:** Teks besar "Bayar Sebelum: [MM:SS]" (Set timer mundur 15 menit).
    * **QRIS Container:**
        * Tampilkan gambar QR Code (Placeholder image).
        * Logo yang didukung (Gopay, OVO, Dana, BCA).
        * Instruksi: "Scan QR di atas menggunakan e-wallet favorit Anda".
    * **Status Checker:** Tombol "Cek Status Pembayaran" (Simulasi loading 2 detik).
* **Interaction Logic (Mock):**
    * User klik "Cek Status Pembayaran".
    * Tampilkan spinner loading.
    * *Set Timeout:* Setelah 2 detik, otomatis trigger state `Success`.


#### Step 4: Success State \& Delivery

* **Trigger:** Sukses dari simulasi cek status.
* **UI Components:**
    * **Success Animation:** Icon checkmark hijau dengan animasi *scale-in* (gunakan Lottie atau Framer Motion).
    * **Text:** "Pembayaran Berhasil!".
    * **Info Banner:** "Report Anda sedang diproses oleh AI Engine kami."
    * **Delivery Note:** "Hasil riset (PDF) akan dikirimkan ke email Anda dalam waktu **2-4 menit**."
    * **Button:** "Kembali ke Beranda".

***

## 4. Implementation Prompts (Vibe Coding)

Anda bisa menggunakan prompt ini di Cursor/Windsurf untuk men-generate kode tersebut.

**Prompt 1: Setup \& Landing Page**
> "Act as an expert Frontend Engineer. Create a landing page for 'Leanlytics' using Next.js 14 App Router, Tailwind CSS, and Framer Motion. The design should be clean, modern, and pixel-perfect for a SaaS product. Create a component structure for: Hero section, Feature Grid, Testimonial Slider, and Footer based on the text content I will provide. Ensure the page is fully responsive."

**Prompt 2: AI Research Flow (The Logic)**
> "Create a new route `/ai-research-assistant`. Build a multi-step wizard form using `zustand` for state management (no backend).
>
> **Steps:**
> 1. **Input:** Form for Research Topic and Audience Demographics.
> 2. **Summary:** Show the inputs and a fixed price of IDR 10.000.
> 3. **Payment:** Show a mock QRIS image and a 15-minute countdown timer ('Bayar Sebelum...'). Include a button 'Cek Status Pembayaran'.
> 4. **Logic:** When clicking 'Cek Status', simulate a 3-second loading, then show a Success Card saying 'Payment Successful. Report will be sent to email in 2-4 minutes'. Use Framer Motion for smooth transitions between steps."

***

## 5. Asset \& Data Requirements (Mock)

Untuk mencapai "100% clone", Anda perlu menyiapkan aset dummy ini di folder `/public`:

1. `logo-leanlytics.svg`
2. `hero-illustration.png` (Dashboard abstract).
3. `qris-mock.png` (Gambar QR Code dummy).
4. `testimonial-avatar-1.jpg` \& `testimonial-avatar-2.jpg`.

Dokumen ini siap digunakan sebagai panduan untuk AI coding tool atau developer frontend untuk membangun replika Leanlytics tanpa ketergantungan backend.[^1]

<div align="center">⁂</div>

[^1]: https://www.leanlytics.co

