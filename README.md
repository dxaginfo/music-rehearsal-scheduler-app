# Rehearsal Scheduler

A comprehensive web application for music groups to schedule rehearsals, track attendance, and optimize practice time.

## 🎵 Overview

Rehearsal Scheduler is designed to streamline the process of coordinating band rehearsals by:

- Automatically suggesting optimal rehearsal times based on member availability
- Sending automated reminders to reduce no-shows
- Tracking attendance and participation
- Managing rehearsal details including location, equipment needs, and song lists
- Providing calendar integration for seamless scheduling

## 🚀 Features

- **User Management** - Registration, authentication, and role-based access
- **Availability Tracking** - Calendar interface for members to mark availability
- **AI-Powered Scheduling** - Smart suggestions based on collective availability
- **Attendance Tracking** - RSVP functionality and attendance history
- **Notification System** - Automated email/SMS reminders
- **Calendar Integration** - Sync with Google Calendar, iCal, and Outlook
- **Mobile Responsiveness** - Full functionality across all devices

## 🛠️ Technology Stack

### Frontend
- React with TypeScript
- Redux Toolkit for state management
- Material-UI component library
- FullCalendar.js for calendar views

### Backend
- Node.js with Express
- RESTful API with OpenAPI documentation
- JWT authentication
- PostgreSQL database with Prisma ORM
- Redis for caching and performance

### DevOps
- Docker containerization
- CI/CD with GitHub Actions
- AWS deployment (EC2/ECS)

## 📋 Requirements

- Node.js (v16+)
- PostgreSQL (v13+)
- Redis (v6+)
- npm or yarn

## 🔧 Setup Instructions

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/dxaginfo/music-rehearsal-scheduler-app.git
   cd music-rehearsal-scheduler-app
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy example environment files
   cp frontend/.env.example frontend/.env
   cp backend/.env.example backend/.env
   
   # Update the environment variables with your local configuration
   ```

4. **Database Setup**
   ```bash
   # Run database migrations
   cd backend
   npx prisma migrate dev
   ```

5. **Start Development Servers**
   ```bash
   # Start backend server
   cd backend
   npm run dev
   
   # In another terminal, start frontend server
   cd frontend
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Documentation: http://localhost:5000/api-docs

### Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access the containerized application**
   - Application: http://localhost:8080

## 📝 Documentation

- [API Documentation](./docs/api.md)
- [Database Schema](./docs/database.md)
- [User Guide](./docs/user-guide.md)
- [Developer Guide](./docs/developer-guide.md)

## 🔐 Security

This application implements several security measures:
- HTTPS for all communications
- JWT with secure refresh token mechanism
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting to prevent abuse
- CSRF protection

## 🌱 Future Enhancements

- Mobile applications (iOS/Android)
- Integration with music streaming platforms
- Advanced analytics on rehearsal effectiveness
- Equipment inventory management
- Recording capabilities for rehearsals
- Sheet music integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request