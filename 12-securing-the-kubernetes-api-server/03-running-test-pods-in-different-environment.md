# Running test pods in different environment

```bash
$ kubectl create ns foo
namespace "bar" created

$ kubectl run test --image=luksa/kubectl-proxy -n foo
deployment.apps "test" created

$ kubectl create ns bar
namespace "bar" created

$ kubectl run test --image=luksa/kubectl-proxy -n bar
deployment.apps "test" created
```

## Accessing Pod Shell

```bash
$ kubectl get po -n foo
NAME                   READY     STATUS    RESTARTS   AGE
test-d8578bdc9-nzk2l   1/1       Running   0          6m
```

Exec:

```bash
$ kubectl exec -it test-d8578bdc9-nzk2l -n foo sh
```

Call the api:

```bash
$ curl localhost:8001/api/v1/namespaces/foo/services
{
  "kind": "Status",
  "apiVersion": "v1",
  "metadata": {

  },
  "status": "Failure",
  "message": "services is forbidden: User \"system:serviceaccount:foo:default\" cannot list services in the namespace \"foo\"",
  "reason": "Forbidden",
  "details": {
    "kind": "services"
  },
  "code": 403
```