<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=36&duration=3000&pause=1000&color=FFD700&center=true&vCenter=true&width=700&lines=🏨+Hotel+Booking+Site;Find.+Explore.+Book.;Built+with+React+%26+React+Router" alt="Typing SVG" />

<br/>

[![GitHub Repo](https://img.shields.io/badge/GitHub-wizif%2Fhotel--reservation--site-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wizif/hotel-reservation-site)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Slick](https://img.shields.io/badge/React--Slick-Carousel-FF6B6B?style=for-the-badge)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-6.7.2-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-orange?style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)

<br/>

> **A fully functional hotel booking UI** built with React 19, featuring multi-page navigation, interactive carousels, destination browsing, blog, testimonials, a contact form with state management, and user authentication UI — all powered by React Router v6.

<br/>

---

</div>

## 📌 Table of Contents

- [🚀 Live Demo](#-live-demo)
- [✨ Features At a Glance](#-features-at-a-glance)
- [🗂️ Project Structure](#️-project-structure)
- [📄 Pages & Routes](#-pages--routes)
- [🧩 Components Deep Dive](#-components-deep-dive)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚙️ Getting Started](#️-getting-started)
- [📦 Available Scripts](#-available-scripts)

---

## 🚀 Live Demo

🔗 **GitHub Repository:** [https://github.com/wizif/hotel-reservation-site](https://github.com/wizif/hotel-reservation-site)

> Run locally via `npm start` — see [Getting Started](#️-getting-started) below.

---

## ✨ Features At a Glance

| Feature | Status | Description |
|---|---|---|
| 🖼️ Hero Image Slider | ✅ Working | Custom-built slider with prev/next controls |
| 🔍 Hotel Search Form | ✅ UI Ready | City, check-in/out dates, adults, children, rooms |
| 🏨 Most Popular Hotels | ✅ Working | `react-slick` carousel — 4 cards visible, responsive |
| 🌍 Destination Listing | ✅ Working | 6 destinations rendered as clickable cards |
| 📄 Hotel Detail Page | ✅ Working | Dynamic route `/singlepage/:id` powered by `useParams` |
| 🖼️ Photo Gallery | ✅ Working | Image grid with HeadTitle banner |
| ⚙️ How It Works | ✅ Working | 3-step info cards rendered from data array |
| 📱 App Download Section | ✅ UI | App Store & Play Store button display |
| 📰 Blog Listing | ✅ Working | 9 blog posts rendered from static data |
| 📝 Blog Single Page | ✅ Working | Dynamic route `/blogsingle/:id` |
| 💬 Testimonials | ✅ Working | Customer review cards from data array |
| 📬 Contact Form | ✅ Logic | Controlled form with React state, shows submitted data |
| 🔐 Sign In Page | ✅ Logic | Controlled form, displays submitted credentials on screen |
| 📋 Register Page | ✅ Logic | Controlled form with name/email/password/confirm password |
| 📡 Responsive Navbar | ✅ Working | Hamburger menu toggle with mobile overlay |
| 🦶 Footer | ✅ Working | 4-column layout with navigation, social icons & newsletter |
| 📧 EmailJS Dependency | ✅ Installed | Package `@emailjs/browser` is installed |

---

## 🗂️ Project Structure

```
hotel-booking-site/
├── public/
│   └── images/                  # All static images (hotels, blog, gallery, works, app)
│       ├── hotel1.png
│       ├── hotel2.png
│       ├── gallery-1.jpg
│       ├── blog-4.jpg
│       ├── blog-6.jpg
│       ├── profile3.jpg
│       ├── appstore-button.png
│       ├── google-play-button.png
│       ├── app-image-1.png
│       ├── works/               # Works section icons
│       └── singlepage/          # Single page detail images
│
└── src/
    ├── App.js                   # Root component — all routes defined here
    ├── App.css                  # Global styles (flex, buttons, spacing)
    ├── index.js                 # App entry point
    │
    ├── common/                  # Shared layout components
    │   ├── Navbar.js            # Top navigation bar with header info bar
    │   ├── Navbar.css
    │   ├── Footer/
    │   │   ├── Footer.js        # 4-column footer
    │   │   └── Footer.css
    │   ├── HeadTitle/           # Page banner with breadcrumb title
    │   └── EmptyFile/           # Fallback UI when item not found
    │
    ├── Component/
    │   ├── Pages/
    │   │   └── Home.js          # Assembles all homepage sections
    │   │
    │   ├── HomeSection/         # Homepage-specific section components
    │   │   ├── Hero.js          # Renders the Slide component
    │   │   ├── Slide.js         # Custom image slider + search form
    │   │   ├── HomeAbout.js     # About intro blurb on homepage
    │   │   ├── Home.css         # Slider styles
    │   │   ├── popular/
    │   │   │   ├── MostPopular.js   # Section wrapper
    │   │   │   ├── Card.js          # react-slick carousel of hotel cards
    │   │   │   ├── PopData.js       # 8 hotel entries (name, country, price)
    │   │   │   └── MostPopular.css
    │   │   ├── Destina/
    │   │   │   └── DestinationHome.js  # Renders AllItem on homepage
    │   │   ├── Works/
    │   │   │   ├── Works.js         # "How It Works" section
    │   │   │   ├── Card.js          # Works info card
    │   │   │   ├── Wdata.js         # 3 steps data
    │   │   │   └── Works.css
    │   │   ├── Download/
    │   │   │   ├── Download.js      # App download promo section
    │   │   │   └── download.css
    │   │   └── gallery/
    │   │       └── (home gallery section)
    │   │
    │   ├── About/
    │   │   ├── About.js         # About page — AboutCard + features section
    │   │   ├── AboutCard.js     # About stats/info cards
    │   │   └── About.css
    │   │
    │   ├── Destinations/
    │   │   ├── AllItem.js       # Maps Sdata → Dcards grid
    │   │   ├── Dcards.js        # Single destination card (links to /singlepage/:id)
    │   │   ├── Sdata.js         # 6 destinations (Oriando, Miami, LA, San Diego, Houston, NY)
    │   │   └── Destinations.css
    │   │
    │   ├── gallery/             # Full gallery page
    │   │   ├── Gallery.js
    │   │   ├── Cards.js
    │   │   ├── GalleryData.js
    │   │   └── Gallery.css
    │   │
    │   ├── Blog/
    │   │   ├── Blog.js
    │   │   ├── AllBlog.js       # Renders blog cards
    │   │   ├── BlogCard.js      # Single blog card (links to /blogsingle/:id)
    │   │   ├── BlogData.js      # 9 blog posts with title, category, date, description
    │   │   ├── BlogHome.css
    │   │   └── blog-single-page/
    │   │       └── BlogSingle.js    # Full blog post view by :id
    │   │
    │   ├── Testimonial/
    │   │   ├── Testimonial.js
    │   │   ├── AllItem.js       # Maps Tdata → Cards
    │   │   ├── Card.js          # Single review card
    │   │   ├── Tdata.js         # 6 customer reviews
    │   │   └── Testimonial.css
    │   │
    │   ├── Contact/
    │   │   ├── Contact.js
    │   │   ├── ContactFrom.js   # Fully controlled form w/ 7 fields + submission display
    │   │   └── Contact.css
    │   │
    │   └── login/
    │       ├── Login.js         # Controlled sign-in form + display submitted data
    │       ├── Register.js      # Controlled register form + display submitted data
    │       └── design.css
    │
    └── SinglePage/
        ├── SinglePage.js        # Dynamic hotel/destination detail page
        └── SinglePage.css
```

---

## 📄 Pages & Routes

All routes are defined in `src/App.js` using **React Router v6 `<Routes>`** with a persistent `<Navbar />` and `<Footer />` wrapping all pages.

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Full homepage — all sections assembled |
| `/about` | `About` | About us page with feature image |
| `/gallery` | `Gallery` | Photo grid gallery |
| `/destinationhome` | `DestinationHome` | All destination cards listing |
| `/singlepage/:id` | `SinglePage` | Individual destination detail — data lookup by `id` via `useParams` |
| `/blog` | `Blog` | Blog post listing |
| `/blogsingle/:id` | `BlogSingle` | Individual blog post view |
| `/testimonial` | `Testimonial` | Customer testimonials |
| `/contact` | `Contact` | Contact form page |
| `/sign-in` | `Login` | Sign-in form |
| `/register` | `Register` | Registration form |

---

## 🧩 Components Deep Dive

### 🖼️ Hero Slider (`Slide.js`)
**Type: UI + Logic**

A custom-built image slider using React `useState` for tracking the current slide index.

- **Logic**: `nextSlide()` increments `current` index (loops back to `0` at the end); `prevSlide()` decrements (loops to `length - 1` at the start).
- **Rendering**: Only the active slide (`index === current`) renders its `<img>` tag — the rest render as empty `<div>` elements.
- **Search Form below slider**: A static UI form with inputs for City, Check-in date, Check-out date, Adults, Children, and Rooms — **UI only, no search logic connected**.

```jsx
const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1);
};
```

---

### 🏨 Most Popular Hotels Carousel (`Card.js` in `popular/`)
**Type: UI + react-slick Logic**

Uses the **`react-slick`** library to render a responsive, scrollable carousel of 8 hotel cards from `PopData.js`.

- **Settings**: 4 slides visible on desktop, 2 on screens `< 900px`, infinite loop, `500ms` transition speed.
- **Custom Arrows**: `SampleNextArrow` and `SamplePrevArrow` are custom components passed to `react-slick`'s `nextArrow` / `prevArrow` props — styled to match the site's design.
- Each card shows: hotel image, country with map pin icon, star rating (3 filled + 2 empty), hotel name, and price per night.

---

### 🌍 Destinations + Hotel Detail (`AllItem.js` → `SinglePage.js`)
**Type: Logic (Dynamic Routing)**

- `AllItem.js` maps over `Sdata` (6 cities: Oriando, Miami, Los Angeles, San Diego, Houston, New York) and renders `Dcards`.
- Each `Dcards` card links to `/singlepage/:id`.
- `SinglePage.js` uses **`useParams`** to extract the `:id`, then **`useEffect`** to find the matching item from `Sdata` by ID.
- If no match is found, it renders the **`<EmptyFile />`** fallback component.
- The detail page shows: hero image, description, side-by-side paragraph images, and a "How can we help you?" sidebar with a Contact Us button.

```jsx
const { id } = useParams();
useEffect(() => {
  let item = Sdata.find((item) => item.id === parseInt(id));
  if (item) setItem(item);
}, [id]);
```

---

### 📰 Blog + Blog Single Page (`Blog/`)
**Type: Logic (Dynamic Routing)**

- `BlogData.js` holds **9 blog posts**, each with: `id`, `date`, `category`, `title`, `cover image`, short `para`, and full `desc`.
- Each blog card links to `/blogsingle/:id`.
- `BlogSingle.js` resolves the post by `id` from the URL using `useParams`.

---

### 📬 Contact Form (`ContactFrom.js`)
**Type: Logic (Controlled Form + State)**

Fully controlled form with **7 fields**, all managed via React `useState`:
`fname`, `lname`, `phone`, `email`, `subject`, `company`, `message`.

- On submit: `e.preventDefault()` is called, the form data is pushed into an `allValue` array in state, and all fields are reset to empty strings.
- The submitted entries are displayed below the form in a **"Send Successfully"** section — rendered by mapping over `allValue`.

> ⚠️ Note: The `@emailjs/browser` package is installed as a dependency but is **not yet wired up** in `ContactFrom.js`. The current form uses local React state only — no emails are actually sent.

---

### 🔐 Sign In & Register (`Login.js` / `Register.js`)
**Type: Logic (Controlled Form + State)**

Both pages follow the same controlled-form pattern:

- **Login**: Captures `email` and `password`. On submit, the values are saved to a `recValue` array and displayed on-screen.  
  Includes a "Remember Me" checkbox (UI only) and a "Forgot my password" link (UI only).  
  Has a **"Sign up"** link that navigates to `/register`.
- **Register**: Captures `name`, `email`, `password`, `confirmPassword`. On submit, values are saved to `recValue` and shown below the form.

> ⚠️ **Important**: These are **frontend-only UI forms**. No backend authentication exists. Credentials are stored in local React state only and are **not persisted** — they reset on page refresh.

---

### 🗣️ Testimonials (`Testimonial/`)
**Type: UI**

Renders 6 customer reviews from `Tdata.js`. Each review has: reviewer name, profile photo, job title/post, and a description paragraph.

---

### 🖼️ Gallery (`Gallery.js` + `gallery/`)
**Type: UI**

- The **standalone Gallery page** (`/gallery`) renders a full-page image grid using `GalleryData.js` and includes a `HeadTitle` breadcrumb banner.
- The **homepage gallery section** is a separate component embedded into the `Home` page.

---

### 📡 Navbar (`Navbar.js`)
**Type: UI + Logic**

A two-part navigation structure:

1. **`<nav>`** — Main navigation links with a **hamburger menu toggle** (`useState` on `click`).  
   - On mobile: clicking the menu icon toggles a `"nav-menu active"` class that shows/hides the nav links.  
   - Each `<Link>` calls `closeMobileMenu()` on click to auto-close the menu.  
   - Login area: **Sign In**, **Register**, and **"Request a Quote"** (links to Contact).
   
2. **`<header>`** — Top info bar with: Working Hours, Call Us number, and Mail Us email — all displayed with Font Awesome icons and linked to `/contact`.

---

### 🦶 Footer (`Footer.js`)
**Type: UI**

4-column responsive grid layout:
- **About Us** — Short text + social media icons (Facebook, Twitter, LinkedIn, Instagram, Pinterest, YouTube)
- **Navigation** — Internal page links using React Router `<Link>`
- **Recent Posts** — Static placeholder posts with calendar icons
- **Newsletter** — Email input + Subscribe button (UI only, no logic)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | `^19.1.0` | Core UI library |
| **React DOM** | `^19.1.0` | DOM rendering |
| **React Router DOM** | `^6.30.1` | Client-side routing & `useParams` |
| **React Slick** | `^0.30.3` | Carousel / slider for hotel cards |
| **Slick Carousel** | `^1.8.1` | CSS required by react-slick |
| **@EmailJS/Browser** | `^4.4.1` | Email sending (installed, not yet wired) |
| **@FontAwesome Free** | `^6.7.2` | Icons throughout the UI |
| **React Scripts** | `5.0.1` | CRA build tooling |
| **web-vitals** | `^2.1.4` | Performance reporting |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `>=14.x`
- npm `>=7.x`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/wizif/hotel-reservation-site.git
cd hotel-reservation-site

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **`http://localhost:3000`** in your browser.

---

## 📦 Available Scripts

| Script | Command | Description |
|---|---|---|
| **Start** | `npm start` | Runs the app in development mode |
| **Build** | `npm run build` | Creates an optimized production build |
| **Test** | `npm test` | Launches the test runner |
| **Eject** | `npm run eject` | Ejects from CRA (irreversible) |

---

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=2500&pause=800&color=FFD700&center=true&vCenter=true&width=600&lines=Thanks+for+checking+out+the+project!;Built+with+React+19+%F0%9F%9A%80;Star+%E2%AD%90+if+you+found+it+useful!" alt="Footer Typing SVG" />

**Made with ❤️ using React**

</div>
