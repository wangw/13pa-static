/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Linecons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'linecon-heart' : '&#xe000;',
			'linecon-cloud' : '&#xe001;',
			'linecon-star' : '&#xe002;',
			'linecon-tv' : '&#xe003;',
			'linecon-sound' : '&#xe004;',
			'linecon-video' : '&#xe005;',
			'linecon-trash' : '&#xe006;',
			'linecon-user' : '&#xe007;',
			'linecon-key' : '&#xe008;',
			'linecon-search' : '&#xe009;',
			'linecon-settings' : '&#xe00a;',
			'linecon-camera' : '&#xe00b;',
			'linecon-tag' : '&#xe00c;',
			'linecon-lock' : '&#xe00d;',
			'linecon-bulb' : '&#xe00e;',
			'linecon-pen' : '&#xe00f;',
			'linecon-diamond' : '&#xe010;',
			'linecon-display' : '&#xe011;',
			'linecon-location' : '&#xe012;',
			'linecon-eye' : '&#xe013;',
			'linecon-bubble' : '&#xe014;',
			'linecon-stack' : '&#xe015;',
			'linecon-cup' : '&#xe016;',
			'linecon-phone' : '&#xe017;',
			'linecon-news' : '&#xe018;',
			'linecon-mail' : '&#xe019;',
			'linecon-like' : '&#xe01a;',
			'linecon-photo' : '&#xe01b;',
			'linecon-note' : '&#xe01c;',
			'linecon-clock' : '&#xe01d;',
			'linecon-paperplane' : '&#xe01e;',
			'linecon-params' : '&#xe01f;',
			'linecon-banknote' : '&#xe020;',
			'linecon-data' : '&#xe021;',
			'linecon-music' : '&#xe022;',
			'linecon-megaphone' : '&#xe023;',
			'linecon-study' : '&#xe024;',
			'linecon-lab' : '&#xe025;',
			'linecon-food' : '&#xe026;',
			'linecon-t-shirt' : '&#xe027;',
			'linecon-fire' : '&#xe028;',
			'linecon-clip' : '&#xe029;',
			'linecon-shop' : '&#xe02a;',
			'linecon-calendar' : '&#xe02b;',
			'linecon-wallet' : '&#xe02c;',
			'linecon-vynil' : '&#xe02d;',
			'linecon-truck' : '&#xe02e;',
			'linecon-world' : '&#xe02f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/linecon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};