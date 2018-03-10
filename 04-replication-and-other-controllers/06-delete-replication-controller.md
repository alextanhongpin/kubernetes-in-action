## Deleting ReplicationController without affecting Pods

```bash
$ kubectl delete rc kubia --cascade=false
```

Output:

```
replicationcontroller "kubia" deleted
```

The pods are not deleted:

```bash
$ kubectl get po
```

Output:

```
NAME             READY     STATUS    RESTARTS   AGE       LABELS
kubia-18dcg      1/1       Running   0          12m       app=kubia
kubia-1sthh      1/1       Running   0          12m       app=kubia
kubia-2chsm      1/1       Running   0          12m       app=kubia
kubia-3006f      1/1       Running   0          12m       app=kubia
kubia-ctcxf      1/1       Running   0          56m       app=foo
kubia-g58dz      1/1       Running   0          12m       app=kubia
kubia-gm14k      1/1       Running   0          53m       app=kubia
kubia-hw6tc      1/1       Running   0          12m       app=kubia
kubia-jx7fm      1/1       Running   0          56m       app=kubia
kubia-liveness   1/1       Running   0          1h        <none>
kubia-sq77k      1/1       Running   0          12m       app=kubia
kubia-v4n7z      1/1       Running   0          46m       app=kubia
```