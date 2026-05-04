# Paso 1: Usa una imagen base de Node.js
FROM node:18 AS build

# Paso 2: Establece el directorio de trabajo
WORKDIR /app

# Paso 3: Copia el archivo package.json y el lock file (si tienes)
COPY package*.json ./

# Paso 4: Instala las dependencias
RUN npm install

# Paso 5: Copia el resto del código fuente
COPY . .

# Paso 6: Construye el proyecto
RUN npm run build

# Paso 7: Usa una imagen de Nginx para servir la app
FROM nginx:alpine

# Paso 8: Copia el contenido de la carpeta build generada por React a Nginx
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Paso 9: Expone el puerto 80
EXPOSE 80

# Paso 10: Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
