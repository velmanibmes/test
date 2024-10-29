(()=>{"use strict";var e="eventin-ai-btn-wrapper",t="eventin-ai-generate-btn",n="short",o="Write with AI",C=["size","color"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,C=function(e,t){if(null==e)return{};var n,o,C={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(C[n]=e[n]);return C}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(C[n]=e[n])}return C}var i=function(e){var t=e.size,n=(e.color,r(e,C));return React.createElement("svg",a({width:t||10,height:t||11,viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),React.createElement("path",{d:"M8.46249 3.38783C8.42148 3.38783 8.38663 3.37987 8.35793 3.36396C8.32923 3.34805 8.30668 3.32021 8.29028 3.28043C8.06115 2.75917 7.64186 2.34491 7.11788 2.12208L7.03567 2.08711C6.99467 2.0712 6.96597 2.04932 6.94957 2.02148C6.93317 1.99364 6.92497 1.95983 6.92497 1.92005C6.92497 1.88027 6.93317 1.84646 6.94957 1.81862C6.96597 1.79077 6.99467 1.76889 7.03567 1.75298L7.1442 1.70827C7.65156 1.49924 8.06102 1.10594 8.29028 0.607399C8.30668 0.567621 8.32923 0.539777 8.35793 0.523866C8.38663 0.507955 8.42148 0.5 8.46249 0.5C8.50349 0.5 8.53833 0.507955 8.56704 0.523866C8.59574 0.539777 8.61829 0.567621 8.63469 0.607399C8.86395 1.10594 9.27341 1.49924 9.78077 1.70827L9.8893 1.75298C9.9303 1.76889 9.959 1.79077 9.9754 1.81862C9.9918 1.84646 10 1.88027 10 1.92005C10 1.95983 9.9918 1.99364 9.9754 2.02148C9.959 2.04932 9.9303 2.0712 9.8893 2.08711L9.80709 2.12208C9.28311 2.34491 8.86382 2.75917 8.63469 3.28043C8.61829 3.32021 8.59574 3.34805 8.56704 3.36396C8.53833 3.37987 8.50349 3.38783 8.46249 3.38783ZM8.46249 10.5C8.42968 10.5 8.39688 10.492 8.36408 10.4761C8.33128 10.4602 8.30668 10.4324 8.29028 10.3926C8.0609 9.89381 7.65239 9.49949 7.1458 9.28788L7.04797 9.24702C7.00697 9.23111 6.97827 9.20923 6.96187 9.18138C6.94547 9.15354 6.93727 9.11973 6.93727 9.07995C6.93727 9.04017 6.94547 9.00636 6.96187 8.97852C6.97827 8.95068 7.00697 8.9288 7.04797 8.91289L7.10558 8.88882C7.63681 8.66692 8.06143 8.24785 8.29028 7.71957C8.30668 7.67979 8.32923 7.65195 8.35793 7.63604C8.38663 7.62013 8.42148 7.61217 8.46249 7.61217C8.50349 7.61217 8.53833 7.62013 8.56704 7.63604C8.59574 7.65195 8.61829 7.67979 8.63469 7.71957C8.86354 8.24785 9.28816 8.66692 9.81939 8.88882L9.877 8.91289C9.918 8.9288 9.9467 8.95068 9.9631 8.97852C9.9795 9.00636 9.9877 9.04017 9.9877 9.07995C9.9877 9.11973 9.9795 9.15354 9.9631 9.18138C9.9467 9.20923 9.918 9.23111 9.877 9.24702L9.77917 9.28788C9.27258 9.49949 8.86407 9.89381 8.63469 10.3926C8.61829 10.4324 8.59369 10.4602 8.56089 10.4761C8.52809 10.492 8.49529 10.5 8.46249 10.5ZM3.06273 8.43556C2.99713 8.43556 2.93358 8.41766 2.87208 8.38186C2.81058 8.34606 2.76343 8.29634 2.73063 8.2327L2.57497 7.90976C2.15955 7.0479 1.44897 6.36349 0.572133 5.98069L0.209102 5.8222C0.143501 5.79037 0.0922509 5.74463 0.0553506 5.68496C0.0184502 5.6253 0 5.56364 0 5.5C0 5.43636 0.0184502 5.3747 0.0553506 5.31504C0.0922509 5.25537 0.143501 5.20963 0.209102 5.1778L0.578031 5.01674C1.4513 4.63549 2.15978 3.95503 2.57594 3.09785L2.73063 2.77924C2.76343 2.70764 2.81058 2.65394 2.87208 2.61814C2.93358 2.58234 2.99713 2.56444 3.06273 2.56444C3.12833 2.56444 3.19188 2.58234 3.25338 2.61814C3.31488 2.65394 3.36203 2.70366 3.39483 2.7673L3.56341 3.11174C3.97877 3.96042 4.68116 4.63467 5.54611 5.015L5.91636 5.1778C5.99016 5.20963 6.04551 5.25537 6.08241 5.31504C6.11931 5.3747 6.13776 5.43636 6.13776 5.5C6.13776 5.56364 6.11931 5.6253 6.08241 5.68496C6.04551 5.74463 5.99016 5.79037 5.91636 5.8222L5.54611 5.985C4.68116 6.36533 3.97877 7.03958 3.56341 7.88826L3.39483 8.2327C3.36203 8.3043 3.31488 8.35601 3.25338 8.38783C3.19188 8.41965 3.12833 8.43556 3.06273 8.43556Z",fill:"url(#paint0_linear_702_11939)"}),React.createElement("defs",null,React.createElement("linearGradient",{id:"paint0_linear_702_11939",x1:"1.37855",y1:"9.67246",x2:"6.74925",y2:"-0.985128",gradientUnits:"userSpaceOnUse"},React.createElement("stop",{offset:"0.1788",stopColor:"#702CE7"}),React.createElement("stop",{offset:"0.8196",stopColor:"#FF4A97"}))))};jQuery((function(C){var a,r,c,l,s,d,p;a=wp.compose.createHigherOrderComponent,r=wp.hooks,c=r.addAction,l=r.addFilter,s=r.doAction,d=wp.data.dispatch,p="",l("editor.BlockEdit","eventin/with-ai-button",a((function(C){return function(a){return["core/paragraph","core/heading"].includes(a.name)&&a.isSelected?React.createElement("div",{className:e},React.createElement("button",{className:t,onClick:function(){var e={visible:!0,tokenType:"core/paragraph"===a.name?"long":n,contextId:p="event-creation-description-"+a.name.split("/")[1],additionalData:{blockId:a.clientId}};s("eventin-ai-text-generator-modal",e)}},React.createElement(i,null),o),React.createElement(C,a)):React.createElement(C,a)}}),"withAIButton")),c("eventin-ai-modal-response","eventin-ai-free",(function(e){e.contextId===p&&d("core/block-editor").updateBlockAttributes(e.additionalData.blockId,{content:e.response})})),function(C){var a=wp.hooks,r=a.doAction,i=a.addAction,c=wp.data.dispatch,l="event-creation-title";setTimeout((function(){var a=C(".editor-post-title__input");a.length&&(a.parent().addClass(e),a.before("\n                <button \n                    class='".concat(t,'\'\n                >\n                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M8.46249 3.38783C8.42148 3.38783 8.38663 3.37987 8.35793 3.36396C8.32923 3.34805 8.30668 3.32021 8.29028 3.28043C8.06115 2.75917 7.64186 2.34491 7.11788 2.12208L7.03567 2.08711C6.99467 2.0712 6.96597 2.04932 6.94957 2.02148C6.93317 1.99364 6.92497 1.95983 6.92497 1.92005C6.92497 1.88027 6.93317 1.84646 6.94957 1.81862C6.96597 1.79077 6.99467 1.76889 7.03567 1.75298L7.1442 1.70827C7.65156 1.49924 8.06102 1.10594 8.29028 0.607399C8.30668 0.567621 8.32923 0.539777 8.35793 0.523866C8.38663 0.507955 8.42148 0.5 8.46249 0.5C8.50349 0.5 8.53833 0.507955 8.56704 0.523866C8.59574 0.539777 8.61829 0.567621 8.63469 0.607399C8.86395 1.10594 9.27341 1.49924 9.78077 1.70827L9.8893 1.75298C9.9303 1.76889 9.959 1.79077 9.9754 1.81862C9.9918 1.84646 10 1.88027 10 1.92005C10 1.95983 9.9918 1.99364 9.9754 2.02148C9.959 2.04932 9.9303 2.0712 9.8893 2.08711L9.80709 2.12208C9.28311 2.34491 8.86382 2.75917 8.63469 3.28043C8.61829 3.32021 8.59574 3.34805 8.56704 3.36396C8.53833 3.37987 8.50349 3.38783 8.46249 3.38783ZM8.46249 10.5C8.42968 10.5 8.39688 10.492 8.36408 10.4761C8.33128 10.4602 8.30668 10.4324 8.29028 10.3926C8.0609 9.89381 7.65239 9.49949 7.1458 9.28788L7.04797 9.24702C7.00697 9.23111 6.97827 9.20923 6.96187 9.18138C6.94547 9.15354 6.93727 9.11973 6.93727 9.07995C6.93727 9.04017 6.94547 9.00636 6.96187 8.97852C6.97827 8.95068 7.00697 8.9288 7.04797 8.91289L7.10558 8.88882C7.63681 8.66692 8.06143 8.24785 8.29028 7.71957C8.30668 7.67979 8.32923 7.65195 8.35793 7.63604C8.38663 7.62013 8.42148 7.61217 8.46249 7.61217C8.50349 7.61217 8.53833 7.62013 8.56704 7.63604C8.59574 7.65195 8.61829 7.67979 8.63469 7.71957C8.86354 8.24785 9.28816 8.66692 9.81939 8.88882L9.877 8.91289C9.918 8.9288 9.9467 8.95068 9.9631 8.97852C9.9795 9.00636 9.9877 9.04017 9.9877 9.07995C9.9877 9.11973 9.9795 9.15354 9.9631 9.18138C9.9467 9.20923 9.918 9.23111 9.877 9.24702L9.77917 9.28788C9.27258 9.49949 8.86407 9.89381 8.63469 10.3926C8.61829 10.4324 8.59369 10.4602 8.56089 10.4761C8.52809 10.492 8.49529 10.5 8.46249 10.5ZM3.06273 8.43556C2.99713 8.43556 2.93358 8.41766 2.87208 8.38186C2.81058 8.34606 2.76343 8.29634 2.73063 8.2327L2.57497 7.90976C2.15955 7.0479 1.44897 6.36349 0.572133 5.98069L0.209102 5.8222C0.143501 5.79037 0.0922509 5.74463 0.0553506 5.68496C0.0184502 5.6253 0 5.56364 0 5.5C0 5.43636 0.0184502 5.3747 0.0553506 5.31504C0.0922509 5.25537 0.143501 5.20963 0.209102 5.1778L0.578031 5.01674C1.4513 4.63549 2.15978 3.95503 2.57594 3.09785L2.73063 2.77924C2.76343 2.70764 2.81058 2.65394 2.87208 2.61814C2.93358 2.58234 2.99713 2.56444 3.06273 2.56444C3.12833 2.56444 3.19188 2.58234 3.25338 2.61814C3.31488 2.65394 3.36203 2.70366 3.39483 2.7673L3.56341 3.11174C3.97877 3.96042 4.68116 4.63467 5.54611 5.015L5.91636 5.1778C5.99016 5.20963 6.04551 5.25537 6.08241 5.31504C6.11931 5.3747 6.13776 5.43636 6.13776 5.5C6.13776 5.56364 6.11931 5.6253 6.08241 5.68496C6.04551 5.74463 5.99016 5.79037 5.91636 5.8222L5.54611 5.985C4.68116 6.36533 3.97877 7.03958 3.56341 7.88826L3.39483 8.2327C3.36203 8.3043 3.31488 8.35601 3.25338 8.38783C3.19188 8.41965 3.12833 8.43556 3.06273 8.43556Z" fill="url(#paint0_linear_702_11939)"/>\n                        <defs>\n                        <linearGradient id="paint0_linear_702_11939" x1="1.37855" y1="9.67246" x2="6.74925" y2="-0.985128" gradientUnits="userSpaceOnUse">\n                        <stop offset="0.1788" stop-color="#702CE7"/>\n                        <stop offset="0.8196" stop-color="#FF4A97"/>\n                        </linearGradient>\n                        </defs>\n                    </svg>\n                    ').concat(o,"\n                </button>\n            ")),C(".".concat(t)).on("click",(function(e){e.stopPropagation(),e.stopImmediatePropagation(),r("eventin-ai-text-generator-modal",{visible:!0,tokenType:n,contextId:l})})))}),1e3),i("eventin-ai-modal-response","eventin-ai-free",(function(e){e.contextId===l&&c("core/editor").editPost({title:e.response})}))}(C)}))})();