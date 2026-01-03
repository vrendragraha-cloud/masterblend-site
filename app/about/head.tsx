export default function Head() {
  return (
    <>
      <title>Tentang | MasterBlend</title>
      <meta
        name="description"
        content="MasterBlend adalah konsultan independen tembakau & flavour Indonesia dengan fokus pada rasa klasik, formulasi, dan kesiapan produksi."
      />

      {/* Open Graph */}
      <meta property="og:title" content="Tentang | MasterBlend" />
      <meta
        property="og:description"
        content="MasterBlend adalah konsultan independen tembakau & flavour Indonesia dengan fokus pada rasa klasik, formulasi, dan kesiapan produksi."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tentang | MasterBlend" />
      <meta
        name="twitter:description"
        content="MasterBlend adalah konsultan independen tembakau & flavour Indonesia dengan fokus pada rasa klasik, formulasi, dan kesiapan produksi."
      />
      <meta name="twitter:image" content="/og-image.jpg" />
    </>
  );
}