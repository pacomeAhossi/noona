import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/assets/logo_noona.svg"
        className="object-cover"
        alt="Logo Noona Kasir"
        width={110}
        height={44}
        priority
      />
    </Link>
  );
}
