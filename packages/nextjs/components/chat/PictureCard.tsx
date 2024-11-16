interface PictureCardProps {
  title: string;
}

export default function PictureCard({ title }: PictureCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-500">
      <div className="w-40 h-28 bg-gradient-to-br from-pink-300 to-blue-300 rounded-t-2xl"></div>
      <div className="font-semibold text-base py-2 px-2">
        <p>{title}</p>
      </div>
    </div>
  );
}
