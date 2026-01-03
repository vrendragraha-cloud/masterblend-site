export default function Head() {
  return (
    <>
      <title>Kontak | MasterBlend</title>
      <meta
        name="description"
        content="Hubungi MasterBlend untuk konsultasi tembakau & flavour: WhatsApp +628125413211 atau email vrendragraha@gmail.com."
      />

      {/* Open Graph */}
      <meta property="og:title" content="Kontak | MasterBlend" />
      <meta
        property="og:description"
        content="Hubungi MasterBlend untuk konsultasi tembakau & flavour: WhatsApp +628125413211 atau email vrendragraha@gmail.com."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kontak | MasterBlend" />
      <meta
        name="twitter:description"
        content="Hubungi MasterBlend untuk konsultasi tembakau & flavour melalui WhatsApp atau email."
      />
      <meta name="twitter:image" content="/og-image.jpg" />
    </>
  );
}