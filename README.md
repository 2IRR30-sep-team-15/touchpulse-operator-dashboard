# Pathway Dashboard

## Description

Pathway Dashboard is a web-based operator dashboard developed for the clients. It extends as a monitoring platform for operators to monitor the user base of visually impaired individuals in real time using the NAVIS mobile app. The primary goal of Pathway Dashboard is to ensure safety, accessibility, and real-time suppport for visually impaired users by integrating human assistance into the AI navigation system of NAVIS. The purpose of Pathway Dashboard is to complement the AI navigation of NAVIS and is intended for use only when human oversight is required to enhance the safety or clarity of the user.

_Snippet extracted from URD Document section 1.2 Scope_

## Technologies Used

- Nextjs
- Shadcn
- Tailwindcss
- Openstreetmap
- Nestjs
- Redis Stack
- WebRTC
- Docker / Docker Compose
- Nginx

## Getting Started

> [!INFO] This setup is recommended for development purposes only.

Make sure a redis instance is running in the background:

```bash
docker run -d \
  --name redis \
  --restart always \
  -p 6379:6379 \
  -v db_value:/data \
  -e REDIS_ARGS="--requirepass yourpassword" \
  redis/redis-stack:latest
```

Then run both backend and frontend development servers:

```bash
# running backend development server
cd backend
npm run start

# running frontend development server
cd frontend
npm run dev
```

By default the backend would run on port 8080, frontend on port 3000 and redis on 6379. All defaults environment values are set like so:

```txt
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=yourpassword
BACKEND_PORT=8080
```

Additionally to avoid CORS issues during frontend development a proxy is used instead:

The application includes an API proxy route (`/api/[...proxy]`) that forwards requests to the backend API. This is configured via the `PROXY_TARGET_URL` environment variable. By default it is set to `http://localhost:8080`

## Deployment

Make sure backend and frontend projects can build, then build docker image and publish them:

```bash
# build backend project
cd backend
npm run build
# docker build -t [USERNAME]/pathway_dashboard_backend:latest
# docker push [USERNAME]/pathway_dashboard_backend:latest

# build frontend project
cd frontend
npm run build
# docker build -t [USERNAME]/pathway_dashboard_frontend:latest
# docker push [USERNAME]/pathway_dashboard_frontend:latest
```

After which run docker compose:

```bash
docker compose up -d --build
```

All done!

_If you encounter issues while running these commands contact me (Amir) I'll try to help you out :)_

## API

## Authors:

- Amir Nurmukhambetov (1930907) ([github link](https://github.com/Hereugo))
- Jiaqi Wang (1986619) ([github link](https://github.com/Chachi04))
- René Rajtar (1965433) ([github link](https://github.com/UnderYoshi))
- Mihnea Buzoiu (1923552) ([github link](https://github.com/broskoy))
- Balazs Szel (1980920) ([github link](https://github.com/bszel))
- Tudor Șuteu (1961233) ([github link](https://github.com/TudorSuteu))
- Milan Loomans (1965832) ([github link](https://github.com/thatrandomstranger))
- Dorottya Váczy (1954342) ([github link](https://github.com/Dorka37))
- Simeon Vazharov (1988077) ([github link](https://github.com/SimoSimo24))
- Robert Abernethy (1938312) ([github link](https://github.com/tuelomlrob))
