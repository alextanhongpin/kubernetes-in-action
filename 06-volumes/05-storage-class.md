# Storage class


## Create

```bash
$ kubectl create -f storageclass-fast-hostpath.yml
storageclass.storage.k8s.io "fast" created
```

## View
```bash
$ kubectl get sc
NAME                 PROVISIONER                AGE
fast                 k8s.io/minikube-hostpath   17s
standard (default)   k8s.io/minikube-hostpath   43m
```

## Describe

```bash
$ kubectl describe sc fast
Name:                  fast
IsDefaultClass:        No
Annotations:           <none>
Provisioner:           k8s.io/minikube-hostpath
Parameters:            type=pd-ssd
AllowVolumeExpansion:  <unset>
MountOptions:          <none>
ReclaimPolicy:         Delete
VolumeBindingMode:     Immediate
Events:                <none>
```

## Delete

```bash
$ kubectl delete sc fast
storageclass.storage.k8s.io "fast" deleted
```