interface OpeningInfoProps {
  openingCrawl: string;
}

export default function OpeningInfo({ openingCrawl }: OpeningInfoProps) {
  return (
    <div className="w-full md:w-full lg:w-lg">
      <h2 className="text-lg mb-3">Opening</h2>
      <div className="space-y-4 text-gray-300 text-md leading-relaxed">
        <p>{openingCrawl}</p>
      </div>
    </div>
  );
}
