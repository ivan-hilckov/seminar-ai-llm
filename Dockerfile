# syntax=docker/dockerfile:1
# Multi-stage: build the Vite SPA, then serve dist/ from nginx.
# Pin tags (no :latest) — reproducible across machines and time.

# ---- build stage ----
FROM node:22-alpine AS build
WORKDIR /app
# Pin pnpm to match the host (.mise.toml). pnpm 10+ is required to parse the
# `allowBuilds` field in pnpm-workspace.yaml; it still reads lockfileVersion 9.0.
RUN corepack enable && corepack prepare pnpm@11.2.1 --activate
# Install deps first for layer caching. pnpm-workspace.yaml carries the
# `allowBuilds` config — without it pnpm 11 hard-errors on esbuild's ignored build.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
# Build (public/stuff is excluded via .dockerignore — internal materials, not served).
COPY . .
RUN pnpm build

# ---- serve stage ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
