# Secrets

## Creating Secrets


Generate some certs:

```bash
$ openssl genrsa -out https.key 2048
$ openssl req -new -x509 -key https.key -out https.cert -days 3650 -subj /CN=www.kubia-example.com
```

Create the secrets:

```bash
$ kubectl create secret generic fortune-https --from-file=https.key --from-file=https.cert --from-file foo
```