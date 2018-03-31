# StatefulSets

```bash
# Watch creation
$ kubectl get pods -w -l app=nginx

# Create
$ kubectl create -f statefulsets-02.yml
service "nginx" created
statefulset "web" created
```

## Display

```bash
$ kubectl get svc nginx
NAME      TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
nginx     ClusterIP   None         <none>        80/TCP    34s

$ kubectl get sts web
NAME      DESIRED   CURRENT   AGE
web       2         1         1m
```