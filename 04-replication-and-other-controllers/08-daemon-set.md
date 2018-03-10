## Creating DaemonSet

```bash
$ kubectl create -f ssd-monitor-daemonset.yaml
```

Output:

```
daemonset "ssd-monitor" created
```

## Listing DaemonSet

```bash
$ kubectl get ds
```

Output:

```
NAME          DESIRED   CURRENT   READY     UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
ssd-monitor   0         0         0         0            0           disk=ssd        8m
```

## Labelling nodes

```bash
$ kubectl get no
```

Output:

```
NAME       STATUS    ROLES     AGE       VERSION
minikube   Ready     <none>    2d        v1.7.0
```

Label node:

```bash
$ kubectl label node minikube disk=ssd
```

Output:

```
node "minikube" labeled
```

Verify that DaemonSet has been deployed:

```bash
$ kubectl get ds
```

Output:

```
NAME          DESIRED   CURRENT   READY     UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
ssd-monitor   1         1         1         1            1           disk=ssd        11m
```

List pods:

```bash
$ kubectl get po
```

Output:

```
NAME                READY     STATUS    RESTARTS   AGE
kubia-2gz50         1/1       Running   0          21m
kubia-cfxwf         1/1       Running   0          21m
kubia-d9kxd         1/1       Running   0          21m
ssd-monitor-q4zk9   1/1       Running   0          9m
```

## Rewriting node label to remove DaemonSet

```bash
$ kubectl label node minikube disk=hdd --overwrite
```

Verify:

```bash
$ kubectl get ds
```

Output:

```
NAME          DESIRED   CURRENT   READY     UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
ssd-monitor   0         0         0         0            0           disk=ssd        13m
```

List pods:

```bash
$ kubectl get po
```

Output:

```
NAME                READY     STATUS        RESTARTS   AGE
kubia-2gz50         1/1       Running       0          22m
kubia-cfxwf         1/1       Running       0          22m
kubia-d9kxd         1/1       Running       0          22m
ssd-monitor-q4zk9   1/1       Terminating   0          10m
```