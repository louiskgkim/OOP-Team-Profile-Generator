// employee constructor
const { default: test } = require("node:test");
const { getMaxListeners } = require("process");
const Employee = require("../lib/employee");

// create employee object
test("Creates an new employee.", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
})

test("Test name.", () => {
  const name = "Louis";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
})

test("Test ID.", () => {
  const id = "5";
  const employee = new Employee("Louis", id);
  expect(employee.id).toBe(id);
})

test("Test email.", () => {
  const email = "Lkgk31@gmail.com";
  const employee = new Employee("Louis", 5, email);
  expect(employee.email).toBe(email);
})

// get name via getName()
test("Get name via getName method.", () => {
  const testName = "Louis";
  const employee = new Employee(testName);
  expect(employee.getName()).toBe(testName);
})

// get id via getId()
test("Get ID via getId method.", () => {
  const testID = 5;
  const employee = new Employee("Louis", testID);
  expect(employee.getId()).toBe(testID);
})

// get email via getEmail()
test("Get Email via getEmail method.", () => {
  const testEmail = 5;
  const employee = new Employee("Louis", 5, testEmail);
  expect(employee.getEmail()).toBe(testEmail);
})

// get role via getRole()
test("Test role.", () => {
  const returnValue = "Employee";
  const employee = new Employee("Louis", 5, "Lkgk31@gmail.com");
  expect(employee.getRole()).toBe(returnValue);
})