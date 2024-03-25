import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex w-full justify-center align-center h-3/4">
      <div className="w-full m-1 flex flex-col bg-gray-100 gap-4 flex-wrap sm:w-3/4 sm:p-10 sm:flex-nowrap sm:flex-row sm:w-full sm:gap-2">
        <div className="flex flex-col justify-center gap-2 px-5 sm:px-20 sm:w-1/2">
          <div className="w-full flex flex-row">
            <Image src="/FCNews.svg" width={300} height={100} alt="logo"/>
            <Image
              src="/coffeHeader.svg"
              width={80}
              height={50}
              alt="logo"
              className="animate-bounce w-1/4 sm:w-none"
            />
          </div>
          <h1 className="self-center font-sans text-xl text-slate-600 sm:self-start">
            Seu site de notícias
          </h1>
        </div>
        <div className="w-3/4 self-center justify-end sm:w-1/2 ">
          <Image src="/headerImage.svg" width={505} height={347} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
