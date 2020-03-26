/**
 * 
 * @param {Number} headerNumber 
 * @param {String} headerContent
 * @param {String} headerClass
 * @param {String} headerId
 * @returns {Element} 
 */
function h(headerNumber = 1, headerContent = '', headerClass = '', headerId = '') {
    if(headerNumber < 1 || headerNumber > 6) {
        throw Error("headerNumber must be between 1 and 6");
    }
    var headerObject = document.createElement(`h${Math.floor(headerNumber)}`);
    headerObject.appendChild(document.createTextNode(headerContent));
    headerObject.className = headerClass;
    headerObject.id = headerId;
    return headerObject;
}

/**
 * 
 * @param {String} imageSource 
 * @param {String} imageClass 
 * @param {String} imageId
 * @returns {Element} 
 */
function img(imageSource = '', imageClass = '', imageId = '') {
    var imageObject = document.createElement("img");
    imageObject.src = imageSource;
    imageObject.className = imageClass;
    imageObject.id = imageId;
    return imageObject;
}


/**
 * 
 * @param {Array} divChildren 
 * @param {String} divClass 
 * @param {String} divId
 * @returns {Element} 
 */
function div(divChildren = [], divClass = '', divId = '') {
    if(!(divChildren instanceof Array)){
        throw new Error("divChildren must be an array.")
    }
    var divObject = document.createElement("div");
    divObject.className = divClass;
    divObject.id = divId;
    divChildren.forEach(child => {
        divObject.appendChild(child);
    });
    return divObject;
}

/**
 * 
 * @param {Element} child 
 * @param {String} href 
 * @param {String} anchorClass 
 * @param {String} anchorId
 * @returns {String} 
 */
function a(child, href = '#', anchorClass = '', anchorId = '') {
    if(!child){
        throw new Error("child cannot be null");
    }
    anchorObject = document.createElement("a");
    anchorObject.href = href;
    anchorObject.className = anchorClass;
    anchorObject.id = anchorId;
    anchorObject.appendChild(child);
    return anchorObject;
}

/**
 * @param {String} text
 * @returns {Element}
 */
function text(text = '') {
    textObject = document.createTextNode(text);
    return textObject;
}


/**
 * 
 * @param {String} spanContent 
 * @param {String} spanClass 
 * @param {String} spanId
 * @returns {Element} 
 */
function span(spanContent = '', spanClass = '', spanId = '') {
    spanObject = document.createElement("span");
    spanObject.appendChild(document.createTextNode(spanContent));
    spanObject.className = spanClass;
    spanObject.id = spanId;
    return spanObject;
}

/**
 * 
 * @returns {Element}
 */
function br() {
    breakObject = document.createElement("br");
    return breakObject;
}

/**
 * 
 * @param {String} paragraphContent 
 * @param {String} paragraphClass 
 * @param {String} paragraphId
 * @returns {Element} 
 */
function p(paragraphContent = '', paragraphClass = '', paragraphId = '') {
    paragraphObject = document.createElement("p");
    paragraphObject.appendChild(document.createTextNode(paragraphContent));
    paragraphObject.className = paragraphClass;
    paragraphObject.id = paragraphId;
    return paragraphObject;
}

/**
 * 
 * @param {String} sourcePath 
 * @param {Number} videoWidth 
 * @param {Number} videoHeight 
 * @param {String} videoClass 
 * @param {Number} videoId
 * @returns {Element} 
 */
function video(sourcePath, videoWidth, videoHeight, videoClass = '', videoId = '') {
    if(!sourcePath) {
        throw new Error("sourcePath is required");
    }
    var videoObject = document.createElement("video");
    if(videoWidth){
        videoObject.width = videoWidth;
    }
    if(videoHeight){
        videoObject.height = videoHeight;
    }
    videoObject.className = videoClass;
    videoObject.setAttribute("controls", "");
    videoObject.id = videoId;
    var sourceObject = document.createElement("source");
    sourceObject.src = sourcePath;
    videoObject.appendChild(sourceObject);
    return videoObject;
}

/**
 * 
 * @param {String} filePath
 * @returns {Promise} 
 */
function loadJSON(filePath) {
    if(!filePath) {
        throw new Error("filePath cannot be null.");
    }
    return fetch(filePath)
    .then(resp => {
        return resp.json();
    })
}

/**
 * @returns {Element}
 */
function castButton() {
    var castButtonObject = document.createElement("button");
    castButtonObject.appendChild(img("/cast.png", "vector"));
    castButtonObject.setAttribute("is", "google-cast-button");
    castButtonObject.className = "castbutton";
    return castButtonObject;
}

/**
 * @returns {void}
 */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
  /* Set the width of the side navigation to 0 */
/**
 * @returns {void}
 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//remove if converting to library
var cServerURL = "http://10.1.0.217:8080/";