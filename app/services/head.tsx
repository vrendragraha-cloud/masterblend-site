export default function Head() {
  return (
    <>
      <title>Layanan | MasterBlend</title>
      <meta
        name="description"
        content="Layanan MasterBlend meliputi flavour profiling, optimasi blend tembakau, SOP & QC system, serta produk siap pakai."
      />

      {/* Open Graph */}
      <meta property="og:title" content="Layanan | MasterBlend" />
      <meta
        property="og:description"
        content="Layanan MasterBlend: flavour profiling, optimasi blend, SOP & QC system, dan dokumentasi siap produksi."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Layanan | MasterBlend" />
      <meta
        name="twitter:description"
        content="Flavour profiling, optimasi blend tembakau, SOP & QC system dari MasterBlend."
      />
      <meta name="twitter:image" content="/og-image.jpg" />
    </>
  );
}