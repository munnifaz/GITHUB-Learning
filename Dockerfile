# Use nginx as the base image
FROM nginx:alpine

# Copy your project files to the nginx html directory
COPY ./*.html /usr/share/nginx/html/
COPY ./*.css /usr/share/nginx/html/
COPY ./*.js /usr/share/nginx/html/
COPY ./*.jpg /usr/share/nginx/html/
COPY ./*.png /usr/share/nginx/html/

# Expose port 80
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]