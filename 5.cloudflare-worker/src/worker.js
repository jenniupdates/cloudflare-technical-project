export default {
	async fetch(request, env, ctx) {
		const clientIP = request.headers.get('Cf-Connecting-Ip');
		const country = request.headers.get('Cf-Ipcountry');
		// const country = request.cf.country;
		const asn = request.cf.asn;

		// if country not singapore, redirect to https://1.1.1.1/ with a status code of 302
		if (country != 'SG') {
			return Response.redirect('https://1.1.1.1/', 302);
		} else {
			const resp = `This is your ${clientIP} and you are accessing this site from ${country} | ${asn}`;
			return new Response(resp, { headers: { 'Content-Type': 'text/html' } });
		}
		
	},
};
