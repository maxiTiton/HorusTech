# Portfolio de Máximo Titón

Sitio personal construido con Next.js (App Router), React y Tailwind CSS.

## Tecnologías
- Next.js 15
- React 19
- Tailwind CSS 4
- TypeScript

## Estructura
- `src/app` — App Router, páginas y API
- `src/components` — Componentes UI
- `src/lib` — Datos y utilidades

## Desarrollo
```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Contacto (API)
La ruta `POST /api/contact` envía un email usando SMTP vía `nodemailer`.

Variables de entorno requeridas (crear `.env.local`):
```
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass
SMTP_FROM=Portfolio <no-reply@your-domain.com>
CONTACT_TO=maximot0904@gmail.com
```

## Despliegue
Este proyecto está listo para desplegar en Vercel. Solo agregá las variables de entorno en el panel de Vercel y hacé deploy.

## Personalización
- Editá `src/lib/projects.ts` con los links reales de tus proyectos (repo y demo).
- Reemplazá `/public/cv.pdf` con tu CV para habilitar el botón de descarga.

## Licencia
MIT
