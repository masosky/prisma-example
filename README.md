# prisma-example

## Script Command Description

prisma:dev npx prisma migrate dev --name init Apply migrations during development.
prisma:studio npx prisma studio Open Prisma Studio for visual database inspection.
prisma:generate npx prisma generate Regenerate Prisma Client after schema changes.
prisma:deploy npx prisma migrate deploy Deploy migrations to production.
prisma:reset npx prisma migrate reset --force --skip-seed Reset the database (drops tables and re-applies migrations).
prisma:seed ts-node prisma/seed.ts Populate the database with initial data.
