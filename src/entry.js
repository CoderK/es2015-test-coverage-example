import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
	applicationId: "17a375b451a077cc4c16e853130147ea58bfad4a290b55466e31432115fd0831",
	secret: "64f2e2b3fd4359330121428b9186fafd64ff56131b1516ce1ce5f2380e8cb030",
	callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
	"public",
	"read_user",
	"write_user",
	"read_photos",
	"write_photos"
]);

location.assign(authenticationUrl);

// unsplash.auth.userAuthentication('17ff49793c33dd0585b9f96140429808971d8d4f314ff1b86901649265425caf')
// 	.then(() => {
// 		console.log(arguments);
// 	});