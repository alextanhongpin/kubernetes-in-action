# Running Pods in privileged mode

## Create

```bash
$ kubectl create -f pod-privileged.yaml
```

## List of available devices in non-privileged pod

```bash
$ kubectl exec -it pod-with-defaults ls /dev
```

## List of available devices in privileged pod

```bash
$ kubectl exec -it pod-privileged ls /dev
```