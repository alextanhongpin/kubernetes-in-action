# Running pod as root

## Create

```bash
$ kubectl run pod-with-defaults --image alpine --restart Never -- /bin/sleep 999999
```

## View

The container is running as `uid` and `gid` `0`, which is `root`.
```bash
$ kubectl exec pod-with-defaults id
```
