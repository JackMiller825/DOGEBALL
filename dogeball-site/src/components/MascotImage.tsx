import { assetPaths } from "../config/site.ts";

type MascotImageProps = {
  alt: string;
  priority?: boolean;
  className?: string;
};

export function MascotImage({ alt, priority = false, className }: MascotImageProps) {
  return (
    <img
      className={className ? `mascot-image ${className}` : "mascot-image"}
      src={assetPaths.logo}
      alt={alt}
      width={1024}
      height={1024}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
