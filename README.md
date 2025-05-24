<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A microservices-based backend system built using NestJS, focused on modularity, scalability, and maintainability.</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

---

## 📦 Project Structure

This repository contains a microservice-based architecture built with NestJS:

```

project-root/
├── api-gateway/                # Central API Gateway (entry point)
├── asset-management-service/  # Handles assets (CRUD, assignments, etc.)
├── general-insurance-service/ # Manages insurance products and logic
├── service-registry/          # Basic service discovery or health registry
````

---

## 🚀 Features

- 🧱 Modular microservices architecture
- 🚪 Gateway-based routing and central access
- 📡 TCP-based communication between services
- 📊 Built-in Prometheus monitoring per service
- 🔐 Environment-based configuration
- 🧪 Full test support: unit, e2e
- 🗃️ MySQL database integration (TypeORM)

---

## 🛠️ Tech Stack

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [Prometheus](https://prometheus.io/) (monitoring)
- [RxJS](https://rxjs.dev/) for microservice messaging
- REST + TCP transport layer

---

## 🧰 Prerequisites

1. **Node.js** (v18 or higher recommended)
2. **MySQL** running locally (default: `localhost:3306`)
3. **Redis** *(optional, if needed later for queues)*
4. **Prometheus** *(optional for monitoring)*

---

## ⚙️ Environment Variables

Create a `.env` file in each microservice (and the gateway) based on `.env.example`.

Example (`asset-management-service/.env`):

```env
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=asset_db
````

---

## 🧪 Running the Project

### 1. Clone the repo

```bash
git clone https://github.com/Solomon-254/CIC-Microservice
cd CIC-Microservice
```

---

### 2. Start MySQL and create databases

Use a GUI (e.g., MySQL Workbench) or terminal:

```sql
CREATE DATABASE cic;
```

---

### 3. Run each service - start with registry first

#### API Gateway (port 3003)

```bash
cd api-gateway
npm install
npm run start:dev
```

#### Asset Management Service (port 3001)

```bash
cd asset-management-service
npm install
npm run start:dev
```

#### General Insurance Service (port 3002)

```bash
cd general-insurance-service
npm install
npm run start:dev
```

#### Service Registry (port 3000)

```bash
cd service-registry
npm install
npm run start:dev
```

---

## 📊 Monitoring (Optional)

Each service exposes metrics at `http://localhost:<port>/metrics` using `prom-client`.

To enable:

* Install Prometheus on your system
* Add each service `/metrics` endpoint to the `prometheus.yml` config

Basic config snippet:

```yaml
scrape_configs:
  - job_name: 'asset-service'
    static_configs:
      - targets: ['localhost:3001']

  - job_name: 'insurance-service'
    static_configs:
      - targets: ['localhost:3002']
```

Start Prometheus and view metrics on [http://localhost:9090](http://localhost:9090).

---

## 🧪 Testing

Each service supports testing:

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Coverage report
npm run test:cov
```

## 🧩 Future Enhancements

* ✅ Authentication microservice
* ✅ Email/SMS Notification microservice
* ✅ Caching via Redis
* ✅ Service mesh (e.g., with NATS or gRPC)
* ✅ Dockerized deployment

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

NestJS and this template are [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

---

## 👨‍💻 Author

* Main Framework: [NestJS](https://nestjs.com/)
* Author: Me!


---

 
