const { PrismaClient, Role, Posisi, PosisiWasit } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  const now = new Date();
  const utc7Time = new Date(now.getTime() + 7 * 60 * 60 * 1000);

  if (params.action === "create") {
    params.args.data["created_at"] = utc7Time;
    params.args.data["updated_at"] = utc7Time;
  } else if (params.action === "update") {
    params.args.data["updated_at"] = utc7Time;
  } else if (params.action === "delete") {
    params.action = "update";
    params.args.data = { deleted_at: utc7Time };
  }

  return next(params);
});

module.exports = prisma;
