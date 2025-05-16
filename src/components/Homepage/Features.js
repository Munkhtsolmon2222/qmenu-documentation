export default function HomepageFeatures() {
  const cards = [
    {
      title: "Нэвтрэх ба эрхийн тохиргоо",
      path: "/docs/login/1"
    },
    {
      title: "Бүтээгдэхүүн ба цэсийн удирдлага",
      path: "/docs/products/1"
    },
    {
      title: "QR болон холбоос",
      path: "/docs/qr/1"
    },
    {
      title: "Касс ба төлбөр",
      path: "/docs/pos/1"
    },
    {
      title: "Захиалга ба ширээ",
      path: "/docs/order/1"
    },
    {
      title: "Заал, гал тогооны удирдлага",
      path: "/docs/kds/1"
    },
    {
      title: "Тайлан ба гүйлгээ",
      path: "/docs/report-and-transaction/1"
    },
    {
      title: "Санал хүсэлт",
      path: "/docs/feedback/1"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto p-4 my-20">
      {cards.map((card, index) => (
        <a key={index} href={card.path}> 
          <div className="overflow-hidden border border-gray-200 rounded-lg bg-white shadow-sm">
            <div className="h-1 bg-black" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
