# Scaling ReplicationController

```bash
$ kubectl scale rc kubia --replicas=10
```

Output:

```
replicationcontroller "kubia" scaled
```

Validate:

```bash
$ kubectl get rc
```

Output:

```
NAME      DESIRED   CURRENT   READY     AGE
kubia     10        10        10        53m
```
