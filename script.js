// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  while (true) {
    try {
      // Attempt to multiply, if it works, return the result.
      return primitiveMultiply(a, b);
    } catch (e) {
      // Only handle MultiplicatorUnitFailure exceptions.
      if (e instanceof MultiplicatorUnitFailure) {
        // If it's a failure, just continue trying.
        continue;
      }
      // If another error occurs, this will throw it again.
      throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));
