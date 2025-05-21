import React from 'react';

export default function Footer () {
  return (
    <footer className="text-white py-12 px-2 mt-14 w-full border border-accent">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-16 lg:gap-16">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img
                alt="qmenu logo"
                width={150}
                height={65}
                src="/img/logo.png"
                className="h-[65px] w-[150px]"
              />
            </a>
            <p className="text-gray-400 mb-4 max-w-xs mt-[-30px]">
              Ресторан удирдлагын хүчирхэг цогц систем таны бизнесийг дараагийн түвшинд хүргэх болно.
            </p>
            <div className="items-center gap-2 hidden md:flex">
           
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Бүтээгдэхүүн</h3>
            <div className="space-y-2">
              <div><a href="https://www.qmenu.mn/for-business#solution" className="text-gray-400 hover:text-white">Шийдлүүд</a></div>
              <div><a href="https://www.qmenu.mn/for-business/#pricing" className="text-gray-400 hover:text-white">Үнийн санал</a></div>
              <div><a href="https://www.qmenu.mn/for-business/#products" className="text-gray-400 hover:text-white">Интеграци</a></div>
              <div><a href="https://www.qmenu.mn/for-business/#faq" className="text-gray-400 hover:text-white">Түгээмэл асуултууд</a></div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Компани</h3>
            <div className="space-y-2">
              <div><a href="https://www.qmenu.mn/for-business/" className="text-gray-400 hover:text-white">Бидний тухай</a></div>
              <div><a href="https://www.qmenu.mn/for-business/#knowledge" className="text-gray-400 hover:text-white">Мэдлэг</a></div>
              <div><a href="https://www.qmenu.mn/for-business/#contact" className="text-gray-400 hover:text-white">Холбоо барих</a></div>
              <div><a href="https://www.qmenu.mn/for-business/#partners" className="text-gray-400 hover:text-white">Түншүүд</a></div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Холбогдох</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-4 mb-4">
                <a href="tel:77772040" className="text-gray-400 hover:text-white hover:underline">77772040</a>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <a href="mailto:info@qmenu.mn" className="text-gray-400 hover:text-white hover:underline">info@qmenu.mn</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 hover:text-white">RoyalPlaza 205, BZD 26 khoroo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center px-2">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} QMenu. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex gap-2 mt-4 md:mt-0 ml-10">
            <a href="https://www.facebook.com/QmenuDigitalMenu" className="text-gray-400 hover:text-white text-sm">
              Facebook
            </a>
            <a href="https://www.instagram.com/qmenu.mn/" className="text-gray-400 hover:text-white text-sm">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
