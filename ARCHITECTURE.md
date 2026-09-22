# Portfolio Architecture

## Repository Structure

The GitHub repository is the root `Portfolio/` directory. `Website/` is the actual Vite + React application.

```text
Portfolio/
├── README.md
├── ARCHITECTURE.md
├── .gitignore
└── Website/
    ├── package.json
    ├── vite.config.js
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Hero.jsx
        │   ├── About.jsx
        │   ├── Projects.jsx
        │   ├── ProjectCard.jsx
        │   ├── Skills.jsx
        │   ├── Journey.jsx
        │   ├── Contact.jsx
        │   └── Footer.jsx
        ├── data/
        │   ├── projects.js
        │   ├── skills.js
        │   └── journey.js
        ├── App.jsx
        ├── index.css
        └── main.jsx
```

## Component Architecture

`App.jsx` should compose the page rather than contain the entire website:

```jsx
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

Use separate components for meaningful sections. Avoid creating tiny components without a clear benefit.

## Data Architecture

Repeated content belongs in `src/data/`.

Example:

```js
export const projects = [
  {
    title: "TabMarko",
    description: "Browser tab management application.",
    technologies: ["React", "Tailwind CSS", "Supabase"],
    github: "",
    live: ""
  }
];
```

Render repeated UI with `.map()`:

```jsx
{projects.map((project) => (
  <ProjectCard key={project.title} project={project} />
))}
```

## Folder Responsibilities

### `components/`
Reusable page sections and UI components.

### `data/`
Projects, skills, journey entries, and other structured content.

### `assets/`
Images and other assets imported into React.

### `public/`
Files that need direct public URLs. Do not use this for ordinary imported assets unless there is a specific reason.

## Styling

The project uses Tailwind CSS.

Global design tokens belong in:

```text
Website/src/index.css
```

Visual direction:

- black / white / grayscale
- Helvetica-like sans-serif typography
- editorial / Swiss / International Typographic Style
- strong typography
- thin borders
- generous whitespace
- minimal decoration
- no unnecessary gradients
- no excessive cards
- no fake statistics
- restrained animation

Do not create a new token for every individual value. Use Tailwind's existing scale where possible.

## Fonts

For a system font stack:

```css
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

If using a freely licensed webfont such as Inter:

```css
font-family: "Inter", sans-serif;
```

System-installed fonts work for local development, but a public site needs a properly licensed webfont if exact rendering across visitors' devices is required.

## Icons

Use Material Symbols Outlined.

```jsx
<span className="material-symbols-outlined">
  arrow_outward
</span>
```

Keep icon usage restrained and consistent.

## React Learning Rules

This is also a React learning project. Use concepts when they solve an actual problem:

- JSX
- components
- props
- arrays and objects
- `.map()`
- conditional rendering
- event handlers
- `useState` when state is required

Do not add `useEffect`, `useContext`, Redux, or other advanced concepts merely for practice. Introduce them when the application genuinely needs them.

## Build Order

### 1. Foundation
- Vite
- Tailwind
- global styles
- design tokens
- fonts
- Material Symbols
- folder structure

### 2. Layout
- Navbar
- Hero
- About
- Projects
- Skills
- Journey
- Contact
- Footer

### 3. React
- extract reusable components
- create data files
- use props
- render lists with `.map()`
- add required state and interactions

### 4. Responsive Design
Test mobile, tablet, and desktop. Do not assume a desktop layout will automatically work on mobile.

### 5. Polish
Typography, spacing, borders, hover/focus states, restrained animation, accessibility, and image optimization.

### 6. Deployment
Build with:

```bash
cd ~/Portfolio/Website
npm run build
```

The deployment root is `Website/`.

## Git Rules

The Git repository is `Portfolio/`.

Run Git commands from:

```bash
cd ~/Portfolio
```

Normal workflow:

```bash
git status
git add .
git commit -m "describe the change"
git push
```

Never commit:

```text
node_modules/
dist/
.env
```

## What Goes on GitHub

Include source code and configuration:

- `README.md`
- `ARCHITECTURE.md`
- `.gitignore`
- `Website/src/`
- `Website/public/`
- `Website/package.json`
- `Website/package-lock.json`
- `Website/vite.config.js`
- required configuration files

Do not push:

- `node_modules/`
- `dist/`
- API keys
- secrets
- private credentials
- unnecessary local/system files

## Stitch Workflow

Stitch is the visual reference, not the application's architecture.

```text
Stitch design
    ↓
Understand layout
    ↓
Convert sections to React components
    ↓
Reuse Tailwind styling
    ↓
Move repeated content into data/
    ↓
Add React logic
    ↓
Responsive testing
    ↓
Polish
    ↓
Git commit
    ↓
Deploy
```

Do not paste the entire generated HTML page into `App.jsx`.

## Definition of Done

Before considering a section complete:

- JSX is valid
- component has a clear responsibility
- repeated content is data-driven where appropriate
- responsive layout works
- keyboard/focus behavior works
- links work
- images have useful `alt` text
- no console errors
- no build errors
- no fake portfolio claims
- changes are committed to Git

## Keeping This File Updated

Update this document only when a major architectural decision changes, such as:

- adding a major folder
- changing the styling system
- changing deployment structure
- introducing state management
- changing component architecture

Do not update it for every small CSS or JSX change.
