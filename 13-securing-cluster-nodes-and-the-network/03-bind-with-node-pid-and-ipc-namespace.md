## Using the node's PID and IPC namespaces

## Create

```bash
$ kubectl create -f pod-with-host-pid-and-ipc.yaml
```

## View

```bash
$ kubectl exec pod-with-host-pid-and-ipc ps aux
```