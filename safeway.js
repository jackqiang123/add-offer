function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function click() { 
var loadMore = document.getElementsByClassName('btn load-more')[0];
while(typeof loadMore !== 'undefined') { 
	loadMore.click();
	loadMore = document.getElementsByClassName('btn load-more')[0];
	await sleep(500);
}

var buttons = document.getElementsByClassName('btn grid-coupon-btn btn-default');
for(i=0; i<buttons.length; i++) { 
	buttons[i].click(); 
}

}
