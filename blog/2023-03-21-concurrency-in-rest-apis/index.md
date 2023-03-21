---
title: Concurrency in REST APIs
authors: dodalovicgran
tags: [testing]
---

![Example banner](./img.png)

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

In this article this and that.

Let's demonstrate the problem of lost updates with an example. Let's, for a moment, pretend there's no such thing as Google Docs or similar
collaborative editing tools.

A business comes to us and says: "We need a tool which will allow group of people to work together on a text document".

We sit together, thing hard and come up with a proposal: we can't make it too sophisticated,

We sit together, thing hard and come up with a proposal: we need a following API:

```yaml
openapi: 3.0.0
info:
  title: Document Management API
  version: 1.0.0
paths:
  /documents/{id}:
    put:
        requestBody:
            content:
                text/plain:
                    schema:
                      type: string
        responses:
            200:
                description: OK
                content:
                    text/plain:
                        schema:
                          type: string
```

So, we got 2 days to design, implement and deploy the most rudimentary version of a collaborative document management.



<!--truncate-->

## Conclusion

