# Victoria de Gratitud — Landing (Next.js + Docker + Caddy)

Dominio: **victoriadegratitud.com.ar**

## Quickstart (local)
```bash
npm i
npm run dev
# abre http://localhost:3000
```

## Deploy en VPS (Docker)
1. Instala Docker & Docker Compose.
2. Clona este repo en `/opt/victoria`.
3. Crea `.env` si lo necesitás (opcional por ahora).
4. Construí e iniciá:
```bash
docker compose build
docker compose up -d
```
5. Caddy gestionará HTTPS automático para `victoriadegratitud.com.ar` (apunta el DNS A/AAAA a tu VPS).

## Hotmart
- Usa **enlaces de checkout** en los botones (reemplaza X/Y/Z por tus URLs).
- Configura **webhook/postback** en Hotmart a:
```
https://victoriadegratitud.com.ar/api/webhooks/hotmart
```
- Si habilitás firma, agregá validación HMAC en `app/api/webhooks/hotmart/route.ts`.

## Personalización
- Estilos en `app/globals.css` (Tailwind). Paleta: violeta `#6A4C93`, dorado `#D4AF37`.
- Textos/Secciones en `app/page.tsx`.
- SEO básico en `app/layout.tsx`, `app/robots.txt/route.ts`, `app/sitemap.xml/route.ts`.

## Producción
- Logs con `docker logs -f victoria_web` y `victoria_caddy`.
- Actualizar:
```bash
git pull
docker compose build
docker compose up -d
```


---

## Deploy de Preview en **Vercel** (1‑click)
1. Creá una cuenta en https://vercel.com (o logueate).
2. Click en **New Project → Import Project** y **arrastrá esta carpeta** (o conectá tu repo de GitHub).
3. Framework: **Next.js** (detecta automático).
4. Variables opcionales: copiá `.env.example` si las necesitás (puede quedar vacío para preview).
5. Deploy → Vercel te dará una URL tipo `https://victoria-preview.vercel.app` para probar.
6. Para webhooks de Hotmart en preview: usá `https://<tu-url-vercel>/api/webhooks/hotmart`.
