# Namespace

## Create

```bash
$ kubectl create -f namespace.yaml
namespace "dev" created
```


## Switch Namespace

```bash
$ kubectl config set-context $(kubectl config current-context) --namespace=dev
Context "minikube" modified.
```