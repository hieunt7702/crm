# Project Context: CRM Dashboard

Thông tin tổng quan về dự án để AI nắm bắt ngữ cảnh nhanh.

## 🛠 Tech Stack
- **Frontend**: React (Vite/Next.js structure), TypeScript.
- **State Management**: MobX (với `useStore` hook và `observer`).
- **Styling**: Tailwind CSS (Modern configuration), Custom Design System (Glassmorphism, Apple-like).
- **Internationalization**: i18next (VI/EN).
- **Icons**: Material Symbols Outlined.

## 📂 Project Structure
Dự án được tổ chức theo mô hình Monorepo:
- `packages/core`: Chứa logic dùng chung.
  - `services/`: API services, interfaces.
  - `stores/`: MobX Stores (RootStore, EmployeeStore...).
- `apps/web`: Chứa giao diện người dùng.
  - `src/components/crm/`: Các component UI dùng chung (BaseListView, Sidebar, Header...).
  - `src/modules/`: Các trang và logic theo phân hệ (Employee, Product...).
  - `src/layouts/`: Các layout chính (CRM layout).

## 🎨 Design Philosophy
- **Border-less Default**: Các thành phần không có border thô, chỉ hiện border mờ hoặc glow khi tương tác.
- **Glassmorphism**: Sử dụng `backdrop-blur` và opacity mờ cho panels/cards.
- **Modern Typography**: Sử dụng font 'Inter', tối ưu tracking và line-height.
- **Micro-animations**: Sử dụng `animate-fade-in`, `animate-slide-up` cho mọi thành phần xuất hiện.

## 🔑 Key Components
- `BaseListView`: Component cốt lõi để hiển thị danh sách dạng Table/Grid. Mọi module mới (v.v. Products) nên sử dụng component này để đảm bảo đồng bộ.
- `Dropdown`: Component menu phức hợp, hỗ trợ search, sections và custom triggers.
- `ModuleMenuBase`: Thanh toolbar chứa tab, search và filter cho các module.

## 📝 Naming Conventions
- React Components: PascalCase.
- Functions/Variables: camelCase.
- CSS Classes: Tailwind utility classes + Semantic classes defined in `index.css`.
- Stores: `xxxStore`.
