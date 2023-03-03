/**
 * Uppercases the first character of a string and lowercases the rest.
 *
 * @param str - The string to capitalize.
 * @returns   The capitalized string.
 * @example
 *
 * ```
 * capitalize("hello"); // "Hello"
 * capitalize("WorLD"); // "World"
 * ```
 */
export function capitalize<S extends string>(str: S) {
  return (str[0].toUpperCase() + str.slice(1).toLowerCase()) as Capitalize<
    Lowercase<S>
  >
}

export const x = `${capitalize('hello world!')} ${capitalize(
  'this is a silly test!'
)}`

console.log(x)
