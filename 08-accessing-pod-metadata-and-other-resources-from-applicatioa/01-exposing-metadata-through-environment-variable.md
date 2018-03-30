# Exposing metadata through environment variables


## Create

```bash
$ kubectl create -f downward-api-env.yml
pod "downward" created
```

## Verify

```bash
$ kubectl exec downward env
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=downward
POD_NAME=downward
POD_NAMESPACE=172.17.0.5
NODE_NAME=minikube
SERVICE_ACCOUNT=default
CONTAINER_CU_REQUEST_MILLICORES=15
CONTAINER_MEMORY_LIMITS_KIBIBYTES=4096
KUBERNETES_PORT_443_TCP_PORT=443
KUBERNETES_PORT_443_TCP_ADDR=10.96.0.1
KUBERNETES_SERVICE_HOST=10.96.0.1
KUBERNETES_SERVICE_PORT=443
KUBERNETES_SERVICE_PORT_HTTPS=443
KUBERNETES_PORT=tcp://10.96.0.1:443
KUBERNETES_PORT_443_TCP=tcp://10.96.0.1:443
KUBERNETES_PORT_443_TCP_PROTO=tcp
HOME=/root
```