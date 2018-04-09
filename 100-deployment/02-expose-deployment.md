
## Expose Deployment

```bash
$ kubectl expose deployment echo --type=NodePort --name=echo
service "echo" exposed
```

## Describe

See the exposed `NodePort`:

```
$ kubectl describe svc echo
Name:                     echo
Namespace:                default
Labels:                   app=echo
Annotations:              <none>
Selector:                 app=echo
Type:                     NodePort
IP:                       10.107.85.88
Port:                     <unset>  8080/TCP
TargetPort:               8080/TCP
NodePort:                 <unset>  30504/TCP
Endpoints:                172.17.0.4:8080,172.17.0.5:8080
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
```

Call the endpoint:

```bash
$ curl http://$(minikube ip):30504
{"hostname":"echo-69756699f-qg4mt","text":"hello"}%
```
