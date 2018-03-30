# Talking to the API Server from Pod

## Create

```bash
$ kubectl create -f curl.yml
pod "curl" created
```

## Curl

```bash
$ kubectl exec -it curl bash

root@curl:/# env | grep KUBERNETES_SERVICE
KUBERNETES_SERVICE_PORT=443
KUBERNETES_SERVICE_HOST=10.96.0.1
KUBERNETES_SERVICE_PORT_HTTPS=443
```