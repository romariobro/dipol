# SEO Report for DIPOLM.RU

## Implemented changes

- Added production `robots.txt` with sitemap and host directives.
- Added XML sitemap for the homepage, five service pages, and four regional landing pages.
- Updated homepage title, meta description, keywords, robots, canonical URL, Open Graph and Twitter Card tags.
- Added LocalBusiness JSON-LD using existing website contacts: phone, email and Penza address.
- Added FAQ section and FAQPage JSON-LD on the homepage.
- Added local SEO content block for Penza and Penzenskaya oblast with natural mentions of Заречный, Кузнецк, Каменка, Нижний Ломов, Сердобск, Никольск and Мокшан.
- Added internal service links and regional links so all created pages are reachable from the homepage.
- Added `width`, `height`, and lazy loading attributes to content images where applicable.
- Externalized the menu script to `/assets/site.js` with `defer`.
- Added `/assets/seo-pages.css` for lightweight static landing pages.

## Created pages

- `/videonablyudenie/` — монтаж видеонаблюдения в Пензе.
- `/skud/` — монтаж СКУД в Пензе.
- `/pozharnaya-signalizaciya/` — пожарная сигнализация в Пензе.
- `/ohrannaya-signalizaciya/` — охранная сигнализация в Пензе.
- `/obsluzhivanie/` — обслуживание систем безопасности.
- `/penza/` — региональная страница для Пензы.
- `/zarechnyj/` — региональная страница для Заречного.
- `/kuzneck/` — региональная страница для Кузнецка.
- `/penzenskaya-oblast/` — региональная страница для области.

## Meta tags

Homepage uses the commercial title and description for montage/security searches in Penza. All new pages include unique titles, descriptions, canonical URLs, Open Graph tags and Twitter Card tags.

## Structured data

Homepage includes `LocalBusiness` and `FAQPage` JSON-LD. Landing pages include LocalBusiness JSON-LD to reinforce contacts and service area.

## Internal linking structure

Homepage links to every service and regional page. Service pages link to related service pages. Regional pages link to the main service pages and other regional pages.

## Sitemap structure

All URLs are included with `weekly` change frequency. Homepage priority is `1.0`; service and regional pages use `0.9`.

## Lighthouse recommendations

- Keep large project photos compressed and consider generating WebP/AVIF variants for the JPG files over 1 MB.
- Keep CSS and JS static and cacheable on GitHub Pages.
- Monitor Core Web Vitals after deployment because real scores depend on GitHub Pages delivery, client network and image transfer size.
- Add a real verified social preview image if brand standards require a custom preview.

## Future SEO roadmap

- Add real cases for priority sectors: retail, schools, warehouses, production and administrative buildings.
- Add price guidance pages after confirming commercial ranges and legal wording.
- Add Yandex Business and Google Business profile consistency checks with the same NAP data.
- Add review/testimonial content if approved by clients.
- Add analytics goals for calls, mail clicks and CTA clicks.
