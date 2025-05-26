import React from 'react'

export default function Footer() {
  return (
    <footer className='border-accent mt-14 w-full border bg-[#2a2d3e] px-2 py-12 text-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-16 lg:grid-cols-5 lg:gap-16'>
          <div className='col-span-2'>
            <a href='/' className='mb-4 flex items-center gap-2'>
              <img
                alt='qmenu logo'
                width={150}
                height={65}
                src='/img/logo.png'
                className='h-[65px] w-[150px]'
              />
            </a>
            <p className='mt-[-30px] mb-4 max-w-xs text-gray-400'>
              Ресторан удирдлагын хүчирхэг цогц систем таны бизнесийг дараагийн түвшинд хүргэх
              болно.
            </p>
            <div className='hidden items-center gap-2 md:flex'></div>
          </div>

          <div>
            <h3 className='mb-4 font-medium'>Бүтээгдэхүүн</h3>
            <div className='space-y-2'>
              <div>
                <a
                  href='https://www.qmenu.mn/for-business#solution'
                  className='text-gray-400 hover:text-white'
                >
                  Шийдлүүд
                </a>
              </div>
              <div>
                <a
                  href='https://www.qmenu.mn/for-business/#pricing'
                  className='text-gray-400 hover:text-white'
                >
                  Үнийн санал
                </a>
              </div>
              <div>
                <a
                  href='https://www.qmenu.mn/for-business/#products'
                  className='text-gray-400 hover:text-white'
                >
                  Интеграци
                </a>
              </div>
              <div>
                <a
                  href='https://www.qmenu.mn/for-business/#faq'
                  className='text-gray-400 hover:text-white'
                >
                  Түгээмэл асуултууд
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className='mb-4 font-medium'>Компани</h3>
            <div className='space-y-2'>
              <div>
                <a
                  href='https://www.qmenu.mn/for-business/'
                  className='text-gray-400 hover:text-white'
                >
                  Бидний тухай
                </a>
              </div>
              <div>
                <a
                  href='https://www.qmenu.mn/for-business/#knowledge'
                  className='text-gray-400 hover:text-white'
                >
                  Мэдлэг
                </a>
              </div>
              <div>
                <a
                  href='https://www.qmenu.mn/for-business/#contact'
                  className='text-gray-400 hover:text-white'
                >
                  Холбоо барих
                </a>
              </div>
              <div>
                <a
                  href='https://www.qmenu.mn/for-business/#partners'
                  className='text-gray-400 hover:text-white'
                >
                  Түншүүд
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className='mb-4 font-medium'>Холбогдох</h3>
            <div className='space-y-2'>
              <div className='mb-4 flex items-center gap-4'>
                <a href='tel:77772040' className='text-gray-400 hover:text-white hover:underline'>
                  77772040
                </a>
              </div>
              <div className='mb-4 flex items-center gap-4'>
                <a
                  href='mailto:info@qmenu.mn'
                  className='text-gray-400 hover:text-white hover:underline'
                >
                  info@qmenu.mn
                </a>
              </div>
              <div className='flex items-center gap-4'>
                <span className='text-gray-400 hover:text-white'>
                  RoyalPlaza 205, BZD 26 khoroo
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 flex flex-col items-center justify-between border-t border-gray-800 px-2 pt-8 md:flex-row'>
          <p className='text-center text-sm text-gray-400 md:text-left'>
            © {new Date().getFullYear()} QMenu. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className='mt-4 ml-10 flex gap-2 md:mt-0'>
            <a
              href='https://www.facebook.com/QmenuDigitalMenu'
              className='text-sm text-gray-400 hover:text-white'
            >
              Facebook
            </a>
            <a
              href='https://www.instagram.com/qmenu.mn/'
              className='text-sm text-gray-400 hover:text-white'
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
