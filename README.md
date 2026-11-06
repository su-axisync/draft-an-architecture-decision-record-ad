# B-Bot: The Character OS & Interactive Floating Island

Dokumentasi Rekod Keputusan Senibina (Architecture Decision Records - ADR) dan Spesifikasi Teknikal bagi sistem Pulau Terapung Interaktif B-Bot (*B-Bot Interactive Floating Island System*).

## Struktur Repositori & Dokumentasi Kejuruteraan

```text
├── docs/
│   ├── adr/
│   │   ├── 0001-senibina-pulau-terapung-karakter-os-dan-penyambung-modular.md  <-- Teks Utama ADR (Bahasa Melayu Teknikal)
│   │   └── 0001-floating-island-character-os-and-modular-connectors.md          <-- Versi Rujukan Bahasa Inggeris
│   └── specifications/
│       ├── 01-saluran-paip-aset-3d-dan-peneduh.md                             <-- Spesifikasi Model GLB/USDZ & Peneduh Cecair
│       └── 02-integrasi-automasi-rentas-platform.md                           <-- Spesifikasi Apple Shortcuts, Android, Windows & Linux
├── packages/
│   └── core/
│       └── src/
│           └── types/
│               ├── connector.ts   <-- Kontrak Antara Muka Hab Penyambung AI (BYO-AI)
│               ├── emolang.ts     <-- Takrifan Bahasa Emosi Watak 3D & Parameter Teduh
│               └── utility.ts     <-- Spesifikasi Seret & Lepas (AirDrop / BT / Penukar Fail)
└── README.md
```

## Ringkasan Keputusan Senibina (ADR-0001)

| Aspek | Huraian Pelaksanaan Teknikal |
| :--- | :--- |
| **Keputusan Utama** | **Senibina Tindanan Terlerai Berbilang Lapisan**: Memisahkan lapisan tindanan desktop (Pulau Terapung), watak 3D tanah liat bendalir (RON), hab ketersambungan AI (BYO-AI), dan enjin utiliti seret & lepas. |
| **Status ADR** | **Diterima (*Accepted*)** |
| **Kategori** | Antara Muka Pintar / Pembantu Ruang Kerja Digital (*Intelligent Interface / Workspace Assistant*) |
| **Platform Sasaran** | macOS, Windows, Linux, dan Android Mobile |
| **Saluran Paip 3D** | Piawaian Dwi-Model: **GLB (glTF 2.0)** untuk rentas platform dan **USDZ** untuk perkakasan Apple Metal |
| **Integrasi Automasi** | Apple Shortcuts (macOS/iOS), Android Intents, Windows App SDK URI Scheme, dan Linux D-Bus |
| **Utiliti Seret & Lepas** | Pemindahan terus melalui AirDrop & Bluetooth OBEX, serta penukaran fail sejagat luar talian (*Universal Converter*) |
