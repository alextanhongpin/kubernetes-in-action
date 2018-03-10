# Configuring Ingress ot handle TLS traffic

```bash
$ openssl genrsa -out tls.key 2048
Generating RSA private key, 2048 bit long modulus
.......+++
...+++
e is 65537 (0x10001)

$ openssl req -new -x509 -key tls.key -out tls.cert -days 360 -subj /CN=kubia.example.com
```

Create secret:

```bash
$ kubectl create secret tls tls-secret --cert=tls.cert --key=tls.key
secret "tls-secret" created
```


## Create

```bash
$  kubectl create -f kubia-ingress-tls.yaml
ingress "kubia" created
```

Verify:

```bash
$ kubectl get ing
NAME      HOSTS               ADDRESS   PORTS     AGE
kubia     kubia.example.com             80, 443   18s
```

Call service:

```bash
$ curl -k -v https://kubia.example.com/
```

Output:

```
*   Trying 192.168.99.100...
* TCP_NODELAY set
* Connected to kubia.example.com (192.168.99.100) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/cert.pem
  CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS handshake, Certificate (11):
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
* TLSv1.2 (IN), TLS handshake, Server finished (14):
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
* TLSv1.2 (OUT), TLS change cipher, Client hello (1):
* TLSv1.2 (OUT), TLS handshake, Finished (20):
* TLSv1.2 (IN), TLS change cipher, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.2 / ECDHE-RSA-AES128-GCM-SHA256
* ALPN, server accepted to use h2
* Server certificate:
*  subject: CN=kubia.example.com
*  start date: Mar 10 21:29:43 2018 GMT
*  expire date: Mar  5 21:29:44 2019 GMT
*  issuer: CN=kubia.example.com
*  SSL certificate verify result: self signed certificate (18), continuing anyway.
* Using HTTP2, server supports multi-use
* Connection state changed (HTTP/2 confirmed)
* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
* Using Stream ID: 1 (easy handle 0x7f980e008400)
> GET / HTTP/2
> Host: kubia.example.com
> User-Agent: curl/7.54.0
> Accept: */*
>
* Connection state changed (MAX_CONCURRENT_STREAMS updated)!
< HTTP/2 200
< server: nginx/1.13.3
< date: Sat, 10 Mar 2018 21:37:27 GMT
< strict-transport-security: max-age=15724800; includeSubDomains;
<
* Connection #0 to host kubia.example.com left intact
You have've hit kubia-dqzzr
```