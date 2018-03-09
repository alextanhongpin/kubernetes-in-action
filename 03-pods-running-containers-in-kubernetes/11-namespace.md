# Namespace

## Discovering namespace

```bash
$ kubectl get ns
```

Output:

```
NAME          STATUS    AGE
default       Active    1d
kube-public   Active    1d
kube-system   Active    1d
```

## Listing pods that belongs to a namespace

```bash
$ kubectl get po -n kube-public
$ kubectl get po --namespace kube-system
```

## Creating namespace

```bash
$ kubectl create namespace custom-namespace
```

Output:

```
namespace "custom-namespace" created
```

## Adding pod to namespace

```bash
$ kubectl create -f kubia-manual.yml -n custom-namespace
```

Output:

```
pod "kubia-manual" created
```

Validate:

```bash
$ kubectl get po -n custom-namespace
```