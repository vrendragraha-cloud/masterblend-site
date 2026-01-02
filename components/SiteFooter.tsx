"use client";

export default function SiteFooter() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/brand/masterblend_wordmark_dark.svg"
              alt="MasterBlend"
              className="h-20 md:h-25 w-auto"
            />
            <span className="text-sm text-neutral-500">
              Tobacco & Flavour Consultant
            </span>
          </div>

          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} MasterBlend. NDA-friendly engagements.
          </p>
        </div>
      </div>
    </footer>
  );
}
