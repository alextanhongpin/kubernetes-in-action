# Configure Memory and CPU Quotas for a Namespace


## Create namespace

```bash
$ kubectl create namespace quota-mem-cpu-example
namespace "quota-mem-cpu-example" created
```

## Create ResourceQuota

```bash
$ kubectl create -f resource-quota.yaml -n quota-mem-cpu-example
resourcequota "quota-mem-cpu-example" created
```

## Get detail information

```bash
$ kubectl describe resourcequota quota-mem-cpu-demo --namespace=quota-mem-cpu-example
```

Output:

```bash
Name:            quota-mem-cpu-example
Namespace:       quota-mem-cpu-example
Resource         Used  Hard
--------         ----  ----
limits.cpu       0     2
limits.memory    0     2Gi
requests.cpu     0     1
requests.memory  0     1Gi
```

## Understand the spec

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: mem-cpu-demo
spec:
  hard:
    requests.cpu: 1
    requests.memory: 1Gi
    limits.cpu: 2
    limits.memory: 2Gi
```

The requirements imposed in the namespace is as follow:

- Every container must have a memory request, memory limit, cpu request and cpu limit
- The memory request total for all Containers must not exceed 1GiB
- The memory limits total for all Containers must not exceed 2GiB
- The CPU request total for all Containers must not exceed 1 cpu
- The CPU limit total for all Containers must not exceed 2 cpu