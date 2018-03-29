# Using Git repository as a starting point


## Create
```bash
$ kubectl create -f gitrepo-volume-pod.yml
pod "gitrepo-volume-pod" created
```

## Validate
```bash
$ kubectl port-forward gitrepo-volume-pod 9000:80

$ curl localhost:9000
Hello there.
```

## Clear

```bash
$ kubectl delete po gitrepo-volume-pod
pod "gitrepo-volume-pod" deleted
```