var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace('Donald', 'small');
            replacedText = replacedText.replace('Trump', 'hands');
            replacedText = replacedText.replace('trump', 'hands');
            replacedText = replacedText.replace('donald', 'small');
            replacedText = replacedText.replace('TRUMP', 'hands');
            replacedText = replacedText.replace('DONALD', 'small');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
            
        }
    }
}