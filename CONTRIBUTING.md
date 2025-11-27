# Contributing to Meal Sharing Project

First off, thank you for considering contributing to the Meal Sharing Project! 🎉

It's people like you that make this project such a great tool for the community. We welcome contributions from everyone, whether it's a bug report, new feature, correction, or additional documentation.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#-reporting-bugs)
  - [Suggesting Features](#-suggesting-features)
  - [Pull Requests](#-pull-requests)
- [Style Guides](#style-guides)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript Style Guide](#javascript-style-guide)
  - [CSS Style Guide](#css-style-guide)
- [Development Setup](#development-setup)
- [Community](#community)

---

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

---

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
   ```bash
   git clone https://github.com/YOUR-USERNAME/Meal-Sharing-Project.git
   cd Meal-Sharing-Project
   ```
3. **Add the upstream remote**
   ```bash
   git remote add upstream https://github.com/nishadipri/Meal-Sharing-Project.git
   ```
4. **Create a branch** for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Set up the development environment** (see [SETUP.md](./SETUP.md))

---

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

When you are creating a bug report, please include as many details as possible using our [bug report template](./.github/ISSUE_TEMPLATE/bug_report.md):

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected
- **Include screenshots and animated GIFs** if possible
- **Include your environment details** (OS, Node.js version, browser, etc.)

### 💡 Suggesting Features

Feature suggestions are tracked as GitHub issues. When creating a feature request:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested feature
- **Explain why this feature would be useful** to most users
- **List any alternative solutions** you've considered
- **Include mockups or examples** if applicable

Use our [feature request template](./.github/ISSUE_TEMPLATE/feature_request.md) for consistency.

### 🔧 Pull Requests

1. **Follow the style guides** outlined below
2. **Write or update tests** for your changes
3. **Update documentation** as needed
4. **Ensure all tests pass** before submitting
5. **Link to any relevant issues** in the PR description

#### Pull Request Process

1. Update the README.md or relevant documentation with details of changes
2. Update the CHANGELOG.md if applicable
3. Ensure your code follows our ESLint and Prettier configurations
4. The PR will be merged once you have the sign-off of at least one maintainer

---

## Style Guides

### Git Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

#### Examples
```
feat(meals): add search functionality for meals list

fix(reservations): resolve date formatting issue on Safari

docs(readme): update installation instructions

style(components): apply consistent formatting to all files
```

### JavaScript Style Guide

We use ESLint with our custom configuration. Key rules include:

- Use **ES6+** features (arrow functions, destructuring, template literals)
- Use **const** for variables that won't be reassigned, **let** otherwise
- Use **async/await** over Promises where possible
- Use **meaningful variable and function names**
- Add **JSDoc comments** for functions and complex logic
- Keep functions **small and focused** (single responsibility)

```javascript
// ✅ Good
const fetchMeals = async () => {
  try {
    const response = await api.get('/meals');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch meals:', error);
    throw error;
  }
};

// ❌ Bad
function fetchMeals() {
  return api.get('/meals').then(function(response) {
    return response.data;
  }).catch(function(error) {
    console.log(error);
  });
}
```

### CSS Style Guide

- Use **CSS modules** or scoped styles where possible
- Follow **BEM naming convention** for class names
- Use **CSS variables** for colors, fonts, and spacing
- Keep selectors **shallow** (avoid deep nesting)
- Mobile-first approach for **responsive design**

```css
/* ✅ Good */
.meal-card {
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
}

.meal-card__title {
  font-size: var(--font-size-lg);
  color: var(--color-primary);
}

/* ❌ Bad */
.container .content .meal-card .title span {
  font-size: 18px;
  color: #333;
}
```

---

## Development Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Set up the database**
   ```bash
   # See SETUP.md for detailed instructions
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Run linting**
   ```bash
   npm run lint
   ```

6. **Format code**
   ```bash
   npm run format
   ```

For detailed setup instructions, see [SETUP.md](./SETUP.md).

---

## Community

- 💬 **Discussions**: Use GitHub Discussions for questions and ideas
- 🐛 **Issues**: Report bugs and request features through GitHub Issues
- 📧 **Email**: Contact the maintainers for private concerns

---

## Recognition

Contributors will be recognized in our README and release notes. We appreciate every contribution, big or small!

---

Thank you for contributing to the Meal Sharing Project! 🙏
