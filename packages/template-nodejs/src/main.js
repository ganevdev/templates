// start main
console.log('start main');

/**
 * Some predefined delays (in milliseconds).
 */
const Delays = {
  Short: 500,
  Medium: 2000,
  Long: 5000,
}

/**
 * Returns a Promise<string> that resolves after given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */
function delayedHello(
  name,
  delay = Delays.Medium
) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Hello, ${name}`), delay)
  );
}

// Below are examples of using ESLint errors suppression
// Here it is suppressing missing return type definitions for greeter function

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function greeter(name) {
  return await delayedHello(name, Delays.Long);
}

module.exports = {Delays, greeter}