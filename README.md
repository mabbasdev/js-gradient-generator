# CSS Gradient Generator

A lightweight, browser-based tool Gradient Generator Tool that lets you generate random linear gradients and copy the CSS code instantly without any libraries or frameworks, just vanilla JavaScript. This helps me to avoid overthinking like should i use it or how a does a specific gradient look?
It help me to find the best matching gradient colors for my work.

---

## 🚀 Live Preview

👉 [mabbasdev.github.io/js-gradient-generator](https://mabbasdev.github.io/js-gradient-generator/)

---

## 📸 Preview

> _(Add a screenshot or screen recording GIF here)_

---

## 🧠 Project Overview

This tool solves a small but real problem: quickly finding gradient combinations without opening a design tool or digging through gradient libraries. You randomize the left or right color independently, see the result live, and grab the CSS — done.

It's the kind of utility that lives open in a browser tab while you're working on a frontend project.

---

## ⚙️ Features

- **Independent color randomization** — change the left or right gradient color separately, so you can lock one and explore options for the other
- **Live preview** — the gradient updates in real time without a page reload
- **One-click CSS copy** — copies the exact `background: linear-gradient(...)` line to your clipboard
- **Visual copy feedback** — the copy button briefly turns green and shows "Copied!" so you know it worked
- **Minimal UI** — no unnecessary controls; built to stay out of your way

---

## 🧩 Concepts Used

| Concept | Where it's used |
|---|---|
| DOM manipulation | Selecting and updating elements with `getElementById`, `querySelector` |
| Event listeners | `click` events on randomize and copy buttons |
| `Math.random()` | Generating random hex color codes |
| Template literals | Building the `linear-gradient()` string dynamically |
| Clipboard API | `navigator.clipboard.writeText()` for copy-to-clipboard |
| `setTimeout` | Resetting the copy button state after 1.5 seconds |
| CSS transitions | Smooth gradient change on the preview box |
| String construction | Building valid 6-digit hex codes character by character |

---

## 💡 Key Learning

The hex color generator was the most interesting part to think through. Instead of reaching for a library or using `Math.random().toString(16)`, I built it manually — iterating over a character set and picking random indices. It's a simple approach, but it makes the logic completely transparent and easy to reason about.

The Clipboard API also required thinking about UX: copying silently is a bad pattern. The green flash + text swap on the button is a small detail, but it removes any doubt that the action worked.

---

## ⚠️ Challenges Faced

- **Hex code generation without a utility library** — Had to think through character-by-character construction to ensure valid 6-digit hex values every time.
- **Button state reset timing** — Getting the `setTimeout` duration right so the "Copied!" feedback feels responsive but doesn't disappear too quickly.
- **Keeping color state in sync** — Both buttons share `rgb1` and `rgb2` variables. Every update needs to rebuild the full gradient string so the preview and code output never fall out of sync.

---

## 🔧 How It Works

1. Two color variables (`rgb1`, `rgb2`) hold the current left and right gradient colors.
2. Clicking **Left** or **Right** calls `hexValues()`, which builds a random 6-character hex code by sampling from `"0123456789abcdef"`.
3. The new color is stored in the corresponding variable, applied to the preview box as a CSS gradient, and reflected in the code output.
4. Clicking **Copy** passes the code output text to `navigator.clipboard.writeText()` and briefly updates the button to confirm the action.

---

## 📁 Project Structure

```
js-gradient-generator/
├── index.html      # Markup and layout
├── styles.css      # All styling including card, buttons, preview, code block
└── script.js       # Color generation, DOM updates, clipboard logic
```

---

## 🛠️ Future Improvements

- [ ] Add a gradient angle control (slider from 0°–360°)
- [ ] Support more than two color stops
- [ ] Add radial gradient mode alongside linear
- [ ] Let users manually enter hex values instead of only randomizing
- [ ] Add a history panel showing previously generated gradients

---

## 🔗 Repository

[github.com/mabbasdev/js-gradient-generator](https://github.com/mabbasdev/js-gradient-generator)

---

## 📌 Connect

> _(Add your LinkedIn profile link here)_

---

## ⭐ Support

If this was useful, a star on the repo goes a long way. It helps others find it too.
