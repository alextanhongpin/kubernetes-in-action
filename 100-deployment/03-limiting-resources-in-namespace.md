# Limiting resources in namespace

## Create Namespace

```bash
$ kubectl create namespace default-mem-example
```

## Create LimitRange

```bash
$ kubectl create -f namespace-limit.yaml -n default-mem-example
limitrange "mem-limit-range" created
```

## Validate

Validate that the limis is imposed:

```bash
$ kubectl describe po echo-66558d568f-7wxq6 -n default-mem-example
...
    Limits:
      memory:  512Mi
    Requests:
      memory:     256Mi
    Environment:  <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-r6ltg (ro)
...
```