# Pause and Resuming Rollout

```bash
$ kubectl set image deployment kubia nodejs=luksa/kubia:v4

$ kubectl rollout pause deployment kubia

$ kubectl rollout resume deployment kubia
```

