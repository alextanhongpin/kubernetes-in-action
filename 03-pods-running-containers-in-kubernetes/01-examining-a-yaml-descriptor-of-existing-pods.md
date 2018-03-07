## List pods

```bash
$ kubectl get po
```

Output:

```
NAME          READY     STATUS    RESTARTS   AGE
kubia-8fwwr   1/1       Running   0          10m
kubia-l181d   1/1       Running   0          31m
kubia-sbxn4   1/1       Running   0          10m
```

## Pod YAML Descriptor

```bash
$ kubectl get po kubia-8fwwr -o yaml
```

Output:

```
apiVersion: v1
kind: Pod
metadata:
  annotations:
    kubernetes.io/created-by: |
      {"kind":"SerializedReference","apiVersion":"v1","reference":{"kind":"ReplicationController","namespace":"default","name":"kubia","uid":"8b59b4f5-221b-11e8-8cec-08002756a598","apiVersion":"v1","resourceVersion":"1992"}}
  creationTimestamp: 2018-03-07T15:44:52Z
  generateName: kubia-
  labels:
    run: kubia
  name: kubia-8fwwr
  namespace: default
  ownerReferences:
  - apiVersion: v1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicationController
    name: kubia
    uid: 8b59b4f5-221b-11e8-8cec-08002756a598
  resourceVersion: "2019"
  selfLink: /api/v1/namespaces/default/pods/kubia-8fwwr
  uid: 79d097a2-221e-11e8-8cec-08002756a598
spec:
  containers:
  - image: alextanhongpin/kube-node
    imagePullPolicy: IfNotPresent
    name: kubia
    ports:
    - containerPort: 8080
      protocol: TCP
    resources: {}
    terminationMessagePath: /dev/termination-log
    terminationMessagePolicy: File
    volumeMounts:
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: default-token-h9wm9
      readOnly: true
  dnsPolicy: ClusterFirst
  nodeName: minikube
  restartPolicy: Always
  schedulerName: default-scheduler
  securityContext: {}
  serviceAccount: default
  serviceAccountName: default
  terminationGracePeriodSeconds: 30
  volumes:
  - name: default-token-h9wm9
    secret:
      defaultMode: 420
      secretName: default-token-h9wm9
status:
  conditions:
  - lastProbeTime: null
    lastTransitionTime: 2018-03-07T15:44:52Z
    status: "True"
    type: Initialized
  - lastProbeTime: null
    lastTransitionTime: 2018-03-07T15:44:54Z
    status: "True"
    type: Ready
  - lastProbeTime: null
    lastTransitionTime: 2018-03-07T15:44:52Z
    status: "True"
    type: PodScheduled
  containerStatuses:
  - containerID: docker://360b93b3a756c762e07904eba77c80298bfec77cf4e1f26e39ffd1c3671cbd03
    image: alextanhongpin/kube-node:latest
    imageID: docker://sha256:103de7149878de216a4e636f309412045c394ca3d607190875600a35353121b8
    lastState: {}
    name: kubia
    ready: true
    restartCount: 0
    state:
      running:
        startedAt: 2018-03-07T15:44:53Z
  hostIP: 192.168.99.100
  phase: Running
  podIP: 172.17.0.5
  qosClass: BestEffort
  startTime: 2018-03-07T15:44:52Z
```