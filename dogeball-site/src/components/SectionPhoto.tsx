type SectionPhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export function SectionPhoto({ src, alt, width, height, priority = false, className }: SectionPhotoProps) {
  return (
    <img
      className={className ? `section-photo ${className}` : "section-photo"}
      src={src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
