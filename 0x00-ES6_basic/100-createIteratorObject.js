export default function createIteratorObject(report) {
  function* iterator() {
    const departments = Object.values(report.allEmployees);
    const flattenedEmployees = departments.flat();

    for (const employee of flattenedEmployees) {
      yield employee;
    }
  }

  return iterator();
}

