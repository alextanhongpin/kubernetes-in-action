# Service Account

## Get

```bash
$ kubectl get sa
NAME      SECRETS   AGE
default   1         3s
```

## Create

```bash
$ kubectl create sa foo
serviceaccount "foo" created
```

## Describe

```bash
$ kubectl describe sa foo
Name:                foo
Namespace:           default
Labels:              <none>
Annotations:         <none>
Image pull secrets:  <none>
Mountable secrets:   foo-token-wptxm
Tokens:              foo-token-wptxm
Events:              <none>
```

## View Secrets created by Service Account

```bash
$ kubectl get secrets
NAME                  TYPE                                  DATA      AGE
default-token-vscrt   kubernetes.io/service-account-token   3         2m
foo-token-wptxm       kubernetes.io/service-account-token   3         1m
tls-secret            kubernetes.io/tls
```

## Service Account with Image Pull Secret

```yml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-service-account
imagePullSecrets:
- name: my-dockerhub-secret
```