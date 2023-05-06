import { getTest } from "./service"

describe("Get API", () => {
    it("should return status 200", async () => {
        const response = getTest();
        expect(response.name).toBe("shiwani");
        console.log()
    })
})