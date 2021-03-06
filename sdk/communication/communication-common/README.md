# Azure Communication Common client library for JavaScript

This package contains common code for Azure Communication Service libraries.

## Getting started

### Prerequisites

- An [Azure subscription][azure_sub].
- An existing Communication Services resource. If you need to create the resource, you can use the [Azure Portal][azure_portal] or [Azure CLI][azure_cli].

### Installing

```bash
npm install @azure/communication-common
```

## Key concepts

### CommunicationUserCredential and AzureCommunicationUserCredential

A `CommunicationUserCredential` authenticates a user with Communication Services, such as Chat or Calling. It optionally provides an auto-refresh mechanism to ensure a continuously stable authentication state during communications.

It is up to you the developer to first create valid user tokens with the Azure Communication Administration library. Then you use these tokens to create a `AzureCommunicationUserCredential`.

`CommunicationUserCredential` is only the interface, please always use the `AzureCommunicationUserCredential` constructor to create a credential and take advantage of the built-in refresh logic.

## Examples

### Create a credential with a static token

```typescript
const userCredential = new AzureCommunicationUserCredential(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjM2MDB9.adM-ddBZZlQ1WlN3pdPBOF5G4Wh9iZpxNP_fSvpF4cWs"
);
```

### Create a credential with a callback

Here we assume that we have a function `fetchTokenFromMyServerForUser` that makes a network request to retrieve a token string for a user. We pass it into the credential to fetch a token for Bob from our own server. Our server would use the Azure Communication Administration library to issue tokens.

```typescript
const userCredential = new AzureCommunicationUserCredential({
  tokenRefresher: async () => fetchTokenFromMyServerForUser("bob@contoso.com")
});
```

### Create a credential with proactive refreshing

Setting `refreshProactively` to true will call your `tokenRefresher` function when the token is close to expiry.

```typescript
const userCredential = new AzureCommunicationUserCredential({
  tokenRefresher: async () => fetchTokenFromMyServerForUser("bob@contoso.com"),
  refreshProactively: true
});
```

### Create a credential with proactive refreshing and an initial token

Passing `initialToken` is an optional optimization to skip the first call to `tokenRefresher`. You can use this to separate the boot from your application from subsequent token refresh cycles.

```typescript
const userCredential = new AzureCommunicationUserCredential({
  tokenRefresher: async () => fetchTokenFromMyServerForUser("bob@contoso.com"),
  refreshProactively: true,
  initialToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjM2MDB9.adM-ddBZZlQ1WlN3pdPBOF5G4Wh9iZpxNP_fSvpF4cWs"
});
```

## Troubleshooting

## Next steps

- [Read more about Communication user access tokens](https://review.docs.microsoft.com/azure/project-spool/concepts/authentication?branch=pr-en-us-104477&tabs=javascript)

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/master/CONTRIBUTING.md) to learn more about how to build and test the code.

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)

[azure_cli]: https://docs.microsoft.com/cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[azure_portal]: https://portal.azure.com

![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2Fcommunication%2Fcommunication-sms%2FREADME.png)
