# LoadBalancer

## Create

```bash
# Create Service
$ kubectl create -f ../kubia-replicaset.yaml
replicaset "kubia" created

# Create LoadBalancer
$ kubectl create -f kubia-svc-loadbalancer.yaml
service "kubia-loadbalancer" created
```

## List

```bash
$ kubectl get svc kubia-loadbalancer
NAME                 TYPE           CLUSTER-IP   EXTERNAL-IP   PORT(S)        AGE
kubia-loadbalancer   LoadBalancer   10.0.0.100   <pending>     80:30787/TCP   9m
```

For minikube, no external ip will be created - but you can make a call this way:

```bash
$ curl http://$(minikube ip):30787
You have've hit kubia-f59p0%
```
