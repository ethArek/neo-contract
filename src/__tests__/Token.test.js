/**
 * @jest-environment node
 */
const { withContracts } = require("../neo-one/test");

describe("Token", () => {
  test("exists", async () => {
    await withContracts(async ({ token }) => {
      expect(token).toBeDefined();
    });
  });
});
