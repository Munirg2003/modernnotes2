# ModernNotes Technical Stack (Updated with Supabase)

## Frontend Core
- **Framework**: React with TypeScript
- **State Management**: 
  - React Query for server state
  - Local state persistence for offline support
- **UI Framework**: Material Design 3 (via **MUI** for React & React Native)
- **Styling**: 
  - Styled Components/Emotion
  - CSS Modules for component-specific styles
- **Expo Integration**: 
  - **Expo SDK** for unified development across platforms
  - **React Navigation** for navigation (supports web, iOS, and Android)
  - **Expo Font** for custom font integration across all platforms

## Mobile & Cross-Platform
- **PWA**: Service Workers for offline support
- **Native Apps**: 
  - **Expo for React Native** (simplifies native code configuration)
  - **React Native** for iOS/Android (with Expo for managed workflow)
  - **Electron** for desktop applications
- **Responsive Framework**: Custom responsive system with touch support, powered by **Expo's responsive utilities**
- **Push Notifications**: **Expo Push Notifications** for seamless cross-platform push notification handling

## Backend
- **API**: 
  - **Supabase** for managed PostgreSQL backend (includes authentication, real-time, and storage)
  - **GraphQL** for flexible data querying (optional with Supabase)
- **Database**: 
  - **Supabase Database (PostgreSQL)** for primary storage (auto-scaling, serverless, real-time)
  - Supabase **Realtime** for event-driven applications
- **Authentication**: Supabase's built-in **Auth** system (JWT-based authentication with OAuth, magic links)
- **File Storage**: Supabase **Storage** for managing files in the cloud
- **Search**: Supabase integrates with PostgreSQL's full-text search, but for advanced search, **Elasticsearch** can still be used.

## Authentication & Security
- **Auth System**: 
  - Supabase Auth (JWT with refresh tokens)
  - OAuth 2.0 for third-party integrations
- **2FA**: 
  - TOTP (Time-based One-Time Password)
  - Hardware key support (FIDO2/WebAuthn)
- **Encryption**: 
  - End-to-end encryption
  - Zero-knowledge architecture
  - AES-256 for data encryption

## Real-time Features
- **WebSocket**: **Socket.io** for real-time updates (optionally Supabase Realtime)
- **Collaboration**: 
  - Operational Transformation for co-editing
  - CRDT for conflict resolution
- **Push Notifications**: **Expo Push Notifications** (cross-platform push support)

## Testing
- **Unit Testing**: 
  - Jest
  - React Testing Library
- **E2E Testing**: **Cypress** (for web) and **Detox** (for React Native)
- **Performance Testing**: Lighthouse
- **Security Testing**: OWASP ZAP

## Build & Development
- **Build Tools**: 
  - **Vite** for web development
  - **Webpack** for production web bundles
  - **Expo** Expo@52 Do not downgrade --for building and deploying mobile apps
- **Package Manager**: pnpm
- **File handling**: rimraf
- **Version Control**: Gitpnpm
- **CI/CD**: GitHub Actions (with Expo-specific workflows for mobile builds)

## Code Quality
- **Linting**: 
  - **ESLint** with strict configuration
  - **Prettier** for code formatting
- **Type Checking**: TypeScript in strict mode
- **Code Analysis**: SonarQube

## Monitoring & Analytics
- **Error Tracking**: **Sentry** (supports both web and mobile)
- **Performance Monitoring**: 
  - **New Relic**
  - Custom performance metrics (via Expo's performance hooks)
- **Analytics**: 
  - **Privacy-focused analytics**
  - Custom event tracking (via **Expo Analytics**)

## AI & Machine Learning
- **NLP**: 
  - TensorFlow.js for client-side processing
  - OpenAI API for advanced features
- **Voice Processing**: 
  - Web Speech API
  - Custom voice-to-text processing

## Storage & Sync
- **File Storage**: 
  - **Supabase Storage** for cloud file storage
  - **IndexedDB** for offline storage (web)
  - **Secure Storage** for sensitive data on mobile (via **Expo Secure Store**)
- **Sync Engine**: 
  - Custom sync protocol
  - Conflict resolution system (using **Supabase Realtime** for live data sync)

## Documentation
- **API Documentation**: OpenAPI/Swagger
- **Component Documentation**: Storybook
- **Architecture**: ADR (Architecture Decision Records)

## DevOps & Infrastructure
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Cloud Provider**: Multi-cloud support
  - AWS primary
  - GCP/Azure compatible
- **CDN**: **CloudFlare**

## Accessibility
- **Testing Tools**: 
  - **axe-core**
  - **WAVE**
- **Screen Reader Support**: ARIA implementation

## Internationalization
- **i18n Framework**: **react-i18next** (also supports Expo's native environment)
- **RTL Support**: Built-in RTL styling

## Performance Optimization
- **Bundling**: 
  - **Code splitting** for web
  - **Tree shaking**
- **Image Optimization**: 
  - **Expo Image** component for automatic optimization
  - **WebP format** with fallbacks
- **Caching**: 
  - **Service Worker caching** for web
  - **HTTP caching strategies** via Expo's caching system

## Development Environment
- **Editor Config**: VSCode settings
- **Git Hooks**: 
  - Husky
  - lint-staged
- **Dependency Management**: 
  - Renovate
  - Dependencies security scanning
