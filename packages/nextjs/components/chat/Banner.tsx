import Image from "next/image";
import { orbitron } from "~~/styles/fonts";

export default function Banner() {
  return (
    <div className={orbitron.className}>
      <div className="flex items-center justify-center gap-4">
        <Image src="/nouns-glasses-left.svg" alt="nouns-glasses-left" width={48} height={48} className="w-12 h-12" />
        <p className="text-3xl font-bold">What you gonna do for a better world?</p>
        <Image src="/nouns-glasses-right.svg" alt="nouns-glasses-right" width={48} height={48} className="w-12 h-12" />
      </div>
    </div>
  );
}
