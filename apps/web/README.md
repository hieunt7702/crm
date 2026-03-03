Tái Cấu Trúc Dự Án - Core đến Web
Kế hoạch tái cấu trúc dự án từ lớp core đến web với path aliases tối ưu và exports hợp lý.

User Review Required
IMPORTANT

Cấu trúc mới sẽ thay đổi cách import

Thay vì import phức tạp như:

import { UserApi } from '../../../core/api/user.api'
Bạn sẽ import đơn giản hơn:

import { UserApi } from '@core/api'
import { UserModel } from '@core/models'
import { UserStore } from '@core/stores'
WARNING

Breaking Changes

Tất cả imports hiện tại từ core sẽ cần được cập nhật
Path aliases cũ (core-api/*, core-services/*, etc.) sẽ được thay thế bằng @core/*
Proposed Changes
Core Layer (apps/core)
Cấu trúc thư mục mới cho core:

apps/core/
├── api/                    # API Layer - HTTP clients & endpoints
│   ├── clients/           # HTTP clients
│   │   ├── http.client.ts
│   │   └── index.ts
│   ├── endpoints/         # API endpoints
│   │   ├── user.api.ts
│   │   ├── post.api.ts
│   │   └── index.ts
│   ├── interceptors/      # Request/Response interceptors
│   │   ├── retry.interceptor.ts
│   │   ├── refresh-token.ts
│   │   ├── logger.ts
│   │   └── index.ts
│   ├── config/           # API configuration
│   │   ├── endpoints.ts
│   │   ├── cancel.ts
│   │   └── index.ts
│   └── index.ts          # Barrel export
│
├── models/               # Data Models & Types
│   ├── user.model.ts
│   ├── post.model.ts
│   └── index.ts
│
├── services/            # Business Logic Layer
│   ├── token.service.ts
│   ├── user.service.ts
│   └── index.ts
│
├── stores/              # State Management (Zustand/Redux)
│   ├── root.store.ts
│   ├── user.store.ts
│   └── index.ts
│
├── context/             # React Context & Configuration
│   ├── app.context.ts
│   ├── app.config.ts
│   └── index.ts
│
├── utils/               # Utility Functions
│   ├── storage/
│   │   ├── storage.ts
│   │   ├── web.storage.ts
│   │   ├── mobile.storage.ts
│   │   └── index.ts
│   ├── token.manager.ts
│   ├── mock.ts
│   └── index.ts
│
└── index.ts             # Main barrel export
[MODIFY] 
api/index.ts
Tạo barrel export cho toàn bộ API layer:

// HTTP Clients
export * from './clients'
// API Endpoints
export * from './endpoints'
// Interceptors
export * from './interceptors'
// Configuration
export * from './config'
[NEW] 
api/clients/index.ts
export * from './http.client'
[NEW] 
api/endpoints/index.ts
export * from './user.api'
export * from './post.api'
[NEW] 
api/interceptors/index.ts
export * from './retry.interceptor'
export * from './refresh-token'
export * from './logger'
[NEW] 
api/config/index.ts
export * from './endpoints'
export * from './cancel'
[MODIFY] 
models/index.ts
export * from './user.model'
export * from './post.model'
[MODIFY] 
services/index.ts
export * from './token.service'
export * from './user.service'
[MODIFY] 
stores/index.ts
export * from './root.store'
export * from './user.store'
[MODIFY] 
context/index.ts
export * from './app.context'
export * from './app.config'
[MODIFY] 
utils/index.ts
export * from './storage'
export * from './token.manager'
export * from './mock'
[NEW] 
utils/storage/index.ts
export * from './storage'
export * from './web.storage'
export * from './mobile.storage'
[MODIFY] 
index.ts
Main barrel export cho toàn bộ core:

// API Layer
export * from './api'
// Models
export * from './models'
// Services
export * from './services'
// Stores
export * from './stores'
// Context
export * from './context'
// Utils
export * from './utils'
Web Configuration
[MODIFY] 
tsconfig.app.json
Cập nhật path aliases đơn giản hơn:

{
  "compilerOptions": {
    /* ================== BASE ================== */
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "jsx": "react-jsx",
    
    /* ================== VITE ================== */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "types": ["vite/client"],
    "noEmit": true,
    
    /* ================== PATH ALIAS ================== */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@core": ["../core"],
      "@core/*": ["../core/*"],
      "@components/*": ["./src/components/*"],
      "@layouts/*": ["./src/layouts/*"],
      "@modules/*": ["./src/modules/*"],
      "@assets/*": ["./src/assets/*"]
    },
    
    /* ================== LINT ================== */
    "strict": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
[MODIFY] 
vite.config.ts
Cập nhật aliases tương ứng:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@core": path.resolve(__dirname, "../core"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@assets": path.resolve(__dirname, "./src/assets")
    }
  }
});
Verification Plan
Automated Tests
Build Test

cd apps/web
npm run build
Type Check

cd apps/web
npx tsc --noEmit
Manual Verification
Import Testing - Tạo file test để verify imports:

// Test all core imports
import { UserApi, PostApi, httpClient } from '@core/api'
import { UserModel } from '@core/models'
import { UserService, TokenService } from '@core/services'
import { useUserStore, rootStore } from '@core/stores'
import { AppContext } from '@core/context'
Dev Server Test

cd apps/web
npm run dev
Verify no import errors
Check browser console for errors
Component Integration - Test trong các components thực tế như UserListView.tsx

Usage Examples
Before (Cũ)
// Phức tạp và dài dòng
import { UserApi } from 'core-api/user.api'
import { UserModel } from 'core-models/user.model'
import { useUserStore } from 'core-stores/user.store'
After (Mới)
// Đơn giản và rõ ràng
import { UserApi } from '@core/api'
import { UserModel } from '@core/models'
import { useUserStore } from '@core/stores'
// Hoặc import trực tiếp từ core
import { UserApi, UserModel, useUserStore } from '@core'
Web Layer Imports
// Import từ web layer
import { UserListView } from '@components/UserListView'
import { MainLayout } from '@layouts/MainLayout'
import { AuthModule } from '@modules/auth'
import logo from '@assets/logo.svg'
