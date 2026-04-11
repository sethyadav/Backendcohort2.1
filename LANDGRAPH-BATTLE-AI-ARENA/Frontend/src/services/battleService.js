/**
 * battleService.js
 *
 * Calls your LangGraph backend to get:
 *   - solution_1  (string, markdown)
 *   - solution_2  (string, markdown)
 *   - judge       { solution_1_score, solution_2_score,
 *                   solution_1_reasoning, solution_2_reasoning }
 *
 * If no backend is available, falls back to rich mock data so the UI
 * is fully demonstrable without a running server.
 */

const API_BASE = import.meta.env.VITE_API_URL || ''

/** Main entry — tries real API, falls back to mock */
export async function generateBattleResponse(problem) {
  if (API_BASE) {
    try {
      const res = await fetch(`${API_BASE}/battle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problem }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return await res.json()
    } catch (err) {
      console.warn('API call failed, using mock data:', err.message)
    }
  }

  // Simulate network delay for demo
  await delay(1800 + Math.random() * 800)
  return getMockData(problem)
}

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

// ─── Mock Data ───────────────────────────────────────────────────────────────

function getMockData(problem) {
  return {
    problem,
    solution_1: `Here's a simple implementation of a factorial function in JavaScript using both **iterative** and **recursive** approaches:

### 1. **Iterative Approach (Using a Loop)**
\`\`\`javascript
function factorial(n) {
    if (n < 0) return NaN; // Factorial of negative numbers is undefined
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120 (5! = 5 × 4 × 3 × 2 × 1)
\`\`\`

### 2. **Recursive Approach (Function calls itself)**
\`\`\`javascript
function factorial(n) {
    if (n < 0) return NaN; // Factorial of negative numbers is undefined
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}

// Example usage:
console.log(factorial(5)); // Output: 120
\`\`\`

### Key Notes:
- **Factorial of 0** is \`1\` (by definition).
- **Negative numbers** have no factorial (returns \`NaN\`).
- The **iterative** approach is generally more efficient for large numbers (avoids stack overflow).
- The **recursive** approach is elegant but may hit stack limits for very large \`n\`.

Would you like an optimized version (e.g., using memoization)? 😊`,

    solution_2: `Here's a simple implementation of a factorial function in JavaScript using both **recursive** and **iterative** approaches:

### Recursive Approach:
\`\`\`javascript
function factorialRecursive(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Example usage:
console.log(factorialRecursive(5)); // Output: 120
\`\`\`

### Iterative Approach:
\`\`\`javascript
function factorialIterative(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorialIterative(5)); // Output: 120
\`\`\`

### Explanation:
- **Factorial** of a non-negative integer \`n\` is the product of all positive integers ≤ \`n\`. For example, \`5! = 5 * 4 * 3 * 2 * 1 = 120\`.
- The **recursive** version calls itself with \`n-1\` until it reaches the base case.
- The **iterative** version uses a loop to multiply numbers from \`2\` to \`n\`.

Both methods work, but the iterative approach is generally more efficient for large values of \`n\`.`,

    judge: {
      solution_1_score: 10,
      solution_2_score: 9,
      solution_1_reasoning:
        'Solution 1 is comprehensive and mathematically sound. It provides both iterative and recursive implementations, correctly handles the base case for 0, and uses NaN (Not-a-Number) for negative inputs, which is the standard JavaScript convention for undefined mathematical results. It also includes helpful performance notes regarding stack overflow in recursion.',
      solution_2_reasoning:
        "Solution 2 is highly accurate and provides both implementations. It is slightly less optimal than Solution 1 because it returns 'undefined' for negative numbers instead of 'NaN', which is typically preferred for numerical functions in JavaScript. While the explanation is clear, it lacks the specific mention of stack overflow limits found in Solution 1.",
    },
  }
}
