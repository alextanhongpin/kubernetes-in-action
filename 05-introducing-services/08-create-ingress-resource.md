# Create 

```bash
$ kubectl create -f kubia-ingress.yaml
ingress "kubia" created
```

Validate:

```bash
$ kubectl get ing
NAME      HOSTS               ADDRESS          PORTS     AGE
kubia     kubia.example.com   192.168.99.100   80        1m
```

## Modify your etc/hosts

```bash
$ vim /etc/hosts
```

Output:

```
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost

192.168.99.100 kubia.example.com
```

Hitting `kubia.example.com`:

```bash
$ curl kubia.example.com
You have've hit kubia-5448k
```
