# Role Based Access Control

```bash
$ minikube start --extra-config=apiserver.Authorization.Mode=RBAC
```

## Create Namespaces

```bash
$ kubectl create ns foo
namespace "foo" created
```

## Create role for the namespace

```bash
$ kubectl create -f role.yml -n foo
role "service-reader" created

$ kubectl get roles -n foo
NAME             AGE
service-reader   1m
```

## Create rolebinding

```bash
$ kubectl create -f rolebinding.yml
rolebinding "test" created
```

## Verify

```bash
$ kubectl auth can-i list services -n foo  --as foo
yes

$ kubectl auth can-i delete services -n foo  --as foo
yes
```