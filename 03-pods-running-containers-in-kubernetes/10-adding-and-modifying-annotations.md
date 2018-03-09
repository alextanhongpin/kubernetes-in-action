# Adding and modifying annotations

```bash
$ kubectl annotate pod kubia-manual mycompany.com/someannotation="foo bar"
```

Output:

```
pod "kubia-manual" annotated
```

Validate:

```bash
$ kubectl get po kubia-manual -o yaml
```

Output:

```yaml
apiVersion: v1
kind: Pod
metadata:
  annotations:
    mycompany.com/someannotation: foo bar
  creationTimestamp: 2018-03-07T16:02:45Z
  labels:
    creation_method: manual
  name: kubia-manual
  namespace: default
  resourceVersion: "9306"
  selfLink: /api/v1/namespaces/default/pods/kubia-manual
  uid: f968e10f-2220-11e8-8cec-08002756a598
...
```