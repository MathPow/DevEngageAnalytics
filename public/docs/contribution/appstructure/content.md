<h1 id="appstructure">App Structure</h1>

<h4 style="color: gray;">Where is Everything?!</h4>

We utilize React with Next.js. Our project structure follows the basic [Next.js structure](https://nextjs.org/docs/getting-started/project-structure) for pages.

<h3 id="apptree">App Tree</h3>

Here's a visual representation of the _/public_ file:

```
public
├── assets
│   ├── animations
│   ├── icons
│   └── img
├── docs
│   ├── components
│   ├── contribution
│   ├── introduction
│   │   ├── content.md
│   │   └── sections.ts
│   └── ...
├── locales
│   ├── en.json
│   ├── es.json
│   └── fr.json
└── logo.svg
```

Here's a visual representation of the _/src_ file:

```
src
├── app
│   ├── docs
│   │   ├──[slug]
│   │   ├──components
│   │   │   └──[slug]
│   │   └──contribution
│   │       └──[slug]
│   ├── playground
│   │   └── dev
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── template.tsx
│   └── ...
├── components
│   ├── cards
│   ├── docs
│   ├── navigation
│   ├── settings
│   ├── ui
│   └── ...
├── lib
│   ├── composables
│   ├── services
│   ├── types
│   ├── utils
│   └── utils.ts
├── styles
│   ├── loading.css
│   ├── markdown.css
│   └── ...
├── test
│   ├── mocks
└── └── ...
```

<h3 id="quickrecapofapptree">Quick Recap of App Tree</h3>

- All assets (icons, images, etc.) are located under the _/public_ directory.
- All pages are situated under _src/app_.
- Reusable components are organized under _src/components_.
- All _.ts_ files (composables, enums, arrays, etc.) reside in _src/lib_.

<h3 id="deployment">Deployment</h3>

We use GitHub Pages for deployment. You can visit the website here: https://mathpow.github.io/DevEngageAnalytics/

<h3 id="development">Development</h3>

To run the local environment, use the command:

`>> npm run dev`

The app opens on port 3000: http://localhost:3000
