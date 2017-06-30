// ==UserScript==
// @name         ChanCoin-for-4chan
// @namespace    https://github.com/Michael4CHN/ChanCoin-for-4chan
// @version      1.01
// @description  A ChanCoin tipping extension for 4chan.
// @author       https://github.com/Michael4CHN
// @run-at       document-start
// @include      *boards.4chan.org/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

function addButton() {
    if(getPostAddress().toLowerCase().startsWith("$4chn:")) {
        var a = document.getElementById("post-menu").children[0];
        var b = document.createElement("li");
        b.innerHTML = "<img src='https://i.imgur.com/mL7qqoL.png' style='width:15px;vertical-align:middle'/>  Tip poster";
        b.addEventListener("click", send4CHN);
        a.appendChild(b);
    }
}

function send4CHN(address, amount) {
    address = getPostAddress().replace(/\s+/g, '').replace(/\$4chn:/gi, '');
    amount = prompt("How much 4CHN would you like to send to " + address + "?", "0");
    if(amount==="" || /^\s+$/.test(amount)) {
        alert("ERROR! Please enter a number.");
    }
    else if(parseFloat(amount) < 0.00000001) {
        alert("ERROR! Value must be greater than or equal to 0.00000001.");
    }
    else if(amount!==null) {
        GM_xmlhttpRequest({
            method: "POST",
            url: "http://username:password@127.0.0.1:43814",
            data: '{"method": "sendtoaddress", "params":["' + address + '",' + amount  + ',"A tip for post #' + postNum + '. Download the ChanCoin-for-4chan browser extension at https://github.com/Michael4CHN/ChanCoin-for-4chan"]}',
            headers: {
                "Content-Type": "application/json-rpc"
            },
            onload: function (response) {
                if(JSON.parse(response.responseText).error !== null) {
                    alert("An error occurred.");
                }
                else {
                    alert("Success! You sent " + amount + " 4CHN to " + address + ".");
                }
            }
        });
    }
}


function getPostAddress() {
    postNum = document.getElementById("post-menu").children[0].children[0].getAttribute("data-id");
    return document.getElementById("pc" + document.getElementById("post-menu").children[0].children[0].getAttribute("data-id")).getElementsByClassName("name")[1].innerText;
}

var mutationObserver = window.MutationObserver;
var myObserver       = new mutationObserver (mutationHandler);
var obsConfig        = {
    childList: true, attributes: true,
    subtree: true,   attributeFilter: ['class']
};

myObserver.observe (document, obsConfig);

function mutationHandler (mutationRecords) {
    mutationRecords.forEach ( function (mutation) {
        if (mutation.type == "childList" && typeof mutation.addedNodes  == "object" && mutation.addedNodes.length) {
            for (var J = 0, L = mutation.addedNodes.length;  J < L;  ++J) {
                checkForCSS_Class (mutation.addedNodes[J], "dd-menu");
            }
        }
        else if (mutation.type == "attributes") {
            checkForCSS_Class (mutation.target, "dd-menu");
        }
    } );
}

function checkForCSS_Class (node, className) {
    if (node.nodeType === 1) {
        if (node.classList.contains (className) ) {
            addButton();
        }
    }
}
