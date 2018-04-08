# Using Host Network

## Create

```bash
$ kubectl create -f pod-with-host-network.yaml
```

## Test

```bash
$ kubectl exec pod-with-host-network ifconfig
```