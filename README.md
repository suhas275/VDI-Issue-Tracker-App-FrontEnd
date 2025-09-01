# VDI Issue Tracker Application

A comprehensive Angular-based issue tracking system designed for VDI (Virtual Desktop Infrastructure) environments. This application allows users to report, track, and manage technical issues efficiently.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **Issue Management**: Create, view, edit, and delete issues
- **User Management**: Admin panel for user management
- **Real-time Updates**: Live issue status tracking
- **Comment System**: Collaborative issue resolution
- **Role-based Access**: Different permissions for users and admins
- **Search & Filter**: Advanced filtering capabilities

## 📁 Project Structure

This project follows Angular best practices with a feature-based architecture:

```
src/
├── app/
│   ├── core/                           # Core functionality (singletons)
│   │   ├── guards/
│   │   │   └── authguard.guard.ts     # Authentication guard
│   │   ├── interceptors/
│   │   │   └── auth-interceptor.interceptor.ts  # HTTP interceptor for auth
│   │   └── services/
│   │       ├── user-service.service.ts # Main service for API calls
│   │       ├── user.ts                 # User interface/model
│   │       └── user.spec.ts            # Service tests
│   ├── features/                       # Feature modules
│   │   ├── authentication/
│   │   │   └── components/
│   │   │       ├── login/              # Login component
│   │   │       └── register/           # Registration component
│   │   ├── issues/
│   │   │   └── components/
│   │   │       ├── issue-list/         # List all issues
│   │   │       │   ├── all-issues.component.*
│   │   │       │   ├── view-issue/     # View issue details
│   │   │       │   └── edit-issue/     # Edit existing issues
│   │   │       └── issue-create/       # Create new issues
│   │   ├── users/
│   │   │   └── components/
│   │   │       ├── user-list/          # List all users (admin)
│   │   │       └── user-profile/       # User profile management
│   │   └── home/                       # Home dashboard
│   ├── layout/                         # Layout components
│   │   └── components/
│   │       └── navbar/                 # Navigation bar
│   ├── app.component.*                 # Root component
│   ├── app.routes.ts                   # Application routing
│   ├── app.config.ts                   # App configuration
│   └── app.config.server.ts            # Server-side configuration
├── assets/                             # Static assets
└── styles.css                          # Global styles
```

## 🏗️ Architecture Overview

### **Core Module**
- **Guards**: Route protection and authentication
- **Interceptors**: HTTP request/response handling
- **Services**: Shared business logic and API communication

### **Features Module**
- **Authentication**: User login and registration
- **Issues**: Complete issue lifecycle management
- **Users**: User management and profiles
- **Home**: Dashboard and navigation

### **Layout Module**
- **Components**: Reusable UI components like navigation

## 🛠️ Technology Stack

- **Frontend**: Angular 17 (Standalone Components)
- **Styling**: CSS3 with modern design patterns
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router with guards
- **State Management**: RxJS BehaviorSubject
- **UI Components**: Custom components with responsive design
- **Alerts**: SweetAlert for user notifications

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Angular CLI** (v17 or higher)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd VDI-Issue-Tracker-App-FrontEnd
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create environment files if needed:
```bash
# src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8586',
  issueApiUrl: 'http://localhost:8585'
};
```

### 4. Start Development Server
```bash
ng serve
```

The application will be available at `http://localhost:4200`

## 🔧 Development Commands

```bash
# Development server
ng serve

# Build for production
ng build

# Run tests
ng test

# Lint code
ng lint

# Generate component
ng generate component path/to/component

# Generate service
ng generate service path/to/service
```

## 📱 Application Flow

### **Authentication Flow**
1. User visits `/login` or `/register`
2. Authentication service validates credentials
3. JWT token stored in localStorage
4. User redirected to `/homepage`

### **Issue Management Flow**
1. **Create Issue**: User navigates to `/raiseissue`
2. **View Issues**: Admin/User views `/allissues`
3. **Edit Issue**: Click edit button → `/editissue/:id`
4. **View Details**: Click view button → `/viewissue/:id`

### **User Management Flow**
1. **User List**: Admin accesses `/allusers`
2. **User Profile**: User manages profile at `/profile`

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Route Guards**: Protected routes for authenticated users
- **HTTP Interceptors**: Automatic token injection
- **Role-based Access**: Different permissions for users and admins

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Interface**: Clean and intuitive user experience
- **Real-time Feedback**: Immediate user feedback for actions
- **Accessibility**: WCAG compliant design patterns

## 📊 API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/addUser` - User registration
- `GET /auth/getUsers` - Get all users
- `PUT /auth/{id}` - Update user

### Issues
- `POST /add` - Create new issue
- `GET /all` - Get all issues
- `GET /issues/{id}` - Get issue by ID
- `PUT /update/{id}` - Update issue
- `DELETE /delete/{id}` - Delete issue

### Comments
- `GET /comments/issues/{issueId}` - Get comments for issue
- `POST /comments/issues/{issueId}` - Add comment to issue

## 🧪 Testing

```bash
# Run unit tests
ng test

# Run e2e tests
ng e2e

# Generate test coverage
ng test --code-coverage
```

## 📦 Build & Deployment

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration production
```

### Docker Deployment
```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style Guidelines

### **Naming Conventions**
- **Components**: PascalCase (e.g., `IssueListComponent`)
- **Services**: PascalCase (e.g., `UserService`)
- **Files**: kebab-case (e.g., `issue-list.component.ts`)
- **Folders**: kebab-case (e.g., `issue-list/`)

### **File Organization**
- Each component has its own folder
- Component files: `.component.ts`, `.component.html`, `.component.css`
- Service files: `.service.ts`
- Interface files: `.ts` (no suffix)

### **Import Structure**
```typescript
// Angular imports first
import { Component } from '@angular/core';

// Third-party imports
import { Router } from '@angular/router';

// Local imports
import { UserService } from '../../core/services/user.service';
```

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors**
   - Check import paths after folder restructuring
   - Ensure all dependencies are installed

2. **Build errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check Angular version compatibility

3. **CORS issues**
   - Ensure backend CORS configuration matches frontend URL
   - Check API endpoint URLs in services

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔄 Version History

- **v1.0.0** - Initial release with basic issue tracking
- **v1.1.0** - Added user management features
- **v1.2.0** - Implemented comment system
- **v1.3.0** - Restructured to industry-standard folder organization

---

**Note**: This application is designed for VDI environments and includes specific features for technical issue tracking and resolution.
