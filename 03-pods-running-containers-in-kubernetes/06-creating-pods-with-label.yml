## Creating Pods with Label

```bash
$ kubectl create -f kubia-manual-v2.yml
```

Output:

```
pod "kubia-manual-v2" created
```

## Display

```bash
$ kubectl get po
```

Output:

```
NAME              READY     STATUS    RESTARTS   AGE
kubia-8fwwr       1/1       Running   0          37m
kubia-l181d       1/1       Running   0          58m
kubia-manual      1/1       Running   0          20m
kubia-manual-v2   1/1       Running   0          5s
kubia-sbxn4       1/1       Running   0          37m
```

## Display with labels

```
$ kubectl get po --show-labels
```

Output:

```
kubia-8fwwr       1/1       Running   0          40m       run=kubia
kubia-l181d       1/1       Running   0          1h        run=kubia
kubia-manual      1/1       Running   0          22m       <none>
kubia-manual-v2   1/1       Running   0          2m        creation_method=manual,env=prod
kubia-sbxn4       1/1       Running   0          40m       run=kubia
```

## Listing Pods with certain labels

```bash
$ kubectl get po -L creation_method,env
```

Output:

```
NAME              READY     STATUS    RESTARTS   AGE       CREATION_METHOD   ENV
kubia-8fwwr       1/1       Running   0          41m
kubia-l181d       1/1       Running   0          1h
kubia-manual      1/1       Running   0          23m
kubia-manual-v2   1/1       Running   0          3m        manual            prod
kubia-sbxn4       1/1       Running   0          41m
```