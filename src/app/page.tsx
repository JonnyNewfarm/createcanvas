import Container from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#E4E2DD]">
      <section>
        <Container
          className="pb-24 pt-10 lg:grid lg:grid-cols-3
        sm:pb-2 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52"
        >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-64 left-0 -top-20 hidden lg:block">
                <img src="/splashBrush.png" alt="" className="border-none" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
