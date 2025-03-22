import { data } from "./data";
import prisma from "./db";

async function main() {
  console.log("Seeding database...");

  await prisma.station.createMany({ data: data.stations });
  await prisma.train.createMany({ data: data.trains });
  await prisma.route.createMany({ data: data.routes });

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
