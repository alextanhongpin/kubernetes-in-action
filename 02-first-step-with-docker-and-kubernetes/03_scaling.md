## Horizontally scaling the application


```bash
$ kubectl get rc
```

Output:

```
NAME      DESIRED   CURRENT   READY     AGE
kubia     1         1         1         20m
```

## Scaling

```bash
$ kubectl scale rc kubia --replicas=3
```

Output:

```
replicationcontroller "kubia" scaled
```

## Verify

```bash
$ kubectl get rc
```

Output:

```
NAME      DESIRED   CURRENT   READY     AGE
kubia     3         3         3         21m
```

## Check pods

```bash
$ kubectl get pods
```

Output:

```
NAME          READY     STATUS    RESTARTS   AGE
kubia-8fwwr   1/1       Running   0          1m
kubia-l181d   1/1       Running   0          22m
kubia-sbxn4   1/1       Running   0          1m
```

## Load balancing

```bash
$ kubectl describe svc kube-node
```

Output:

```
Name:                     kube-node
Namespace:                default
Labels:                   run=kubia
Annotations:              <none>
Selector:                 run=kubia
Type:                     LoadBalancer
IP:                       10.0.0.201
Port:                     <unset>  8080/TCP
TargetPort:               8080/TCP
NodePort:                 <unset>  31226/TCP
Endpoints:                172.17.0.4:8080,172.17.0.5:8080,172.17.0.6:8080
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
```

Verify:

```bash
$ curl $(minikube ip):31226
```

Output:

```
You have've hit kubia-8fwwr%
You have've hit kubia-sbxn4%
You have've hit kubia-sbxn4%
```

## Displaying the pod ip and node

```bash
$ kubectl get pods -o wide
```

Output:

```
NAME          READY     STATUS    RESTARTS   AGE       IP           NODE
kubia-8fwwr   1/1       Running   0          5m        172.17.0.5   minikube
kubia-l181d   1/1       Running   0          26m       172.17.0.4   minikube
kubia-sbxn4   1/1       Running   0          5m        172.17.0.6   minikube
```