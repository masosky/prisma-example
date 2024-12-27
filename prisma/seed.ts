import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@example.com",
      posts: {
        create: {
          title: "Welcome!",
          content: "This is the first post in the blog.",
        },
      },
    },
  });

  console.log("Seed data inserted!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
