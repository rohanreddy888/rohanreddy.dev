"use strict";
exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Project)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(8499);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(634);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/data/projects.json
const projects_namespaceObject = JSON.parse('[{"name":"Meetupswala","desc":"Meetupswala - Web3 events","image":"/projects/meetupswala.png","link":"https://www.meetupswala.xyz/"},{"name":"Metamorphosis","desc":"Metamorphosis - Event Website","image":"/projects/metamorphosis.png","link":"http://metamorphosis.octaloop.com/"},{"name":"Smartlabs","desc":"Home diagnostics service","image":"/projects/smartlabs.png","link":"https://smartlabs-frontend.vercel.app/"},{"name":"Smartlabs Dashboard","desc":"Home diagnostics service","image":"/projects/smartlabs-dashboard.png","link":"https://dashboard.thesmartlabs.com/"},{"name":"Mushrooms Goa","desc":"Premium Hostel","image":"/projects/mushrooms.png","link":"https://mushroomsgoa.com/"}]');
;// CONCATENATED MODULE: ./app/projects/page.js



function Project() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "flex flex-col lg:flex-row justify-start items-start lg:items-center w-full py-20",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col justify-start items-start w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "font-black text-6xl lg:text-4xl",
                        children: "Recent Projects"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex flex-col lg:flex-row gap-4 w-full",
                        children: projects_namespaceObject.map((project, index)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white shadow-md rounded-sm mt-4 lg:mt-2 w-full",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: project.image,
                                        height: "200",
                                        alt: project.name,
                                        width: "200",
                                        style: {
                                            width: "100%"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "p-4 lg:p-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                className: "font-bold text-4xl lg:text-xl",
                                                children: project.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-2xl lg:text-base",
                                                children: project.desc
                                            })
                                        ]
                                    })
                                ]
                            }, index);
                        })
                    })
                ]
            })
        })
    });
}


/***/ })

};
;