## Creating parallel jobs

```bash
$ kubectl create -f multi-completion-batch-job.yaml
```

Output:

```
job "multi-completion-batch-job" created
```

## Listing pods

```bash
$ kubectl get po
```

Output:

```
NAME                               READY     STATUS    RESTARTS   AGE
multi-completion-batch-job-twjkh   1/1       Running   0          8m
multi-completion-batch-job-zlpfp   1/1       Running   0          8m
```

## Listing jobs

```bash
$ kubectl get jobs
```

Output:

```
NAME                         DESIRED   SUCCESSFUL   AGE
batch-job                    1         1            15m
multi-completion-batch-job   5         0            8m
```