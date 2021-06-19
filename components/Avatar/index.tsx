interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar = ({ src, alt }: AvatarProps) => (
  <img
    className="w-[2.625rem] h-[2.625rem] rounded-full sm:w-[2.375rem] sm:h-[2.375rem]"
    src={src}
    alt={alt}
  />
);

export default Avatar;
