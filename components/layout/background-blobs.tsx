interface BlobProps {
  className: string;
}

function Blob({ className }: BlobProps) {
  return (
    <div
      className={`
        absolute rounded-full blur-3xl pointer-events-none
        ${className}
      `}
    />
  );
}

export function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden blob-float">

      <Blob className="
      blob-float
        top-[800px] right-[-150px]
        w-[400px] h-[400px]
        bg-sky-200/35 dark:bg-sky-500/25
      " />

      <Blob className="
      blob-float-delayed
        top-[1600px] right-[5%]
        w-[320px] h-[320px]
        bg-white/0 dark:bg-white/25
      " />

      <Blob className="
      blob-float-slow
      hidden md:block
        top-[3800px] right-[25%]
        w-[260px] h-[260px]
        bg-black/25 dark:bg-black/40
      " />

      <Blob className="
      blob-float
        hidden md:block
        top-[4600px] left-[15%]
        w-[320px] h-[320px]
        bg-lime-200/35 dark:bg-lime-500/25
      " />

    </div>
  );
}