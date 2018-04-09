# Create HorizontalPodAutoScaler

## Create

```bash
$ kubectl create -f deployment.yaml
deployment.extensions "kubia" created
```

## Autoscale

```bash
$ kubectl autoscale deployment kubia --cpu-percent=30 --min=1 --max=5
deployment.apps "kubia" autoscaled
```

## Describe

```bash
$ kubectl get hpa.v2beta1.autoscaling kubia -o yaml
apiVersion: autoscaling/v2beta1
kind: HorizontalPodAutoscaler
metadata:
  creationTimestamp: 2018-04-09T02:22:25Z
  name: kubia
  namespace: default
  resourceVersion: "12939"
  selfLink: /apis/autoscaling/v2beta1/namespaces/default/horizontalpodautoscalers/kubia
  uid: d7e08fe8-3b9c-11e8-93c7-080027bf92fd
spec:
  maxReplicas: 5
  metrics:
  - resource:
      name: cpu
      targetAverageUtilization: 30
    type: Resource
  minReplicas: 1
  scaleTargetRef:
    apiVersion: extensions/v1beta1
    kind: Deployment
    name: kubia
status:
  conditions:
  - lastTransitionTime: 2018-04-09T02:22:55Z
    message: the HPA controller was able to get the target's current scale
    reason: SucceededGetScale
    status: "True"
    type: AbleToScale
  - lastTransitionTime: 2018-04-09T02:22:55Z
    message: 'the HPA was unable to compute the replica count: unable to get metrics
      for resource cpu: unable to fetch metrics from API: the server could not find
      the requested resource (get pods.metrics.k8s.io)'
    reason: FailedGetResourceMetric
    status: "False"
    type: ScalingActive
  currentMetrics: null
  currentReplicas: 3
  desiredReplicas: 0
```

## Get HorizontalPodAutoscaler

```bash
$ kubectl get hpa
NAME      REFERENCE          TARGETS         MINPODS   MAXPODS   REPLICAS   AGE
kubia     Deployment/kubia   <unknown>/30%   1         5         3          2m
```

## Get Deployment

```bash
$ kubectl get deployment
NAME      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
kubia     3         3         3            3           3m
```

## Describe HorizontalPodAutoscaler

```bash
$ kubectl describe hpa
```


## Triggering a scale up

```bash
$ kubectl expose deployment kubia --port=80 --target-port=8080
```

## Watching multiple deployments


Watch:

```bash
$ watch -n 1 kubectl get hpa,deployment
```

Load test:

```bash
$ kubectl run -it --rm --restart=Never loadgenerator --image=busybox -- sh -c "while true; do wget -O - -q http://kubia.default; done"
```