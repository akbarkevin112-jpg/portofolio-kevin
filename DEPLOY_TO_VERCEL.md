# Deploy Portfolio Kevin Akbar Maulana ke Vercel

## ✅ Persiapan Selesai
File konfigurasi yang sudah disiapkan:
- ✅ `vercel.json` - Konfigurasi routing & caching
- ✅ `.env.production` - Environment variables untuk production
- ✅ Build berhasil tanpa error
- ✅ Bundle size optimal (74.65 KB JS + 11.42 KB CSS)

---

## 🚀 Langkah Deploy

### **1. Push ke GitHub** 
Di Emergent, klik tombol **"Save to GitHub"** → pilih repo `akbarkevin112-jpg/portofolio-kevin` → branch `main` → push

### **2. Setup Vercel**
1. Buka [vercel.com](https://vercel.com) → Sign up dengan GitHub
2. Klik **"Add New Project"**
3. Import repository **`portofolio-kevin`**

### **3. Build Settings di Vercel**

| Setting | Value |
|---------|-------|
| Framework Preset | `Create React App` |
| **Root Directory** | **`frontend`** ⚠️ |
| Build Command | `yarn build` |
| Output Directory | `build` |
| Install Command | `yarn install` |

### **4. Environment Variables**
Tidak perlu - portfolio ini frontend-only, tidak ada backend dependency.

### **5. Deploy!**
Klik **Deploy** → tunggu ~2 menit → URL siap: `portofolio-kevin.vercel.app`

---

## 🌐 Custom Domain (Opsional)

Jika ingin domain pribadi seperti `kevinakbarmaulana.com`:
1. Beli domain di Niagahoster/Namecheap (~Rp 150rb/tahun)
2. Vercel → Project Settings → Domains → Add Domain
3. Set DNS sesuai instruksi Vercel
4. Tunggu propagasi (5 menit - 24 jam)

---

## 📂 Struktur File untuk Vercel

```
portofolio-kevin/
├── frontend/                    ← Root Directory di Vercel
│   ├── vercel.json             ← Config Vercel
│   ├── package.json
│   ├── public/
│   │   ├── images/
│   │   │   ├── profile.jpg
│   │   │   └── logo-sekat.jpg
│   │   └── cv/
│   │       └── CV_Kevin_Akbar_Maulana.docx
│   └── src/
└── README.md
```

---

## 🔧 Troubleshooting

**Build gagal?**
- Pastikan Root Directory diisi `frontend`
- Cek error log di Vercel dashboard

**Halaman 404 saat refresh?**
- Sudah ditangani di `vercel.json` dengan rewrites

**Foto/CV tidak muncul?**
- Pastikan file ada di `/app/frontend/public/images/` dan `/app/frontend/public/cv/`
- File sudah di-commit ke GitHub

---

**Portfolio siap deploy! 🎉**
