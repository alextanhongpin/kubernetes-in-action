## Creating a ReplicationController

```bash
$ kubectl create -f 04-replication-and-other-controllers/kubia-rc.yaml
```

Output:

```
replicationcontroller "kubia" created
```

Validate:

```bash
$ kubectl get rc
```

Output:

```
NAME      DESIRED   CURRENT   READY     AGE
kubia     3         3         0         1m
```

## View pods under the ReplicationController:

```bash
$ kubectl get po
```

Output:

```
NAME             READY     STATUS    RESTARTS   AGE
kubia-07b89      1/1       Running   0          1m
kubia-ctcxf      1/1       Running   0          1m
kubia-jx7fm      1/1       Running   0          1m
kubia-liveness   1/1       Running   0          23m
```

## Seeing the ReplicationController respond to a delete pod

Delete a pod:
```bash
$ kubectl delete po kubia-07b89
$ kubectl get po
```

Output:

```
NAME             READY     STATUS        RESTARTS   AGE
kubia-07b89      1/1       Terminating   0          3m
kubia-ctcxf      1/1       Running       0          3m
kubia-gm14k      1/1       Running       0          8s // Restarting
kubia-jx7fm      1/1       Running       0          3m
kubia-liveness   1/1       Running       0          25m
```

## Getting information about a ReplicationController

```bash
$ kubectl describe rc kubia
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
    Port:         8080/TCP
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Events:
  Type    Reason            Age   From                    Message
  ----    ------            ----  ----                    -------
  Normal  SuccessfulCreate  4m    replication-controller  Created pod: kubia-jx7fm
  Normal  SuccessfulCreate  4m    replication-controller  Created pod: kubia-ctcxf
  Normal  SuccessfulCreate  4m    replication-controller  Created pod: kubia-07b89
  Normal  SuccessfulCreate  53s   replication-controller  Created pod: kubia-gm14k
```