# Running as user guest


## Create

Id 405 coressponds to the guest user:

```bash
$ kubectl create -f pod-as-user-guest.yaml
```

## View

```bash
$ kubectl exec pod-as-user-guest id
uid=405(guest) gid=100(users)
```