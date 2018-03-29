# Persistent Volume Claim

```bash
$ kubectl create -f persistent-volume-claim.yml
persistentvolumeclaim "myclaim" created

$ kubectl get pvc
NAME      STATUS    VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   AGE
myclaim   Pending                                       slow           32s

$ kubectl get pvc myclaim
```

## Claim as a volume

```yml
kind: Pod
apiVersion: v1
metadata:
  name: mypod
spec:
  containers:
    - name: myfrontend
      image: dockerfile/nginx
      volumeMounts:
      - mountPath: "/var/www/html"
        name: mypd
  volumes:
    - name: mypd
      persistentVolumeClaim:
        claimName: myclaim
```