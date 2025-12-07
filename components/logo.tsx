import Image from "next/image";

export default function WebLogo({ size }: { size: number }) {
  return (
    <Image
      src="/logo.webp"
      alt="شعار السلامة والصحة المهنية"
      width={size}
      height={size}
      priority
    />
  );
}
