import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-sm mx-auto flex justify-center items-center">
        <Image
          src="/lyff-banner-image.png"
          alt="Lyff Logo"
          width={200}
          height={80}
        />
      </div>
    </div>
  );
}
