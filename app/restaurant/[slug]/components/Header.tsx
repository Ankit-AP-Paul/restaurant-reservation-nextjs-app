import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchMainImage = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      main_image: true,
    },
  });
  if (!restaurant) {
    throw new Error("Can't find a restaurant");
  }
  return restaurant.main_image;
};

export default async function Header({ name }: { name: string }) {
  const renderTitle = () => {
    const nameArr = name.split("-");
    nameArr[nameArr.length - 1] = `(${nameArr[nameArr.length - 1]})`;
    return nameArr.join(" ");
  };
  const mainImage = await fetchMainImage(name);

  return (
    <div className="h-96 overflow-hidden">
      <div
        className="h-full"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className=" bottom-0 px-4 py-3 bg-gray-500/50 w-full h-full flex items-center justify-center">
          <h1 className="text-7xl text-white capitalize text-shadow">
            {renderTitle()}
          </h1>
        </div>
      </div>
    </div>
  );
}
