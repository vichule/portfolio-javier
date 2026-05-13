type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        py-32 md:py-64
        ${className}
      `}
    >
      <div className="container-custom w-full">
        {children}
      </div>
    </section>
  );
}