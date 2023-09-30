// person.ts

/**
 * Represents a person with basic information.
 */
export interface IPerson {
  /**
   * The first name of the person.
   */
  firstName: string;

  /**
   * The last name of the person.
   */
  lastName: string;

  /**
   * The age of the person.
   */
  age: number;
}

/**
 * A function that formats a person's name.
 * @param person - The person to format.
 * @returns The formatted name in the "Last Name, First Name" format.
 * @example
 * ```typescript
 * const person = { firstName: 'John', lastName: 'Doe', age: 30 };
 * const formattedName = formatName(person);
 * // formattedName will be 'Doe, John'
 * ```
 */
export type NameFormatter = (person: IPerson) => string;

/**
 * Represents a person with basic information and provides methods to interact with the person.
 */
export class Person {
  /**
   * Creates a new Person instance.
   * @param firstName - The first name of the person.
   * @param lastName - The last name of the person.
   * @param age - The age of the person.
   * @example
   * ```typescript
   * const person = new Person('John', 'Doe', 30);
   * ```
   */
  constructor(public firstName: string, public lastName: string, public age: number) {}

  /**
   * Gets the full name of the person.
   * @returns The full name in the "First Name Last Name" format.
   * @example
   * ```typescript
   * const person = new Person('John', 'Doe', 30);
   * const fullName = person.getFullName();
   * // fullName will be 'John Doe'
   * ```
   */
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Calculates the birth year of the person based on the current year and age.
   * @returns The birth year of the person.
   * @example
   * ```typescript
   * const person = new Person('John', 'Doe', 30);
   * const birthYear = person.calculateBirthYear();
   * // Assuming the current year is 2023, birthYear will be 1993
   * ```
   */
  calculateBirthYear(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

/**
 * A default person object.
 * @example
 * ```typescript
 * const defaultPerson: IPerson = {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   age: 30
 * };
 * ```
 */
export const defaultPerson: IPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

/**
 * Formats the name of a person.
 * @param person - The person to format.
 * @returns The formatted name in the "Last Name, First Name" format.
 * @example
 * ```typescript
 * const person = { firstName: 'John', lastName: 'Doe', age: 30 };
 * const formattedName = formatName(person);
 * // formattedName will be 'Doe, John'
 * ```
 */
export function formatName(person: IPerson): string {
  return `${person.lastName}, ${person.firstName}`;
}
