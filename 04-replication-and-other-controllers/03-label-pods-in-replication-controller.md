# Adding labels to pods managed by a ReplicationController

## View current pods

```bash
$ kubectl get po --show-labels
```

Output:

```
NAME             READY     STATUS    RESTARTS   AGE
kubia-ctcxf      1/1       Running   0          9m        app=kubia
kubia-gm14k      1/1       Running   0          6m        app=kubia
kubia-jx7fm      1/1       Running   0          9m        app=kubia
```

## Adding a label to the pod

```bash
$ kubectl label po kubia-ctcxf app=foo --overwrite
```

Output:

```
pod "kubia-ctcxf" labeled
```

Validate:

```bash
$ kubectl get po --show-labels
```

Output:

```
kubia-ctcxf      1/1       Running   0          10m       app=foo
kubia-gm14k      1/1       Running   0          7m        app=kubia
kubia-jx7fm      1/1       Running   0          10m       app=kubia
kubia-v4n7z      1/1       Running   0          18s       app=kubia
```

Or:

```bash
$ kubectl get po -L app
```

Output:

```
NAME             READY     STATUS    RESTARTS   AGE       APP
kubia-ctcxf      1/1       Running   0          11m       foo
kubia-gm14k      1/1       Running   0          8m        kubia
kubia-jx7fm      1/1       Running   0          11m       kubia
kubia-liveness   1/1       Running   0          33m
kubia-v4n7z      1/1       Running   0          1m        kubia
```
