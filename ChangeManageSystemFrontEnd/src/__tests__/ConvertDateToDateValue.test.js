import { convertDateToDateValue } from "../files/Functions/ConvertDateToDateValue"


describe("ConvertDateToDateValue method", () => {
    it("Should return 2023", () => {
        expect(convertDateToDateValue("2023", "Year", null)).toBe(2023);
    })
})

describe("ConvertDateToDateValue method", () => {
    it("Should return 0", () => {
        expect(convertDateToDateValue("January", "Month", null)).toBe(0);
    })
})

describe("ConvertDateToDateValue method", () => {
    it("Should return 23", () => {
        expect(convertDateToDateValue("23", "Minute", null)).toBe(23);
    })
})

describe("ConvertDateToDateValue method", () => {
    it("Should return 23", () => {
        expect(convertDateToDateValue("23rd", "Day", null)).toBe(23);
    })
})

describe("ConvertDateToDateValue method", () => {
    it("Should return null", () => {
        expect(convertDateToDateValue("32nd", "Day", null)).toBe(null);
    })
})