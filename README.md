# Qmenu Documentation

Welcome to the official documentation repository for **Qmenu** — a modern and powerful restaurant management system. This repository serves as the primary source of technical and user documentation for Qmenu, designed to help restaurant owners, staff, and developers understand and utilize the full potential of our system.

## 🧾 About Qmenu

Qmenu is a comprehensive restaurant POS (Point of Sale) and management system tailored to the needs of restaurants, cafes, and food service businesses. With a sleek, user-friendly interface and robust backend, Qmenu streamlines order management, inventory tracking, sales reporting, and more.

## 📚 Documentation Overview

This repo contains:

- **User Guide** – How to use Qmenu as a restaurant admin or staff member.
- **Admin Guide** – For system administrators and restaurant owners.
- **Technical Docs** – Developer setup, API references, and integration details.

## 📌 Key Features

- Digital menu and order system
- Real-time order tracking
- Sales and revenue analytics
- Inventory management
- Staff role control
- Multi-device support
- QPay integration

## 📝 Guide

Энэхүү гарын авлага нь техникийн бус хүмүүст Qmenu гарын авлагад болон API баримт бичигт өөрчлөлт оруулахад тусална.

### Шаардлага

Эхлэхийн өмнө танд дараах зүйлс хэрэгтэй:

1. GitHub бүртгэл
2. Компьютер дээр суулгасан Git
3. Code editer(Visual studio code)

### Эхлэх

#### 1. Ажлын орчны тохиргоо

1. **Git суулгах**

2. **Repository хуулах**

   - Терминал/cmd нээх
   - Дараах командыг ажиллуулах:

   ```bash
     git clone https://github.com/your-username/qmenu-documentation.git
   ```

   - Комманд амжилттай ажиллаж дууссаны дараа "qmenu-documentation" нэртэй folder үүснэ

3. **Project-оо асаах**
   - Visual studio code дээр фолдэроо нээж оруулна
   - Visual studio code-ийн терминалыг нээх дараах коммандыг ажиллуулна:
   ```bash
    yarn install
   ```
   - yarn install амжилттай татагдаж дууссаны дараагаар доорх коммандыг ажиллуулж localhost дээр асааж хийсэн өөрчлөлтүүдээ харах боломжтой
     ```bash
     yarn start
     ```

#### 2. Гарын авлагийн контентоо оруулахдаа

Гарын авлага нь `docs` хавтсанд дараах бүтцээр зохион байгуулагдсан:

- `intro.md` - Qmenu-ийн танилцуулга
- Дугаартай хавтасууд (1-login, 2-products, г.м) - Үндсэн баримт бичгийн хэсгүүд
- Хэсэг бүрт markdown файлууд болон зураг багтдаг
- Мөн docs фолдерт category нэртэй фолдер байгаа бөгөөд энэ нь API -ийн хэсэг учраас гарын авлагатай хамаагүй болно

#### 3. File үүсгэх, засварлах

##### Шинэ file нэмэх

1. **Шинэ файл үүсгэх**

   - `docs` хавтсан дотор тохирох хавтас руу очих
   - `.md` өргөтгөлтэй шинэ файл үүсгэх (жишээ нь: `new-feature.md`)
   - Дараах загварыг ашиглах:

     ```markdown
     # Агуулгын гарчиг

     ## Тойм

     Энэ хэсэгт юу багтсаныг товч тайлбарлах

     ## Алхмууд

     1. Эхний алхам
     2. Хоёр дахь алхам
     3. Үргэлжлүүлэн...

     ## Зөвлөмж

     - Зөвлөмж 1
     - Зөвлөмж 2
     ```

##### Зураг нэмэх

1. **Зургийн формат**

   - PNG эсвэл JPG форматыг ашиглах
   - Файлын хэмжээг 1MB-ээс бага байлгах
   - Тодорхой нэртэй файл ашиглавал тохиромжтой (жишээ нь: `login-screen.png`)

2. **Зураг нэмэх**
   - Эхлээд зургаа "static/img/images" folder дотор оруулна
   - Контент оруулж байгаа хэсэг дээрээ зураг дараах байдлаар холбох:
     ```markdown
     ![Зургийн тайлбар](img/images/your-image.png)
     ```

#### 4. Markdown үндсэн элементүүд

Дараах markdown элементүүдийг ашиглаж болно:

```markdown
# Үндсэн гарчиг

## Дэд гарчиг

### Жижиг гарчиг

- Цэгтэй жагсаалт
- Өөр цэгтэй жагсаалт

1. Дугаартай жагсаалт
2. Хоёр дахь утга

**Тод текст**
_Налуу текст_

[Холбоосын текст](https://example.com)

![Зургийн тайлбар](path/to/image.png)
```

#### 5. Өөрчлөлтүүдээ илгээх

1. **Өөрчлөлтүүдээ хадгалах**

   - Бүх файлуудаа хадгалах
   - Зургууд зөв хавтас руу орсон эсэхийг шалгах

2. **Өөрчлөлтүүдээ commit хийх**

   - Терминал/команд мөрийг нээх
   - Баримт бичгийн хавтас руу очих
   - Дараах командуудыг ажиллуулах:
     ```bash
     git add .
     git commit -m "Өөрчлөлтүүдийн тайлбар"
     git push
     ```

3. **Pull Request үүсгэх**
   - GitHub repository руу очих
   - "New Pull Request" дээр дарах
   - Өөрчлөлтүүдээ сонгох
   - Өөрчилсөн зүйлсийн тайлбар нэмэх
   - Pull request илгээх

## 📬 Support

If you need help using Qmenu or found a bug in the system, feel free to open an issue or contact our support team at [info@qmenu.mn](mailto:info@qmenu.mn).

## 🌐 Website

Visit the official Qmenu website at [https://qmenu.mn](https://qmenu.mn)

---

Thank you for using Qmenu — powering the future of restaurant management.
