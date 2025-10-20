# Step 1: Build the app
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy everything and build the jar
COPY . .
RUN mvn clean package -DskipTests

# Step 2: Run the app
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy built jar from the previous step
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]