# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


//NOTE: file có tên layout là file dùng lại|| file have layout name in file is file use for recycle




Page

In old code vibe: coder usually use window.element. (it make params global it mean this params can use on brower console) NOTE: this relate to user when u put user to window

auth file - authen user file: is file working with user

export default: export nhung function bo vao default

dependences: is all dependence library download on your software

blue word is object

write librian  from big package and if project user one small package  from big package will dowload from internet small package not download all from big package

dat ten file co duoi ten thu muc nhin cho de
cac file cha nen de ten file dac biet mot chut cac file con dat cung ten hohoho

my-frontend-app/
├── public/                 # Static public assets (favicons, robots.txt)
├── src/                    # Main source code container
│   ├── assets/             # Global static media (compiled images, global fonts, SVGs)
│   ├── components/         # Shared, stateless atomic UI elements (Buttons, Inputs, Modals)
│   ├── config/             # App-wide configurations, environment setups, and constants
│   ├── features/           # Modular, domain-driven feature buckets (the core business logic)
│   │   ├── auth/           # Example Feature: Authentication module
│   │   │   ├── components/ # Private UI components used only within this specific feature
│   │   │   ├── hooks/      # Feature-scoped state/logic managers (e.g., useAuth)
│   │   │   ├── services/   # Feature API calls, interceptors, and data transformers
│   │   │   ├── types/      # Domain-specific TypeScript interfaces or schemas
│   │   │   └── index.ts    # Public API surface exposing only what the rest of the app needs
│   │   └── dashboard/      # Example Feature: User Dashboard module
│   ├── hooks/              # App-wide reusable stateful logic (e.g., useTheme, useWindowSize)
│   ├── layouts/            # Page shell wrappers (e.g., AdminLayout, AuthLayout, Sidebar)
│   ├── pages/              # Route entry points mapping directly to your router configurations
│   ├── routes/             # Client-side routing orchestrations and route guards
│   ├── services/           # Base global API clients (Axios/Fetch configs, WebSocket initializers)
│   ├── store/              # Global state management slices (Redux, Zustand, Pinia)
│   ├── utils/              # Pure JavaScript utility functions (date formatters, local storage helpers)
│   ├── App.tsx             # Root component bootstrapping layouts and providers
│   └── main.tsx            # Application entry point binding to the DOM element
├── .env.example            # Sample environment template file
├── package.json            # Manifest file tracking dependencies and build scripts
└── tsconfig.json           # Compiler rules for TypeScript projects

Redux thunk

the way to storage role data to database and how to get role from database
database should storange small data like short name of role (Example: ADMIN storange only AD)
when user get role from database:
database: in database storange AD
back-end: back end will format AD to ADMIN then return ADMIN to front-end
front-end: front-end take data from back-end then show to client if need can change ADMIN to Admin for user

allway choose null better empty string or something like empty object, empty array

Almost everyone go to fast and lost old tech even old tech not upgrade to max when everyone mix old tech and new tech - i call optimize -> will have very good people come to you

data temp/data sample: backend will have some null attribute -> data null not need send to frontend -> frontend need data sample if not have default null or empty

/////////////////////////COMMON ERROR ///////////////////////////////////////
ERROR_1: if input tag use value have undefined params will have error warning uncontrolled 
            because: in react "value" depend on "onChange" it allway empty string when have params undefined it will not empty string

ERROR_2: Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
            because: may be in HTML tag attribute "onClick" or "onChange" you not put function to onClick or "onChange" (onClick={() => turnOn()} or onChange={() => turnOn()})
            error: onClick={turnOn()} or onChange={turnOn()} 