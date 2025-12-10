# Weather App

A full-stack weather application built with **Java Quarkus** for the backend and **React + Vite** for the frontend.
The application uses OpenWeatherMap API for fetching real-time weather data for the specified city.

### Backend
* **Java 17+**
* **Quarkus** (Supersonic Subatomic Java)
* **RESTEasy Reactive** (JAX-RS)
* **MicroProfile REST Client** (For external API calls)
* **MicroProfile Config** (For environment variable management)

### Frontend
* **React.js**
* **Vite** (Build tool)
* **CSS3**

---

## Prerequisites

Before running the project, make sure you have the following installed:

* Java JDK 17 or later
* Maven (or use the included `mvnw` wrapper)
* Node.js & npm
* An API Key from [OpenWeatherMap](https://openweathermap.org/)

---

## Setup

### 1. Clone the repository
```bash
git clone [https://github.com/klsova/weather-app.git](https://github.com/yourusername/weather-app.git)
cd weather-app
```

### 2. Backend Setup (Quarkus)

Navigate to the backend folder:

```bash
cd backend
```

Create a .env file in the root of the backend directory to store your API key securely. Do not commit this file.

```# .env file content
OPENWEATHER_API_KEY=your_actual_api_key_here
```

Run the backend in dev mode:
```bash
mvn quarkus:dev
```

The backend will start at http://localhost:8080.

### 3. Frontend Setup (React)

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Run the frontend in dev mode:

```bash
npm run dev
```

The frontend will start at http://localhost:5173.

## Future implemetations / todo

- Add a 5-day forecast view

- Implement Redis caching to minimzie API calls

- Add error handling for invalid city names in the UI

- Dockerizig the app
