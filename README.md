# A TS client for the GtR API

This client is a fully-typed [typescript](https://www.typescriptlang.org/) client for the [UKRI's Gateway to Research API](https://gtr.ukri.org/). It runs both on server (Node.js) and client-side (Browser) javascript.

## Contents

- [Getting Started](#getting-started)
- [Docs](#docs)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Support the Project](#support-the-project)
- [References](#references)

## Getting Started

To install the package, use the following code. I am aiming to put it onto npm soon.

```
yarn add https://github.com/JamesGopsill/gtr-client
```

You can then use in your code via by importing

```typescript
import { GtrClient, ResponseError } from "gtr-client"

// Create a new client.
const client = new GtrClient()

// Retrieve the available projects from the UKRI
try {
	const projects = await client.getProjects()
	console.log(projects)
} catch (e) {
	// Custom response error class
	if (e instanceof ResponseError) {
		console.log(e.response.statusText)
	}
}
```

## Docs

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/gtr-client/).

## Roadmap

| Version | Content | Status |
| --- | --- | --- |
| 0.0.1 | Repo up and running | ✔ |
| 0.2.0 | `/funds` implemented. | ✔ |
| 0.3.0 | `/organisations` implemented. | ✔ |
| 0.4.0 | `/outcomes` implemented. | ✔ |
| 0.5.0 | `/persons` implemented. | ✔ |
| 0.6.0 | `/projects` implemented. | ✔ |
| 0.7.0 | Simplified client using interface conditionals. | ✔ |
| 0.8.0 | Refactored again to use programmatically defined functions. | ✔ |
| 0.9.0 | Custom Filtering Param Interfaces | |
| 1.0.0 | Spec complete | |

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project. Please use `yarn pre-add` before committing to the repository.

## Support the Project

To donate and provide continued support, please go to **[TODO]**.

## References

- [UKRI Gateway to Research](https://gtr.ukri.org/)
- [Git AutoCLRF](https://tanutaran.medium.com/solving-git-lf-will-be-replaced-by-crlf-7ca84eb0aad4)
- [API Client Template](https://github.com/ilyamkin/dev-to-js)
- [Git CRLF LF issues](https://stackoverflow.com/questions/170961/whats-the-strategy-for-handling-crlf-carriage-return-line-feed-with-git)