import { convertDateValueToDate } from "../files/Functions/ConvertDateValueToDate";

describe("ConvertDateToDateValue method", () => {
    it("Should return \"2023\"", () => {
        expect(convertDateValueToDate(2023, "Year", null)).toBe("2023");
    })
})