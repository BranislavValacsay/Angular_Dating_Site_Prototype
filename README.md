# Dating portal frontkend written in Angular 11.0.6 (upgrade possible)

## About This Project

This repository contains the example codebase of Angular Frontend for dating site.


## Built With

- [Angular](https://angular.io/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - For advanced styling
- [ngx-bootstrap](https://www.npmjs.com/package/ngx-toastr) - so pages are scalable, mobile view

## Features
- authentication and authorization
- user filtering on various criteria
- user detailed profile, including gender, location, photos, bio...
- instant messaging
- emails
- possible to "like" user
- functional gallery administration
- presnce tracking (colors - green, yellow, red)
- pagination
- profile manament
- profile photo management
- photo gallery
- user BIO
- user search by criteria (gender, age , city, state..)
- DTOs, Interceptors, Services, Lazy loading to offload Database


### Authentication System

- Secure login (JWT)
- Password recovery mechanism
- Registration form


### Internal Management

- User and profile management
- User data management
- Presence tracking
- Internal communication tools
- SignalR for instal messaging
- Error handling (404 and 401)


### Admin Dashboard Backend

- user rights adminstration (admin, user)


### User Management

- CRUD operations for user accounts
- Role and permission management system


## Technical Specifications
### Authorization & Authentication

- Implement JWT (JSON Web Tokens) for secure authentication
- Role-based access control
- Router AuthGuard based on roles

### Search Functionality

- Implement search for advanced querying
- Pagination
- Design and implement multi-criteria filtering logic

Security Measures

- Implement HTTPS for all communications
- Cross-Origin Resource Sharing (CORS) configuration
- Input sanitization to prevent SQL injection and XSS attacks

Deployment and DevOps

- Possible containerization using Docker for consistent environments
- CI/CD pipeline setup for automated testing and deployment
- Environment-specific configuration management

### Installation
1. Clone the repository
   ```
   git clone https://github.com/BranislavValacsay/Angular_Dating_Site_Prototype.git
   ```
2. Navigate to the project directory
   ```
   cd Angular_Dating_Site_Prototype\src\app
   ```
3. [Any additional setup steps]

### Running the Application
- [Instructions on how to run the application locally]
```
  ng serve
```


## Contact

- LinkedIn: [https://www.linkedin.com/in/branislav-valacsay/](https://www.linkedin.com/in/branislav-valacsay/)
- Email: branislav.valacsay@archdev.tech
- Website: http://archdev.tech

---

"Blending creativity with technology to create something useful and engaging."
