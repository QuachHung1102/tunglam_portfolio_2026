# Tung Lam Folio

Portfolio của Lê Tùng Lâm. Next.js 16 (App Router), Tailwind 4, GSAP.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Các trang

| Đường dẫn | Trang | Frame trong Figma |
| --- | --- | --- |
| `/` | Trang chủ: đoạn tự giới thiệu, mỗi lần bấm hiện một câu | 9 frame Intro |
| `/mystory` | My Story | My Story |
| `/research` | Research & Projects | Research |
| `/activities` | Activities & Impact | Activities |
| `/creative` | Creative and Passion | Passion (+ các tấm Origami / Guitar / Chess / Photograph) |
| `/honors` | Honor and Award | HONOR AND AWARD |

Bấm chữ **Tung Lam Folio** hoặc quả Trái Đất trên thanh menu là về trang chủ.
Trang chủ: bấm (hoặc phím →, Enter, Space) để sang câu tiếp. Câu cuối bấm thêm một lần thì màn hình lóe sáng rồi mở My Story.
Ở câu cuối, ba nhãn Research / Activities / Creative bấm được để vào thẳng trang đó. Góc phải dưới có nút **Skip intro**.

## Thư mục ảnh — `public/hinh/`

Ảnh dùng **bản gốc** tải từ Figma, Next không nén hay đổi kích thước (`images.unoptimized`).
Muốn thay ảnh: chép đè file mới **cùng tên, cùng đuôi** vào đúng chỗ. Không cần sửa code.
Nếu đổi đuôi (vd `.png` → `.jpg`) thì sửa lại đường dẫn trong file trang tương ứng.

```text
public/hinh/
├── chung/                 dùng ở nhiều trang
│   ├── nen-hud.png        nền HUD mờ, đứng yên phía sau mọi trang khi cuộn
│   ├── khung-hud.svg      khung xanh của popup
│   ├── khung-thoai-*.svg  khung hội thoại trên màn HUD (lon / nho: trang chủ, hero: My Story)
│   ├── trai-dat.png       quả Trái Đất cạnh chữ Tung Lam Folio
│   └── mui-ten.png        nút mũi tên đỏ trên các thẻ
├── cau-chuyen/            Trang chủ (app/page.tsx) + My Story (app/mystory/page.tsx)
│   ├── hero/              nen.svg (màn HUD tĩnh) + lop/ (các mảnh chuyển động) + chan-dung.png
│   │   └── gioi-thieu/    2 ảnh hiện ở câu "Today, that same dreamer..." của trang chủ
│   ├── the-dieu-huong/    4 thẻ Project / Activities / Interest / Awards
│   ├── hanh-trinh-toan-hoc/
│   ├── say-me-khoa-hoc/
│   ├── ijso/
│   └── ngoi-truong-mo-uoc/
├── nghien-cuu/            Research & Projects  (app/research/page.tsx)
│   ├── anh-bia/           video-poster.jpg: khung hình hiện trong lúc video đầu trang đang tải
│   ├── ag-cumn2o4/        gồm cả dải ảnh cuộn ngang
│   ├── g-c3n4-tio2/
│   ├── polydopamine/
│   ├── game-opencv/
│   ├── hop-xu-ly-pin/
│   ├── fold-and-glide/
│   └── kham-pha-them/     3 thẻ Exploring more + ảnh trong popup (iapho/, ascend/, aslc/)
├── hoat-dong/             Activities & Impact  (app/activities/page.tsx)
│   ├── anh-bia/
│   ├── lanh-dao/          02.png là ảnh dọc bên trái; 4 thư mục con là 4 khung ảnh tự trượt (xem dưới)
│   ├── van-hoa-cong-dong/
│   └── cau-lac-bo/        6 thẻ CLB + ảnh trong popup (khkk/, at25/, sos/, gart-camp/, aca-chess/, bac25/)
├── sang-tao/              Creative and Passion  (app/creative/page.tsx)
│   ├── do-vat/            4 món đồ trôi trên trang (hạc giấy, đàn, bàn cờ, máy ảnh)
│   ├── origami/  guitar/  chess/  photograph/    nội dung từng tấm giấy
└── vinh-danh/             Honor and Award  (app/honors/page.tsx)
    └── buc-tuong/         01 là ảnh chân dung, còn lại là cúp, huy chương, giấy khen
```

Ảnh trong cùng thư mục đánh số theo thứ tự từ trên xuống, trái sang phải như trong Figma.

### Khung ảnh tự trượt (Activities → Leadership and Initiatives)

Mỗi khung xanh lấy **tất cả ảnh** trong thư mục của nó, theo thứ tự tên file:

| Thư mục `public/hinh/hoat-dong/lanh-dao/` | Mục |
| --- | --- |
| `amstro-gallery/` | Lead of Expertise and Content at Amstro’s Gallery 2025 |
| `pho-chu-nhiem/` | Vice President of Amstronomy club gen 7 |
| `astrotales-26/` | Head of Organization Astrotales 26 |
| `dai-dien/` | Amstronomy Representative in Astronomy Community |

Hiện mỗi thư mục mới có 1 ảnh nên khung đứng yên. Chép thêm ảnh (`02.jpg`, `03.jpg`...) vào là khung tự trượt sau mỗi 4 giây, rê chuột vào thì dừng.
Thêm ảnh xong phải build lại (`npm run build`) vì danh sách ảnh được đọc lúc build.

### Video đầu trang Research

File `public/hinh/nghien-cuu/anh-bia/video.mp4`, tải từ YouTube (`https://youtu.be/onLjq8rINIk`, bản 1080p), không tiếng, tự lặp.
Phát thẳng trên trang nên nét ngay từ đầu, không có logo hay nút YouTube đè lên. Khung hiển thị đúng 16:9 nên không bị cắt hình.

- 15 giây cuối của bản trên YouTube có viền đen bên trái; trong file đã cắt bỏ viền đó.
- Lần đầu mở trang, video chạy từ giây 7 (cảnh rõ nhất) vì mấy giây đầu là cảnh lia máy bị nhòe. `video-poster.jpg` là đúng khung hình giây 7.
- Video gốc trên YouTube chỉ có độ nét khoảng 480p rồi bị phóng lên 1080p, nên trên màn lớn trông vẫn hơi mềm. Muốn nét hơn cần file gốc xuất từ điện thoại/CapCut.

Đổi video: chép đè `video.mp4` (nên là 16:9) và `video-poster.jpg`. Muốn bắt đầu từ giây khác thì sửa `batDau={7}` trong `app/research/page.tsx`.

## Chuyển động

- Nền HUD mờ đứng yên, chữ và ảnh trượt qua khi cuộn. Trang giãn sát hai mép màn hình ở mọi độ rộng.
- Trang chủ: khung hội thoại mở ra như màn HUD bật, chữ tự gõ, ảnh bật lên, đường chỉ từ quả địa cầu vẽ ra tới nhãn.
- Màn HUD đầu trang: các vòng xoay, cột sóng nhạc, quả địa cầu “thở” (các mảnh trong `hero/lop/`, vị trí ở `data/lopHero.ts`), chữ tên và nhãn giải mã từ ký tự ngẫu nhiên, vạch quét chạy dọc.
- Tiêu đề: chữ trồi lên từng ký tự khi cuộn tới. Ảnh và đoạn văn: hiện dần theo nhóm.
- Dải ảnh phòng lab (Research): chạy ngang liên tục, rê chuột vào thì dừng. Trên điện thoại vuốt ngang.
- Thẻ Exploring more / thẻ CLB: giãn ra hoặc sáng lên khi rê chuột, bấm để mở popup khung HUD.
- Trang Creative: 4 món đồ lơ lửng, bấm để mở tấm giấy tương ứng.
- Cúp và giấy khen: vệt sáng lướt qua khi rê chuột.
- Bấm bất kỳ đâu: tia lửa xanh.
- Ai bật “giảm chuyển động” trong hệ điều hành sẽ không thấy các hiệu ứng trên.

## Chống sao chép

Không bôi đen được chữ, không kéo ảnh ra ngoài, chuột phải và Ctrl+C bị chặn, giữ lâu trên điện thoại không hiện menu lưu ảnh.
Chụp màn hình thì vẫn chụp được, cái này web không chặn nổi.

## Font

Tiêu đề dùng **Avilock** (`app/fonts/Avilock-Bold.ttf`). Bản này **không có dấu tiếng Việt**: các chữ như Ừ, Ệ, Ớ, Ư được thay bằng Oswald nên nhìn hơi khác.
Thiết kế dùng bản Việt hoá **1FTV Avilock**. Có file đó thì chép đè vào `app/fonts/Avilock-Bold.ttf`.
