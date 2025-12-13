FROM node:22.20.0-alpine3.21 AS base

ENV DIR=/app
WORKDIR $DIR

FROM base AS dev

ENV NODE_ENV=development

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY src ./src

COPY prisma ./prisma

COPY tsconfig.build.json tsconfig.json .env nest-cli.json prisma.config.ts ./

RUN cat > /app/run-app.sh <<'EOF' 
#!/bin/sh
set -e

echo "🏁 waiting for the database to finish initializing..."
sleep 1

echo "🏁 Delete generated databases"
if [ -d "generated" ]; then
  rm -rf generated/*
fi

echo "🏁 Created generated database..."
npx prisma generate --schema=prisma/mysql/schema.prisma
npx prisma generate --schema=prisma/postgresql/schema.prisma
npx prisma generate --schema=prisma/sqlserver/schema.prisma

echo "🏁 Starting migrations..."
npx prisma migrate deploy

echo "🚀 Starting application..."
exec pnpm run start:dev

EOF

RUN sed -i 's/\r$//' /app/run-app.sh
RUN chmod +x /app/run-app.sh

EXPOSE $PORT

CMD [ "/bin/sh", "/app/run-app.sh" ]