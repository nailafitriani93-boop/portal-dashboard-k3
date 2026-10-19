
'use client';

import { useState } from 'react';

const menus = [
  {
    title: 'Inspeksi K3',
    subtitle: 'Sistem Inspeksi K3',
    description: 'Monitoring dan pengelolaan hasil inspeksi K3, temuan, tindak lanjut, serta kondisi keselamatan kerja.',
    badge: 'K3',
    icon: 'inspect',
    action: 'Buka Menu Inspeksi K3',
    href: 'https://k3inspeksi.estatepg1.online/'
  },
  {
    title: 'Rekap Data Kecelakaan',
    subtitle: 'Rekap Data Kecelakaan Kerja',
    description: 'Rekapitulasi data kecelakaan kerja untuk membantu pemantauan, analisis, dan evaluasi keselamatan.',
    badge: 'Keselamatan',
    icon: 'accident',
    action: 'Buka Menu Kecelakaan',
    href: 'https://rekapkecelakaankerja.estatepg1.online/'
  },
  {
    title: 'Stock APD',
    subtitle: 'Persediaan Alat Pelindung Diri',
    description: 'Monitoring ketersediaan dan jumlah stok APD untuk mendukung kebutuhan operasional di lapangan.',
    badge: 'APD',
    icon: 'stock',
    action: 'Buka Menu Stock APD',
    href: '/stock-apd'
  },
  {
    title: 'Distribusi APD',
    subtitle: 'Distribusi Alat Pelindung Diri',
    description: 'Pemantauan distribusi APD berdasarkan kebutuhan, penerima, lokasi, dan periode distribusi.',
    badge: 'Distribusi',
    icon: 'distribution',
    action: 'Buka Menu Distribusi APD',
    href: '/distribusi-apd'
  },
  {
    title: 'Jadwal Order APD',
    subtitle: 'Jadwal Pengadaan APD',
    description: 'Pemantauan jadwal order dan pengadaan APD agar kebutuhan perlengkapan keselamatan dapat terpenuhi.',
    badge: 'Pengadaan',
    icon: 'order',
    action: 'Buka Menu Jadwal Order',
    href: '/jadwal-order-apd'
  }
];

function Icon({ type }) {
  if (type === 'inspect') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 3h8v3H8z" />
        <path d="M6 5h12a2 2 0 0 1 2 2v13H4V7a2 2 0 0 1 2-2Z" />
        <path d="m8 13 2 2 5-5" />
      </svg>
    );
  }

  if (type === 'accident') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 3.8 19h16.4L12 3Z" />
        <path d="M12 9v5" />
        <path d="M12 17.2v.1" />
      </svg>
    );
  }

  if (type === 'stock') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8h16v12H4z" />
        <path d="m4 8 3-4h10l3 4" />
        <path d="M9 12h6" />
        <path d="M9 15h6" />
      </svg>
    );
  }

  if (type === 'distribution') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h11v12H3z" />
        <path d="M14 10h4l3 3v5h-7z" />
        <path d="M7 18a2 2 0 1 0 0 1" />
        <path d="M18 18a2 2 0 1 0 0 1" />
        <path d="M7 10h4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h12v18H6z" />
      <path d="M9 7h6M9 11h6M9 15h3" />
      <path d="M8 19h8" />
    </svg>
  );
}

function Logo({ compact = false }) {
  return (
    <img
      className={compact ? 'logo logo-compact' : 'logo'}
      src="/download-removebg-preview.png"
      alt="GGF Great Giant Foods"
    />
  );
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [loadingTitle, setLoadingTitle] = useState(
    'Membuka Sistem Inspeksi K3...'
  );


  const go = (href) => {
    const isInspection =
      href === 'https://k3inspeksi.estatepg1.online/';

    const isAccident =
      href === 'https://rekapkecelakaankerja.estatepg1.online/';

    if (isInspection || isAccident) {
      setLoadingTitle(
        isInspection
          ? 'Membuka Sistem Inspeksi K3...'
          : 'Membuka Sistem Rekap Data Kecelakaan...'
      );

      setLoading(true);

      window.setTimeout(() => {
        window.location.href = href;
      }, 900);

      return;
    }

    window.location.href = href;
  };


  return (
    <>
      {loading && (
        <div
          className="loading-screen"
          role="status"
          aria-live="polite"
        >
          <div className="loading-card">
            <Logo />
            <div
              className="loading-spinner"
              aria-hidden="true"
            />
            <div className="loading-title">
              Memuat Laman
            </div>
            <div className="loading-subtitle">
              {loadingTitle}
            </div>
          </div>
        </div>
      )}

      <main className="page-shell">
        <header className="topbar">
          <div className="brand-wrap">
            <Logo compact />

            <div className="brand-copy">
              <div className="brand-title">
                Portal Dashboard K3
              </div>

              <div className="brand-subtitle">
                Sistem Informasi Keselamatan Kerja Estate PG 1
              </div>
            </div>
          </div>
        </header>

        <section className="hero">
          <Logo />

          <h1>Portal Dashboard K3</h1>

          <p>
            Portal terpusat untuk memantau, menganalisis,
            dan mengoptimalkan keselamatan kerja
            <br className="desktop-break" />
            di Plantation Group 1 · Great Giant Pineapple.
          </p>
        </section>

        <section
          className="dashboard-grid"
          id="dashboard-list"
        >
          {menus.map((menu, index) => (
            <article
              className={`dashboard-card card-${index + 1}`}
              key={menu.title}
            >
              <div className="card-top">
                <div
                  className={`icon-box icon-${menu.icon}`}
                >
                  <Icon type={menu.icon} />
                </div>

                <span className="badge">
                  {menu.badge}
                </span>
              </div>

              <h2>{menu.title}</h2>

              <div className="card-subtitle">
                {menu.subtitle}
              </div>

              <p>{menu.description}</p>

              <button
                className="open-button"
                onClick={() => go(menu.href)}
                disabled={loading}
              >
                {menu.action}
                <span className="arrow">→</span>
              </button>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
