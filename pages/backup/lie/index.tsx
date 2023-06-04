import Image from "next/image";
import Layout from "../../../components/layout";
import { Inter } from "next/font/google";
import NavbarRoute from "../../../components/Navbar";
import Contact from "../../../components/footer";
import Button from "../../../components/Button";
import NavbarButtons from "../../../components/NavbarButtons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavbarRoute />
      <div className="bg-white ">
        <div className="max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" h-screen grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <Image
                className=" rounded-lg"
                src="/imgs/blank.jpg"
                width={320}
                height={320}
                alt="content"
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                    Предлагаем закрепить изучение базовых эмоций и микродвижений
                    лица на следующих страницах.
                  </h2>
                  <p className="text-black p-4">
                    Вам необходимо установить приложение, доступное по ссылке:
                  </p>
                  <Button
                    text="AR"
                    link="https://drive.google.com/file/d/1mKx7wK3hd-1Rs7xLzW0D9laz34Yn5x0d/view?usp=share_link"
                  />
                  <p className="text-black p-4">
                    Информация по каждой эмоции будет сопровождаться с
                    триггерной зоной, на которую необходимо навести камеру
                    мобильного телефона для активации дополненной реальности.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <NavbarButtons />
    </>
  );
}
