# Exposing metadata through Downward API volume

```bash
$ kubectl create -f downward-api-volume.yml
pod "downward" created
```

```bash
$ kubectl exec downward ls /etc/downward
annotations
containerCpuRequestMillicores
containerMemoryLimitBytes
labels
podName
podNamespace
```

```bash
$ kubectl exec downward cat /etc/downward/labels
foo="bar"

$ kubectl exec downward cat /etc/downward/containerCpuRequestMillicores
15
```
