// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Testing
const employee1 = createEmployee(200);
console.log(employee1.constructor.name);
if (employee1 instanceof Teacher) {
  console.log(employee1.workTeacherTasks());
}

const employee2 = createEmployee(1000);
console.log(employee2.constructor.name);
if (employee2 instanceof Director) {
  console.log(employee2.workDirectorTasks());
}

const employee3 = createEmployee('$500');
console.log(employee3.constructor.name);
if (employee3 instanceof Director) {
  console.log(employee3.workDirectorTasks());
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

executeWork(createEmployee(200));   // Should print: Getting to work
executeWork(createEmployee(1000));  // Should print: Getting to director tasks

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  // Optional fallback (won't be reached because of type safety)
  return "";
}

// Test examples
console.log(teachClass("Math"));     // Output: Teaching Math
console.log(teachClass("History"));  // Output: Teaching History

