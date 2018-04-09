# Configure a Pod Quota for a Namespace

## Create Namespace

```bash
$ kubectl create ns quota-pod
namespace "quota-pod" created
```

## Create ResourceQuota

```bash
$ kubectl create -f resource-quota-pod.yaml -n quota-pod
resourcequota "pod-demo" created
```

## View

```bash
$ kubectl describe quota -n quota-pod
Name:       pod-demo
Namespace:  quota-pod
Resource    Used  Hard
--------    ----  ----
pods        0     2
```

## Create Deployment

```bash
$ kubectl create -f deployment.yaml -n quota-pod
service "echo" created
deployment.apps "echo" created
```

```bash
$ kubectl get deployment echo --output=yaml -n quota-pod
...
  - lastTransitionTime: 2018-04-09T07:43:30Z
    lastUpdateTime: 2018-04-09T07:43:30Z
    message: 'pods "echo-fd7bfd96-zrmts" is forbidden: exceeded quota: pod-demo, requested:
      pods=1, used: pods=2, limited: pods=2'
    reason: FailedCreate
    status: "True"
    type: ReplicaFailure
...
```