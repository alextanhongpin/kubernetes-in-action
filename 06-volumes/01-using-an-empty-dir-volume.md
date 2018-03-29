# Building the fortune container image

To build your own version for the fortune container:

```bash
$ docker build -t alextanhongpin/fortune .
```

## Deploy

```bash
$ kubectl create -f fortune-pod
pod "fortune" created

# Forward the port 80 in the container to port 8080 on localhost
$ kubectl port-forward fortune 8080:80

$ curl localhost:8080
Q:	What do you call a WASP who doesn't work for his father, isn't a
	lawyer, and believes in social causes?
A:	A failure.
```

## Clear

```bash
$ kubectl delete po fortune
pod "fortune" deleted
```
