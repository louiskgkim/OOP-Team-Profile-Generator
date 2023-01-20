// intern constructor
const Intern = require("../lib/intern");

test("Create school.", () => {
  const testSchool = "School Name";
  const employee = new Intern("Louis", 5, "Lkgk31@gmail.com", testSchool);
  expect(employee.school).toBe(testSchool);
});

test("Return office number via test officeNumber", () => {
  const testSchool = "School Name";
  const employee = new Intern("Louis", 5, "Lkgk31@gmail.com", testSchool);
  expect(employee.getSchool()).toBe(testSchool);
});

test("Testing the role.", () => {
  const returnValue = "Intern";
  const employee = new Intern("Louis", 5, "Lkgk31@gmail.com", "School Name");
  expect(employee.getRole()).toBe(returnValue);
});