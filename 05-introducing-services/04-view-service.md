# View Service

```bash
$ kubectl describe svc kubia
```

Output:

```
Name:              kubia
Namespace:         default
Labels:            <none>
Annotations:       <none>
Selector:          app=kubia
Type:              ClusterIP
IP:                10.0.0.118
Port:              <unset>  80/TCP
TargetPort:        8080/TCP
Endpoints:         <none>
Session Affinity:  None
Events:            <none>
```

## Getting Service Endpoints

```bash
$ kubectl get endpoints kubia
```

Output:

```
NAME      ENDPOINTS   AGE
kubia     <none>      23m
```