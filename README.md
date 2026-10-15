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
| `/` | My Story | Landing page |
| `/research` | Research & Projects | Article |
| `/activities` | Activities & Impact | Shop |
| `/creative` | Creative and Passion | SHOPEEE (+ các tấm Origami / Guitar / Chess / Photograph) |
| `/honors` | Honor and Award | HONOR AND AWARD |

## Thư mục ảnh — `public/hinh/`

Ảnh dùng **bản gốc** tải từ Figma, Next không nén hay đổi kích thước (`images.unoptimized`).
Muốn thay ảnh: chép đè file mới **cùng tên, cùng đuôi** vào đúng chỗ. Không cần sửa code.
Nếu đổi đuôi (vd `.png` → `.jpg`) thì sửa lại đường dẫn trong file trang tương ứng.

```text
public/hinh/
├── chung/                 dùng ở nhiều trang
│   ├── nen-hud.png        nền HUD mờ phía sau các phần đầu trang
│   ├── khung-hud.svg      khung xanh của popup
│   └── mui-ten.png        nút mũi tên đỏ trên các thẻ
├── cau-chuyen/            My Story  (app/page.tsx)
│   ├── hero/              nen.svg (màn HUD tĩnh) + lop/ (các mảnh chuyển động) + chan-dung.png
│   ├── the-dieu-huong/    4 thẻ Project / Activities / Interest / Awards
│   ├── hanh-trinh-toan-hoc/
│   ├── say-me-khoa-hoc/
│   ├── ijso/
│   └── ngoi-truong-mo-uoc/
├── nghien-cuu/            Research & Projects  (app/research/page.tsx)
│   ├── anh-bia/
│   ├── ag-cumn2o4/        gồm cả dải ảnh cuộn ngang
│   ├── g-c3n4-tio2/
│   ├── polydopamine/
│   ├── game-opencv/
│   ├── hop-xu-ly-pin/
│   ├── fold-and-glide/
│   └── kham-pha-them/     3 thẻ Exploring more + ảnh trong popup (iapho/, ascend/, aslc/)
├── hoat-dong/             Activities & Impact  (app/activities/page.tsx)
│   ├── anh-bia/
│   ├── lanh-dao/
│   ├── van-hoa-cong-dong/
│   └── cau-lac-bo/        6 thẻ CLB + ảnh trong popup (khkk/, at25/, sos/, gart-camp/, aca-chess/, bac25/)
├── sang-tao/              Creative and Passion  (app/creative/page.tsx)
│   ├── do-vat/            4 món đồ trôi trên trang (hạc giấy, đàn, bàn cờ, máy ảnh)
│   ├── origami/  guitar/  chess/  photograph/    nội dung từng tấm giấy
└── vinh-danh/             Honor and Award  (app/honors/page.tsx)
    └── buc-tuong/         01 là ảnh chân dung, còn lại là cúp, huy chương, giấy khen
```

Ảnh trong cùng thư mục đánh số theo thứ tự từ trên xuống, trái sang phải như trong Figma.

## Chuyển động

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
