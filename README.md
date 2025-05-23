Sure! Here's an updated README tailored to the microservice NestJS project we've completed, including project setup, metrics endpoint with Prometheus, and health checks like actuators:

---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side microservices and applications.
</p>

---

## Description

This project is a **NestJS microservice** application built with TypeScript. It includes:

* Modular architecture for separation of concerns
* Prometheus metrics endpoint for monitoring
* Health checks endpoints (similar to Spring Boot Actuator)
* Integration with databases and external services
* Designed for scalability and observability in production environments

---

## Project setup

```bash
npm install
```

---

## Running the project

```bash
# development mode
npm run start:dev

# production mode
npm run start:prod
```

---

## Available endpoints

| Endpoint   | Description                            |
| ---------- | -------------------------------------- |
| `/health`  | Health check endpoint (database, etc.) |
| `/metrics` | Prometheus-compatible metrics endpoint |
| `/api/...` | Your microservice API endpoints        |

---

## Prometheus metrics setup

* Metrics are exposed at `/metrics` endpoint using [prom-client](https://github.com/siimon/prom-client).
* Integrate with Prometheus by scraping this endpoint for observability.
* Default metrics include memory usage, event loop lag, HTTP request metrics, and custom app metrics.

---

## Health Checks

* The `/health` endpoint is implemented using [@nestjs/terminus](https://docs.nestjs.com/recipes/terminus).
* Performs readiness and liveness probes, including database connectivity checks.
* Useful for Kubernetes or container orchestrators for health monitoring.

---

## Running tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

---

## Resources

* [NestJS Documentation](https://docs.nestjs.com)
* [NestJS Terminus (Health Checks)](https://docs.nestjs.com/recipes/terminus)
* [prom-client GitHub](https://github.com/siimon/prom-client) for metrics
* [Discord Community](https://discord.gg/G7Qnnhy) for support
* [NestJS Official Courses](https://courses.nestjs.com/)

---

## Support

This project is open source under the MIT license. Contributions and sponsorships are welcome to support ongoing development.

---

## Stay in touch

* Author - \[CIC]
* Website - [https://nestjs.com](https://nestjs.com/)
* Twitter - [@nestframework](https://twitter.com/nestframework)

---

## License

MIT License

---
