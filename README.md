<div align="center">

# 🍽️ Meal Sharing Project

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.x-336791)](https://www.postgresql.org/)

**A dynamic full-stack web application for sharing and discovering delicious meals in your community**

[Live Demo](https://meal-sharing-project.onrender.com) · [Report Bug](./.github/ISSUE_TEMPLATE/bug_report.md) · [Request Feature](./.github/ISSUE_TEMPLATE/feature_request.md)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Demo Video](#-demo-video)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Troubleshooting](#-troubleshooting)

---

## About The Project

The Meal Sharing Project is a community-driven platform that connects food enthusiasts. Whether you're a home chef looking to share your culinary creations or someone seeking homemade meals, this platform brings people together through the joy of food.

This project was developed as part of the Hack Your Future CPH course, showcasing modern full-stack development practices.

---

## ✨ Features

- 🍕 **Browse Meals** - View all available meals with ratings and reviews
- ⭐ **Reviews & Ratings** - Read and write reviews for meals
- 📝 **Create Meals** - Share your own meals with the community
- 📅 **Reservations** - Book a spot at your favorite meals
- 👤 **User Management** - Create and manage user profiles
- 🔍 **Search & Filter** - Find exactly what you're craving
- 📱 **Responsive Design** - Works seamlessly on all devices

---

## 🛠 Tech Stack

### Frontend
| Technology | Description |
|------------|-------------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | UI Library |
| ![React Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white) | CSS Framework |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling |

### Backend
| Technology | Description |
|------------|-------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | Runtime Environment |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) | Web Framework |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) | Database |

### Tools & DevOps
| Technology | Description |
|------------|-------------|
| ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=flat&logo=webpack&logoColor=black) | Module Bundler |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white) | Code Linting |
| ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black) | Code Formatting |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js
- **PostgreSQL** (v15 or higher) - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishadipri/Meal-Sharing-Project.git
   cd Meal-Sharing-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration (see [Environment Variables](#environment-variables))

4. **Set up the database**
   ```bash
   # Create database and run migrations
   psql -U postgres -f database_dump_meals.sql
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - API: [http://localhost:5000/api](http://localhost:5000/api)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `DB_HOST` | Database host | `127.0.0.1` |
| `DB_USER` | Database username | `postgres` |
| `DB_PASSWORD` | Database password | `your_password` |
| `DB_NAME` | Database name | `meal_sharing` |
| `DB_PORT` | Database port | `5432` |
| `NODE_ENV` | Environment mode | `development` |
| `API_PORT` | API server port | `5000` |
| `API_PATH` | API base path | `/api` |
| `CLIENT_PORT` | Client dev server port | `3000` |

> 📖 See [.env.example](./.env.example) for a complete template with detailed comments.

---

## 💻 Usage

### Development Mode
```bash
# Run both frontend and backend in development mode
npm run dev

# Run only the backend server
npm run server

# Run only the frontend client
npm run client
```

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format
```

---

## 📚 API Documentation

For detailed API documentation, see [API.md](./API.md).

### Quick Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/meals` | Get all meals |
| `GET` | `/api/meals/:id` | Get a specific meal |
| `GET` | `/api/reservations` | Get all reservations |
| `POST` | `/api/reservations` | Create a reservation |
| `PUT` | `/api/reservations/:id` | Update a reservation |
| `DELETE` | `/api/reservations/:id` | Delete a reservation |
| `POST` | `/api/review` | Create a review |

---

## 📸 Screenshots

<div align="center">

### Home Page
![Home Page](./src/client/assets/images/screenshootTwo.png)

### Meal Details
![Meal Details](./src/client/assets/images/screenshootOne.png)

</div>

---

## 🎬 Demo Video

Watch a quick demo of the Meal Sharing Project in action:

[![Demo Video](https://img.shields.io/badge/Watch-Demo%20Video-red?style=for-the-badge&logo=loom)](https://www.loom.com/share/9ce1ce1ae41147be8cc173d1613d60a3?sid=485660a0-8abf-4237-9fef-46412e34c930)

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read our [Contributing Guidelines](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before getting started.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 📬 Contact

**Project Maintainer:** Benjamin Hughes

**Project Link:** [https://github.com/nishadipri/Meal-Sharing-Project](https://github.com/nishadipri/Meal-Sharing-Project)

**Live Demo:** [https://meal-sharing-project.onrender.com](https://meal-sharing-project.onrender.com)

---

## ❓ Troubleshooting

### Common Issues

#### Database Connection Failed
```
Error: ECONNREFUSED 127.0.0.1:5432
```
**Solution:** Ensure PostgreSQL is running and the credentials in `.env` are correct.

#### Port Already in Use
```
Error: EADDRINUSE: address already in use :::5000
```
**Solution:** Change the port in your `.env` file or kill the process using that port:
```bash
# Find process using port 5000
lsof -i :5000
# Kill the process
kill -9 <PID>
```

#### Module Not Found
```
Error: Cannot find module 'xyz'
```
**Solution:** Delete `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
**Solution:** Ensure you're using the correct Node.js version:
```bash
node --version  # Should be >= 18.0.0
```

For more help, see our [Setup Guide](./SETUP.md) or [open an issue](https://github.com/nishadipri/Meal-Sharing-Project/issues).

---

<div align="center">

**Made with ❤️ by the Meal Sharing Team**

⭐ Star us on GitHub — it motivates us a lot!

</div>


















