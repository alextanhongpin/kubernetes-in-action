## Sending requests to pods

Forward port to your `localhost:8888`:

```bash
$ kubectl port-forward kubia-manual 8888:8080
```

Output:

```
Forwarding from 127.0.0.1:8888 -> 8080
```