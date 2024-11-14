const prisma = require("../prisma");
const seed = async () => {
  const employees = []
  for (i = 0; i<10; i++) {
    employees.push({ title : `employee ${i}` })
  }
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });