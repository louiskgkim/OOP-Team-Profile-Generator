// manager constructor
const Manager = require("../lib/manager");

test("Create an office number.", () => {
  const testOfficeNumber = 5;
  const employee = new Manager("Louis", 5, "Lkgk31@gmail.com", testOfficeNumber);
  expect(employee.officeNumber).toBe(testOfficeNumber);
});

test("Return office number via test officeNumber.", () => {
  const testOfficeNumber = 5;
  const employee = new Manager("Louis", 5, "Lkgk31@gmail.com", testOfficeNumber);
  expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing the role.", () => {
  const returnValue = "Manager";
  const employee = new Manager("Louis", 5, "Lkgk31@gmail.com", 5);
  expect(employee.getRole()).toBe(returnValue);
});