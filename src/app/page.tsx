import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex xlgap-x-28 flex-col-reverse md:flex-row items-center justify-center z-10 w-full bg-[#b8c6e0] px-20">
      <div className="flex flex-col -[#0E0D12]">
        <h1 className="font-extrabold text-[40px]">Pulvinar ac</h1>
        <p className="font-extrabold text-[40px] mt-[-15px]">
          Sed auctor felis
        </p>
        <p className="text-xl">Aenean in ipsum et</p>
        <p className="text-xl">Commodo orci </p>
        <div className="w-36">
          <Link
            className="flex justify-center rounded-l py-2 text-[18px] text-white bg-[#0E0D12]"
            href={""}
          >
            Create now
          </Link>
        </div>
      </div>
      <div className="w-[630px]">
        <img className="object-cover" src="/heroImage.jpg" />
        <h1 className="absolute ml-[200px] scale-y-150  text-[30px] font-extrabold bottom-[365px] text-stone-50">
          Dapi convallis
        </h1>
        <h1 className="absolute bottom-[312px] ml-[265px] font-semibold text-stone-50">
          Maecenas es
        </h1>
      </div>
    </div>
  );
}
