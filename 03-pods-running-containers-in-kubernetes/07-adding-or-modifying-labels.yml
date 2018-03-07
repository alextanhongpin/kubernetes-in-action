## Adding labels

```
$ kubectl label po kubia-manual creation_method=manual
```

Output:

```
pod "kubia-manual" labeled
```

Verify:

```bash
$ kubectl get po --show-labels
```

Output:

```
kubia-8fwwr       1/1       Running   0          44m       run=kubia
kubia-l181d       1/1       Running   0          1h        run=kubia
kubia-manual      1/1       Running   0          26m       creation_method=manual
kubia-manual-v2   1/1       Running   0          6m        creation_method=manual,env=prod
kubia-sbxn4       1/1       Running   0          44m       run=kubia
```

## Overwrite

```bash
$ kubectl label po kubia-manual-v2 env=debug --overwrite
```

Output:

```bash
pod "kubia-manual-v2" labeled
```

Verify:

```bash
$ kubectl get po --show-labels
```

Output:

```
NAME              READY     STATUS    RESTARTS   AGE       LABELS
kubia-8fwwr       1/1       Running   0          45m       run=kubia
kubia-l181d       1/1       Running   0          1h        run=kubia
kubia-manual      1/1       Running   0          27m       creation_method=manual
kubia-manual-v2   1/1       Running   0          7m        creation_method=manual,env=debug
kubia-sbxn4       1/1       Running   0          45m       run=kubia
```