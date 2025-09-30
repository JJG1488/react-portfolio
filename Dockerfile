# # 1️⃣ FRONTEND BUILD STAGE
FROM node:18-alpine AS frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2️⃣ BACKEND BUILD STAGE
FROM node:18-alpine AS backend-build
WORKDIR /app
COPY backend/package*.json ./backend/
RUN cd backend && npm install
COPY backend ./backend

# 3️⃣ FINAL STAGE: Serve Frontend & Run Backend
FROM node:18-alpine
WORKDIR /app

# Copy backend files
COPY --from=backend-build /app/backend /app/backend

# Copy frontend build files
COPY --from=frontend-build /app/build /app/frontend

# Install a lightweight server for frontend
RUN npm install -g serve

# Expose backend and frontend ports
EXPOSE 5000 3000

# Start both backend and frontend
CMD ["sh", "-c", "node /app/backend/server.js & serve -s /app/frontend -l 3000"]
