# Ingress

## Enable Ingress

```bash
$ minikube addons list
```

Output:

```
- registry-creds: disabled
- default-storageclass: enabled
- ingress: disabled
- kube-dns: enabled
- heapster: disabled
- registry: disabled
- addon-manager: enabled
- dashboard: enabled
```

Enable:

```bash
$ minikube addons enable ingress
ingress was successfully enabled
```

Verify:

```bash
$ kubectl get po --all-namespaces
```

Output:

```
NAMESPACE     NAME                             READY     STATUS              RESTARTS   AGE
default       kubia-5448k                      1/1       Running             0          12m
default       kubia-dqzzr                      1/1       Running             0          12m
default       kubia-f59p0                      1/1       Running             0          12m
kube-system   default-http-backend-q8dgq       0/1       ContainerCreating   0          8m
kube-system   kube-addon-manager-minikube      1/1       Running             3          2d
kube-system   kube-dns-910330662-04d15         3/3       Running             6          2d
kube-system   kubernetes-dashboard-fvtv4       1/1       Running             2          2d
kube-system   nginx-ingress-controller-rvvqp   0/1       ContainerCreating   0          8m
```