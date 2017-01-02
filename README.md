## Database

Setup up mongo as a docker container

```
docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_USER="rupam" -e MONGODB_DATABASE="spaWithTokenAuth" -e MONGODB_PASS="tiger" tutum/mongodb
```

To connect to the mongodb

```
docker run -it --link spa-mongo:mongo --rm mongo sh -c 'exec mongo spaWithTokenAuth -u rupam -p tiger --host spa-mongo --port 27017'
```