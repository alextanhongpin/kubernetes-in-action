## Listing pods using a label selector

Listing pods with label selector:

```bash
$ kubectl get po -l creation_method=manual
```

Output:

```
NAME              READY     STATUS    RESTARTS   AGE
kubia-manual      1/1       Running   0          32m
kubia-manual-v2   1/1       Running   0          12m
```

## Listing pods with columnar label

```bash
$ kubectl get po -l env
```

Output:

```
NAME              READY     STATUS    RESTARTS   AGE
kubia-manual-v2   1/1       Running   0          15m
```

## Listing pods without the label

```bash
$ kubectl get po -l '!env'
```

Output:

```
NAME           READY     STATUS    RESTARTS   AGE
kubia-8fwwr    1/1       Running   0          53m
kubia-l181d    1/1       Running   0          1h
kubia-manual   1/1       Running   0          35m
kubia-sbxn4    1/1       Running   0          53m
```

## Others

- match pods that label does not equal value: `kubectl get po -l creation_method!=manual`
- match pods in options: `kubectl get po -l 'env in (prod,debug)'`
- match not in options: `kubectl get po -l 'env notin (prod,debug)'`