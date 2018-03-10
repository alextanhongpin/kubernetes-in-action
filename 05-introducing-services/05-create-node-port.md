## Creating NodePort

```bash
$ kubectl create -f kubia-svc-nodeport.yaml
```

Output:

```
service "kubia-nodeport" created
```

Validate:

```bash
$ kubectl get svc kubia-nodeport
```

Output:

```
NAME             TYPE       CLUSTER-IP   EXTERNAL-IP   PORT(S)        AGE
kubia-nodeport   NodePort   10.0.0.163   <none>        80:30123/TCP   10m
```