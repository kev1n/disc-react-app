export default function ProfilePicture({
  diameter = 36,
  image,
  alt = "Profile picture",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        borderRadius: "50%",
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <img
        src={image}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
