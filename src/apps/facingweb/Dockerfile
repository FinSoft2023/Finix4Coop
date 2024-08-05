FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
EXPOSE 3000

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN mv .env.ci .env
RUN pnpm install
RUN pnpm run build --prod
# RUN pnpm prune

FROM base AS app1
COPY --from=build /usr/src/app/.output ./.output
# WORKDIR /usr/src/app
EXPOSE 3000
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
CMD [ "node", ".output/server/index.mjs" ]