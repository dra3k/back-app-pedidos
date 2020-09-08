# COMANDOS GIT

## 1. iniciar un repositorio local

-solo para los que estan iniciando el proyecto desde 0

```
git init
# el resultado
# Initialized empty Git repository in C:/Users/JUAN/Desktop/poryectoConBlumbit/.git/
```

-para los que ya tienen el proyecto iniciado

```
git clone <direccion remota>
```

-para verificar el estado de cambios del proyecto

```
git status
```

-para agregar todos los archivos a la zona intermedia(INDEX AREA DE ESPERA)

```
git add .
```

-para agregar al area de espera(HEAD)

```
git commit -m "primer mensaje"
```

### ahora ya estamos preparados para subir al repositorio remoto

- si quieres conectar tu repositorio local a un repositorio remoto:

```
git remote add origin <servidor>
git remote add origin https://github.com/dra3k/back-app-pedidos.git
```

-para verificar las direcciones remotas

```
git remote -v
```

-por ultimo para subir el repositorio local al repositorio remoto

```
git push origin master
```
