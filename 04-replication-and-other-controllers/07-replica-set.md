# Creating a ReplicaSet

ReplicaSet belongs under the apiVersion `extensions/v1beta1`:

```bash
$ kubectl create -f kubia-replicaset.yaml
```

Output:

```
replicaset "kubia" created
```

## Listing ReplicaSet

```bash
$ kubectl get rs
```

Output:

```
NAME      DESIRED   CURRENT   READY     AGE
kubia     3         3         3         9m
```

## Describe ReplicaSet

```bash
$ kubectl describe rs kubia
```

Output:

```
Name:         kubia
Namespace:    default
Selector:     app=kubia
Labels:       app=kubia
Annotations:  <none>
Replicas:     3 current / 3 desired
Pods Status:  3 Running / 0 Waiting / 0 Succeeded / 0 Failed
Pod Template:
  Labels:  app=kubia
  Containers:
   kubia:
    Image:        alextanhongpin/kube-node
    Port:         <none>
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Events:
  Type    Reason            Age   From                   Message
  ----    ------            ----  ----                   -------
  Normal  SuccessfulCreate  11m   replicaset-controller  Created pod: kubia-d9kxd
  Normal  SuccessfulCreate  11m   replicaset-controller  Created pod: kubia-cfxwf
  Normal  SuccessfulCreate  11m   replicaset-controller  Created pod: kubia-2gz50
```

## View pods under ReplicaSet

```bash
$ kubectl get po
```

Output:

```
NAME          READY     STATUS    RESTARTS   AGE
kubia-2gz50   1/1       Running   0          10m
kubia-cfxwf   1/1       Running   0          10m
kubia-d9kxd   1/1       Running   0          10m
```