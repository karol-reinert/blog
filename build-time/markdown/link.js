import { URL } from 'url';

export const linkPlugin = (md, externalAttrs, classList) => {
	md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		const hrefIndex = token.attrIndex('href');
		if (hrefIndex >= 0) {
			const hrefAttr = token.attrs[hrefIndex];
			const url = hrefAttr[1];
			const isExternal = /^https?:/.test(url);
			if (isExternal) {
				Object.entries(externalAttrs).forEach(([key, val]) => {
					token.attrSet(key, val);
				});
			}
			token.attrSet('class', token.attrGet('class') + ' ' + classList);
		}
		return self.renderToken(tokens, idx, options);
	};
};
