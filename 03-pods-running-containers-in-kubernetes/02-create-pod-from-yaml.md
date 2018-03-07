## Using kubectl to create pod

```bash
$ kubectl create -f kubia-manual.yml
```

Output:

```bash
pod "kubia-manual" created
```

## Verify

```bash
$ kubectl get po
```

```
NAME           READY     STATUS    RESTARTS   AGE
kubia-8fwwr    1/1       Running   0          17m
kubia-l181d    1/1       Running   0          38m
kubia-manual   1/1       Running   0          4s
kubia-sbxn4    1/1       Running   0          17m
```

## Display YAML

```bash
$ kubectl get po kubia-manual -o yaml
```

Output:

```
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: 2018-03-07T16:02:45Z
  name: kubia-manual
  namespace: default
  resourceVersion: "3240"
  selfLink: /api/v1/namespaces/default/pods/kubia-manual
  uid: f968e10f-2220-11e8-8cec-08002756a598
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
    lastTransitionTime: 2018-03-07T16:02:45Z
    status: "True"
    type: Initialized
  - lastProbeTime: null
    lastTransitionTime: 2018-03-07T16:02:46Z
    status: "True"
    type: Ready
  - lastProbeTime: null
    lastTransitionTime: 2018-03-07T16:02:45Z
    status: "True"
    type: PodScheduled
  containerStatuses:
  - containerID: docker://bfe7b1fc2428e8241e679dbfa8accc5fe61c2ab50ad7e047e220207fe396fe4b
    image: alextanhongpin/kube-node:latest
    imageID: docker://sha256:103de7149878de216a4e636f309412045c394ca3d607190875600a35353121b8
    lastState: {}
    name: kubia
    ready: true
    restartCount: 0
    state:
      running:
        startedAt: 2018-03-07T16:02:46Z
  hostIP: 192.168.99.100
  phase: Running
  podIP: 172.17.0.7
  qosClass: BestEffort
```

## Get json

```bash
$ kubectl get po kubia-manual -o json
```

Output:

```
{
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
        "creationTimestamp": "2018-03-07T16:02:45Z",
        "name": "kubia-manual",
        "namespace": "default",
        "resourceVersion": "3240",
        "selfLink": "/api/v1/namespaces/default/pods/kubia-manual",
        "uid": "f968e10f-2220-11e8-8cec-08002756a598"
    },
    "spec": {
        "containers": [
            {
                "image": "alextanhongpin/kube-node",
                "imagePullPolicy": "IfNotPresent",
                "name": "kubia",
                "ports": [
                    {
                        "containerPort": 8080,
                        "protocol": "TCP"
                    }
                ],
                "resources": {},
                "terminationMessagePath": "/dev/termination-log",
                "terminationMessagePolicy": "File",
                "volumeMounts": [
                    {
                        "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
                        "name": "default-token-h9wm9",
                        "readOnly": true
                    }
                ]
            }
        ],
        "dnsPolicy": "ClusterFirst",
        "nodeName": "minikube",
        "restartPolicy": "Always",
        "schedulerName": "default-scheduler",
        "securityContext": {},
        "serviceAccount": "default",
        "serviceAccountName": "default",
        "terminationGracePeriodSeconds": 30,
        "volumes": [
            {
                "name": "default-token-h9wm9",
                "secret": {
                    "defaultMode": 420,
                    "secretName": "default-token-h9wm9"
                }
            }
        ]
    },
    "status": {
        "conditions": [
            {
                "lastProbeTime": null,
                "lastTransitionTime": "2018-03-07T16:02:45Z",
                "status": "True",
                "type": "Initialized"
            },
            {
                "lastProbeTime": null,
                "lastTransitionTime": "2018-03-07T16:02:46Z",
                "status": "True",
                "type": "Ready"
            },
            {
                "lastProbeTime": null,
                "lastTransitionTime": "2018-03-07T16:02:45Z",
                "status": "True",
                "type": "PodScheduled"
            }
        ],
        "containerStatuses": [
            {
                "containerID": "docker://bfe7b1fc2428e8241e679dbfa8accc5fe61c2ab50ad7e047e220207fe396fe4b",
                "image": "alextanhongpin/kube-node:latest",
                "imageID": "docker://sha256:103de7149878de216a4e636f309412045c394ca3d607190875600a35353121b8",
                "lastState": {},
                "name": "kubia",
                "ready": true,
                "restartCount": 0,
                "state": {
                    "running": {
                        "startedAt": "2018-03-07T16:02:46Z"
                    }
                }
            }
        ],
        "hostIP": "192.168.99.100",
        "phase": "Running",
        "podIP": "172.17.0.7",
        "qosClass": "BestEffort",
        "startTime": "2018-03-07T16:02:45Z"
    }
}
```