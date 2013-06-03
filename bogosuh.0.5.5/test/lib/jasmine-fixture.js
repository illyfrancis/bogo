// console.log('fixture');
// console.log('fixture', window.__karma__.files);
// console.log('fixture', Object.keys(window.__karma__.files));
// console.log('filtered', Object.keys(window.__karma__.files).filter(function (file) {
//     return /Spec\.js$/.test(file);
// }));

// console.log('jq', $);

// // $('body').append('<div id="sandbox" style="overflow: hidden; height: 1px;"></div>');
// console.log(document.body.innerHTML);

// add sandbox in the body
var el = document.createElement('div');
el.id = 'sandbox';
document.body.appendChild(el);

// console.log(document.body.innerHTML);
