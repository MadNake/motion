export default {
	providers: [
		{
			// eslint-disable-next-line no-undef
			domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
			applicationID: "convex",
		},
	],
};
