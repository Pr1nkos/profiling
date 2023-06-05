import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AccessDenied from "../../../../components/layout-denied";
import NavbarRoute from "../../../../components/Navbar";
import Contact from "../../../../components/footer";
import Image from "next/image";
import Button from "../../../../components/Button";
import NavbarButtons from "../../../../components/NavbarButtons";
import SideBar from "@/components/SideBar";

export default function Home() {
  const { data: session } = useSession();

  // Fetch content from protected route
  useEffect(() => {}, [session]);

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }

  // If session exists, display content
  return (
    <>
      <SideBar />
      <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-[22rem]">
        <NavbarRoute />
        <div className="bg-gradient-to-bl  from-green-900 to-purple-900">
          <div className="max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" h-screen grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div className="mt-5 sm:mt-10 lg:mt-0 ">
                <div className="space-y-6 sm:space-y-8 h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 p-4">
                  <div className="space-y-2 md:space-y-4 ">
                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                      ОТВРАЩЕНИЕ
                    </h2>
                    <p className="text-black">
                      Когда человек испытывает отвращение, микродвижения его
                      лица могут измениться следующим образом:
                    </p>

                    <p className="text-black">
                      1. Скривленные губы: губы могут быть скривлены или
                      выпячены вперед, что свидетельствует о неприязни и
                      отвращении.
                    </p>
                    <p className="text-black">
                      2. Морщины на носу: при отвращении человек может начать
                      морщить нос, что свидетельствует о неприязни и отторжении.
                    </p>
                    <p className="text-black">
                      3. Суженные глаза: глаза могут быть суженными и
                      напряженными, что свидетельствует о неприязни и
                      отвращении.
                    </p>
                    <p className="text-black">
                      4. Открытый рот: рот может быть открытым и натянутым, что
                      свидетельствует о неприязни и отвращении.
                    </p>
                    <p className="text-black">
                      5. Отталкивающие жесты: человек может делать жесты,
                      которые отталкивают объект или ситуацию, вызывающую
                      отвращение.
                    </p>
                    <p className="text-black">
                      6. Бледность на лице: кожа на лице может стать бледной и
                      напряженной, что свидетельствует о возбуждении и
                      отвращении.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  className=" rounded-lg"
                  src="/imgs/disgussed.jpg"
                  width={320}
                  height={320}
                  alt="content"
                />
              </div>
            </div>{" "}
            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800  p-8 text-center">
              Эти микродвижения также могут происходить одновременно или
              поочередно, и могут сильно отличаться в зависимости от
              индивидуальных особенностей человека и ситуации, вызывающей
              отвращение.
            </h2>
          </div>
        </div>
        <Contact />
        <NavbarButtons />
      </div>
    </>
  );
}
