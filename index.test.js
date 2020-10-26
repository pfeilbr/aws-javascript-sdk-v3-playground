const { listTables } = require("./index");

test("listTables test", async () => {
  const resp = await listTables();
  expect(resp).toBeDefined();
  expect(resp.TableNames.length).toBeGreaterThanOrEqual(0);
});
