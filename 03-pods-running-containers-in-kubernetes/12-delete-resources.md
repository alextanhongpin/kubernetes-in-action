## Delete a pod by name

```bash
$ kubectl delete po kubia-gpu
```

Output:

```
pod "kubia-manual-v2" deleted
```

## Delete pods using label selectors

```bash
$ kubectl delete po -l creation_method=manual
```

Output:

```
pod "kubia-manual" deleted
```

## Delete pod by deleting namespace

```bash
$ kubectl delete ns custom-namespace
```

Output:

```
namespace "custom-namespace" deleted
```

## Delete all pods in namespace

```bash
$ kubectl delete po --all
```

## Deleting all resources in a namespace

```bash
$ kubectl delete all --all
```

Output:

```
pod "kubia-5g6pb" deleted
replicationcontroller "kubia" deleted
```