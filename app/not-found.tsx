import Image from "next/image";
import errorImg from "../public/icons/error.png";

export default function Custom404() {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center ">
      <Image src={errorImg} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
        <p className="text-reg font-bold">
          We couldn't find that page you are looking for
        </p>
        <p className="mt-6 text-sm font-light">Error Code:404</p>
      </div>
    </div>
  );
}
