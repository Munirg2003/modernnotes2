# ModernNotes Project Structure 

📦 modern-notes
├── 📂 .github
│ ├── 📂 workflows
│ │ ├── 📄 ci.yml
│ │ ├── 📄 deploy.yml
│ │ └── 📄 security-scan.yml
│ └── 📄 CODEOWNERS
├── 📂 src
│ ├── 📂 api
│ │ ├── 📂 graphql
│ │ │ ├── 📄 schema.ts
│ │ │ ├── 📄 resolvers.ts
│ │ │ └── 📄 types.ts
│ │ └── 📂 rest
│ │ ├── 📄 routes.ts
│ │ └── 📄 middleware.ts
│ ├── 📂 components
│ │ ├── 📂 common
│ │ │ ├── 📂 Button
│ │ │ ├── 📂 Input
│ │ │ └── 📂 ErrorBoundary
│ │ ├── 📂 editor
│ │ │ ├── 📂 RichText
│ │ │ ├── 📂 CodeBlock
│ │ │ └── 📂 MediaHandler
│ │ ├── 📂 navigation
│ │ └── 📂 collaboration
│ ├── 📂 config
│ │ ├── 📄 constants.ts
│ │ ├── 📄 theme.ts
│ │ └── 📄 routes.ts
│ ├── 📂 contexts
│ │ ├── 📄 AuthContext.tsx
│ │ ├── 📄 ThemeContext.tsx
│ │ └── 📄 OfflineContext.tsx
│ ├── 📂 features
│ │ ├── 📂 notes
│ │ ├── 📂 auth
│ │ ├── 📂 search
│ │ └── 📂 settings
│ ├── 📂 hooks
│ │ ├── 📄 useAuth.ts
│ │ ├── 📄 useSync.ts
│ │ └── 📄 useOffline.ts
│ ├── 📂 lib
│ │ ├── 📂 ai
│ │ │ ├── 📄 nlp.ts
│ │ │ └── 📄 voice.ts
│ │ ├── 📂 encryption
│ │ │ ├── 📄 crypto.ts
│ │ │ └── 📄 keys.ts
│ │ └── 📂 sync
│ │ ├── 📄 engine.ts
│ │ └── 📄 conflict.ts
│ ├── 📂 pages
│ │ ├── 📄 Home.tsx
│ │ ├── 📄 Editor.tsx
│ │ └── 📄 Settings.tsx
│ ├── 📂 services
│ │ ├── 📄 api.ts
│ │ ├── 📄 storage.ts
│ │ └── 📄 analytics.ts
│ ├── 📂 styles
│ │ ├── 📄 global.css
│ │ └── 📄 theme.css
│ ├── 📂 types
│ │ ├── 📄 note.ts
│ │ ├── 📄 user.ts
│ │ └── 📄 common.ts
│ ├── 📂 utils
│ │ ├── 📄 format.ts
│ │ ├── 📄 validation.ts
│ │ └── 📄 testing.ts
│ ├── 📄 App.tsx
│ └── 📄 index.tsx
├── 📂 public
│ ├── 📂 assets
│ │ ├── 📂 icons
│ │ └── 📂 images
│ ├── 📄 manifest.json
│ └── 📄 service-worker.js
├── 📂 tests
│ ├── 📂 e2e
│ │ └── 📂 cypress
│ ├── 📂 integration
│ └── 📂 unit
├── 📂 docs
│ ├── 📂 api
│ ├── 📂 architecture
│ │ └── 📂 decisions
│ ├── 📂 setup
│ └── 📂 security
├── 📂 scripts
│ ├── 📄 build.js
│ ├── 📄 test.js
│ └── 📄 deploy.js
├── 📄 .env.example
├── 📄 .eslintrc.js
├── 📄 .prettierrc
├── 📄 tsconfig.json
├── 📄 vite.config.ts
├── 📄 package.json
└── 📄 README.md





















Key Directory Explanations:

- `/src`: Main application source code
  - `/api`: API-related code (GraphQL and REST)
  - `/components`: Reusable React components
  - `/features`: Feature-based modules
  - `/lib`: Core functionality libraries
  - `/services`: External service integrations

- `/public`: Static assets and PWA files
  - Contains service worker and manifest
  - Static assets like icons and images

- `/tests`: Test files organized by type
  - E2E tests using Cypress
  - Integration tests
  - Unit tests

- `/docs`: Project documentation
  - API documentation
  - Architecture decisions
  - Setup guides
  - Security documentation

- `/scripts`: Build and deployment scripts
  - Custom build configurations
  - Test runners
  - Deployment automation

This structure follows:
- Feature-based organization
- Clear separation of concerns
- Easy testing setup
- Comprehensive documentation
- Scalable component architecture
- Security-first approach
- Offline-first capabilities

The structure supports all requirements from the tech stack while maintaining clean architecture principles and enabling efficient development workflows.