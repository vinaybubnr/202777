# Variables in JavaScript / TypeScript

## `var`

- Function-scoped (or globally scoped if declared outside a function)
- Can be re-declared and updated
- Hoisted to the top of its scope (initialized as `undefined`)

```ts
var a = 10;
var a = 20; // re-declaration allowed
console.log(a); // 20
```

---

## `let`

- Block-scoped (`{}`)
- Can be updated but **cannot** be re-declared in the same scope
- Hoisted but **not initialized** (Temporal Dead Zone)

```ts
let b = 10;
b = 20; // update allowed
// let b = 30; // Error: Cannot redeclare block-scoped variable 'b'
console.log(b); // 20
```

---

## `const`

- Block-scoped (`{}`)
- **Cannot** be updated or re-declared
- Must be initialized at the time of declaration
- For objects/arrays, the reference is constant but contents can change

```ts
const c = 10;
// c = 20; // Error: Assignment to constant variable

const obj = { name: "Alice" };
obj.name = "Bob"; // allowed — modifying the object, not the reference
```

---

## Comparison Table

| Feature        | `var`       | `let`       | `const`     |
|----------------|-------------|-------------|-------------|
| Scope          | Function    | Block       | Block       |
| Re-declarable  | Yes         | No          | No          |
| Updatable      | Yes         | Yes         | No          |
| Hoisted        | Yes (as `undefined`) | Yes (TDZ) | Yes (TDZ) |

---

## Best Practices

- Prefer `const` by default
- Use `let` when the variable needs to be reassigned
- Avoid `var` in modern TypeScript/JavaScript
