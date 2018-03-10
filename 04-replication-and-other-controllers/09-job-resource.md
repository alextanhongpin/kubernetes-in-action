## Creating a job resource

```bash
$ kubectl create -f exporter.yaml
```

Output:

```
job "batch-job" created
```

## Listing jobs

```bash
$ kubectl get jobs
```

Output:

```
NAME        DESIRED   SUCCESSFUL   AGE
batch-job   1         0            9m
```

## Listing pods

```bash
$ kubectl get po -a
```

Output:

```
NAME              READY     STATUS    RESTARTS   AGE
batch-job-dh5xs   1/1       Running   0          10m
```

## Logging

```bash
$ kubectl logs batch-job-dh5xs
```

Output:

```
Sat Mar 10 07:55:16 UTC 2018 Batch job starting
Sat Mar 10 07:57:16 UTC 2018 Finished succesfully
```

## Successful job

```bash
$ kubectl get job
```

Output:

```
NAME        DESIRED   SUCCESSFUL   AGE
batch-job   1         1            11m
```