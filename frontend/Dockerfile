# syntax=docker/dockerfile:1

############################
# 1) Install all deps for build
############################
FROM node:20-alpine AS deps
WORKDIR /app

# Some native modules (e.g. sharp) need this on Alpine
RUN apk add --no-cache libc6-compat

# Copy manifest + lockfile(s)
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install (handles npm/yarn/pnpm)
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm install --frozen-lockfile; \
  else echo "No lockfile found." && exit 1; \
  fi


############################
# 2) Build the app
############################
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Bring in all dependencies from deps
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Ensure public/ exists so later COPY never fails (harmless if already present)
RUN [ -d public ] || mkdir public

# Build (expects "build" script in package.json -> next build)
RUN npm run build


############################
# 3) Prod-only node_modules
############################
FROM node:20-alpine AS prod-deps
WORKDIR /app

COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install only production deps
RUN \
  if [ -f package-lock.json ]; then npm ci --omit=dev; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile --production=true; \
  elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm install --frozen-lockfile --prod; \
  else echo "No lockfile found." && exit 1; \
  fi


############################
# 4) Runtime image
############################
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Set PORT for platforms that expect it (optional)
ENV PORT=3000

# Create non-root user
RUN addgroup -g 1001 -S nodejs \
 && adduser -S nextjs -G nodejs -u 1001

# Minimal runtime files
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder   /app/package.json ./package.json
COPY --from=builder   /app/.next        ./.next
COPY --from=builder   /app/public       ./public

# (No next.config.* copy needed; runtime doesn't require it)

USER nextjs
EXPOSE 3000

# Expects package.json: "start": "next start"
CMD ["npm", "start"]
