// 
// A function "tweet" is written by @munieru_jp
// https://qiita.com/munieru_jp/items/24a4840c452c61c2dde9
//

const tweet = () => {
	var w = 550, h = 420;
	window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) + " " + encodeURIComponent(location.href),
		"_blank",
		"width=" + w + ",height=" + h + ",left=" + (screen.width - w) / 2 + ",top=" + (screen.height - h) / 2 + ",scrollbars=yes,resizable=yes,toolbar=no,location=yes");
};

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
	if (request == "tweet") {
		tweet();
	}
});
