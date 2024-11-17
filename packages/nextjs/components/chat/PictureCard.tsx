import Image from "next/image";

interface PictureCardProps {
  title: string;
  imageUrl: string;
}

export default function PictureCard({ title, imageUrl }: PictureCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-500 backdrop-blur-sm bg-white/30 p-2">
      <Image src={imageUrl} alt={title} width={160} height={112} className="w-40 h-28 rounded-t-2xl" />
      <div className="font-semibold text-base py-2 px-2">
        <p>{title}</p>
      </div>
    </div>
  );
}
