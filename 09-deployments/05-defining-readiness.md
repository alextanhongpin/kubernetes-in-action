# Deployment with readiness probe

```bash
$ kubectl delete all --all

$ kubectl create -f kubia-deployment-v1.yml --save-config

$ kubectl apply -f kubia-deployment-v3-with-readinesscheck.yml
deployment.apps "kubia" configured

$ kubectl rollout status deployment kubia
Waiting for rollout to finish: 1 old replicas are pending termination...

# Rollback
$ kubectl rollout undo deployment kubia
```