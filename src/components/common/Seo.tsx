import { useEffect } from "react";
import { seoData, SITE_URL } from "../../constants/seo";

interface SeoProps {
  path: string;
}

const setMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

export const Seo = ({ path }: SeoProps) => {
  useEffect(() => {
    const data = seoData[path] ?? seoData["/"];
    const url = SITE_URL + (path === "/" ? "/" : path);

    document.title = data.title;
    setMeta("name", "description", data.description);
    setMeta("property", "og:title", data.title);
    setMeta("property", "og:description", data.description);
    setMeta("property", "og:url", url);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [path]);

  return null;
};