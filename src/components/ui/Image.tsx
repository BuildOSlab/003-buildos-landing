import NextImage, {
  type ImageProps as NextImageProps,
} from "next/image";

export interface ImageProps extends Omit<NextImageProps, "alt"> {
  alt: string;
  rounded?: boolean;
  bordered?: boolean;
}

export function Image({
  alt,
  rounded = false,
  bordered = false,
  className = "",
  ...props
}: ImageProps) {
  return (
    <NextImage
      alt={alt}
      className={[
        "ui-image",
        rounded ? "ui-image--rounded" : "",
        bordered ? "ui-image--bordered" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}