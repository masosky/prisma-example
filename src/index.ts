import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Fetch all users
    const users = await prisma.user.findMany();

    // Print the users
    console.log("All Users:", users);
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    // Disconnect the Prisma client
    await prisma.$disconnect();
  }
}

main();
