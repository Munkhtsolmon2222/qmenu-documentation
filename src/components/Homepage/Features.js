import { useColorMode } from '@docusaurus/theme-common'

export default function HomepageFeatures() {
  const { colorMode } = useColorMode()

  const bgColor = colorMode === 'light' ? '#ffffff' : '#2a2d3e'
  const hoverBgColor = colorMode === 'light' ? '#f0f0f0' : '#40455e'
  const textColor = colorMode === 'light' ? 'black' : '#bfc7d5'

  const cards = [
    { title: 'Нэвтрэх ба эрхийн тохиргоо', path: '/docs/login/1' },
    { title: 'Бүтээгдэхүүн ба цэсийн удирдлага', path: '/docs/products/1' },
    { title: 'QR болон холбоос', path: '/docs/qr/1' },
    { title: 'Касс ба төлбөр', path: '/docs/pos/1' },
    { title: 'Захиалга ба ширээ', path: '/docs/order/1' },
    { title: 'Заал, гал тогооны удирдлага', path: '/docs/kds/1' },
    { title: 'Тайлан ба гүйлгээ', path: '/docs/report-and-transaction/1' },
    { title: 'Санал хүсэлт', path: '/docs/feedback/1' }
  ]

  return (
    <div className='mx-auto my-20 grid max-w-4xl grid-cols-1 gap-4 p-4 md:grid-cols-2'>
      {cards.map((card, index) => (
        <a key={index} href={card.path}>
          <div
            style={{
              backgroundColor: bgColor,
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = hoverBgColor
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = bgColor
            }}
            className='cursor-pointer items-center overflow-hidden rounded-lg border shadow-sm'
          >
            <div className='p-6'>
              <h3 style={{ color: textColor }} className='text-xl font-semibold'>
                {card.title}
              </h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
