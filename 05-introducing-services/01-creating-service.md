# Service

## Creating

```bash
$ kubectl create -f kubia-svc.yaml
```

## Listing Service

```bash
$ kubectl get svc
```

Output:

```
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.0.0.1     <none>        443/TCP   2d
kubia        ClusterIP   10.0.0.118   <none>        80/TCP    8m
```

## Specifying port names in pod definition

```yaml
kind: Pod
spec:
  containers:
  - name: kubia
    ports:
    - name: http
      containerPort: 8080
    - name: https
      containerPort: 8443
```

## Referring to a named ports in a service

```yaml
apiVersion: v1
kind: Service
spec:
  ports:
  - name: http
    port: 80
    targetPort: http
  - name: https
    port: 443
    targetPort: https
```