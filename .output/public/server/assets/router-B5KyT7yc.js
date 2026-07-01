import { createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Toaster as Toaster$1 } from "sonner";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const appCss = "/assets/styles-BE1CFRWS.css";
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Continuum — Build lasting habits" },
      { name: "description", content: "A calm, focused habit tracker. Track streaks, visualize progress, and build your daily ritual." },
      { name: "author", content: "Continuum" },
      { property: "og:title", content: "Continuum — Build lasting habits" },
      { property: "og:description", content: "A calm, focused habit tracker. Track streaks, visualize progress, and build your daily ritual." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/b9uXYmgdTyWTYhHfslbu4ZrHRZ73/social-images/social-1775640713838-continuum.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/b9uXYmgdTyWTYhHfslbu4ZrHRZ73/social-images/social-1775640713838-continuum.webp" },
      { name: "twitter:title", content: "Continuum — Build lasting habits" },
      { name: "twitter:description", content: "A calm, focused habit tracker. Track streaks, visualize progress, and build your daily ritual." }
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ],
    scripts: [
      {
        children: `
          (function() {
            var theme = localStorage.getItem('continuum_theme') || 'light';
            if (theme === 'system') {
              theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            if (theme === 'dark') document.documentElement.classList.add('dark');
          })();
        `
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "pb-[env(safe-area-inset-bottom)]", children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "animate-page-enter", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Toaster, { position: "top-center" })
  ] });
}
const $$splitComponentImporter = () => import("./index-D8g-V9tz.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Ptssn — Your Partner in Product Certification & Compliance"
    }, {
      name: "description",
      content: "PT. Solusi Sertifikasi Nasional Indonesia provides comprehensive compliance solutions, including SNI certification, laboratory testing, and halal certification, to help your business thrive in the Indonesian market."
    }]
  })
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
