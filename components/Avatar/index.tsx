interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar = ({ src, alt }: AvatarProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    className="object-cover w-[2.625rem] h-[2.625rem] rounded-full sm:w-[2.375rem] sm:h-[2.375rem]"
    src={src}
    alt={alt}
  />
);

export default Avatar;
