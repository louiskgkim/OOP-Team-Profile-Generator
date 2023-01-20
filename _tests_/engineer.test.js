const Engineer = require("../lib/engineer");

test("Create a github username.", () => {
  const testGithub = "LouisKgKim";
  const employee = new Engineer("Louis", 5, "Lkgk31@gmail.com", testGithub);
  expect(employee.github).toBe(testGithub);
});

test("Return Github via getGithub.", () => {
  const testGithub = "LouisKgKim";
  const employee = new Engineer("Louis", 5, "Lkgk31@gmail.com", testGithub);
  expect(employee.getGithub()).toBe(testGithub);
});

test("Testing the role.", () => {
  const returnValue = "Engineer";
  const employee = new Engineer("Louis", 5, "Lkgk31@gmail.com", "LouisKgKim");
  expect(employee.getRole()).toBe(returnValue);
});