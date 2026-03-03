# Chat Demo Monorepo

Dự án này được tổ chức theo cấu trúc **Monorepo** chuyên nghiệp, chia tách rõ ràng giữa lớp xử lý logic (**Core**) và lớp hiển thị (**Web**).

## 📂 Cấu trúc dự án

```text
.
├── apps/
│   └── web/                # Ứng dụng React (Vite)
├── packages/
│   └── core/               # Lớp logic dùng chung (@app/core)
├── tsconfig.base.json      # Cấu hình TypeScript dùng chung
├── package.json            # Cấu hình Workspaces & Scripts root
└── .vscode/                # Cấu hình VS Code (Auto format/import)
```

---

## 💎 Core Package (`packages/core`)

Lớp Core đóng vai trò là "bộ não" của dự án, chứa toàn bộ logic nghiệp vụ, gọi API và quản lý state. Nó được chuẩn hoá thành một package thư viện `@app/core`.

- **`api/`**: Quản lý kết nối HTTP.
    - `clients/`: Khởi tạo Axios client.
    - `config/`: Định nghĩa endpoints, cấu hình timeout.
    - `interceptors/`: Xử lý tự động (Retry, Refresh Token, Logger).
- **`models/`**: Định nghĩa các Interface, Type dữ liệu (e.g., `UserModel`, `PostModel`).
- **`services/`**: Các class/function thực hiện nghiệp vụ cụ thể.
- **`stores/`**: State management (MobX/Zustand).
- **`context/`**: Các định nghĩa cấu hình và contract giữa Core và Web.
- **`utils/`**: Các hàm tiện ích (Storage, Token Manager, Mocking).

---

## 🌐 Web Application (`apps/web`)

Ứng dụng React được xây dựng dựa trên sức mạnh của lớp Core.

- **`src/components/`**: Các UI Component dùng chung (Button, Header, Footer, v.v.).
- **`src/modules/`**: Chia theo tính năng (User, Auth, Chat, v.v.). Mỗi module chứa Screen và logic riêng.
- **`src/layouts/`**: Các bố cục trang web.

### 🚀 Path Aliases (Lối tắt Import)
Dự án đã được cấu hình alias để việc import trở nên cực kỳ gọn gàng:
- `@app/core`: Import trực tiếp từ lớp Core.
- `@/*`: Import từ `apps/web/src`.
- `@components/*`, `@modules/*`, `@assets/*`: Truy cập nhanh các thư mục trong web.

---

## 🛠 Hướng dẫn phát triển

### 1. Cài đặt đầu tiên
Tại thư mục gốc, hãy chạy lệnh sau để cài đặt và tự động liên kết (link) các workspaces:
```bash
npm install
```

### 2. Các lệnh quan trọng (Root)
Bạn có thể quản lý cả hai phía ngay tại root:
- `npm run dev`: Chạy server phát triển cho ứng dụng Web.
- `npm run build`: Build toàn bộ dự án (cả core và web).
- `npm run type-check`: Kiểm tra lỗi TypeScript trên toàn bộ Monorepo.

### 3. Tính năng tự động (VS Code)
Khi bạn lưu file (**Save**), VS Code sẽ tự động:
- **Xoá các import không sử dụng.**
- **Sắp xếp lại thứ tự import.**
- **Format code** theo chuẩn dự án.

---

## 📝 Cách Import chuẩn
Thay vì dùng đường dẫn tương đối dài dòng, hãy luôn sử dụng alias:

```typescript
// ✅ Chuẩn
import { initHttpClient } from '@app/core/api';
import { UserListView } from '@components/UserListView';

// ❌ Tránh dùng
import { initHttpClient } from '../../../packages/core/api';
```
