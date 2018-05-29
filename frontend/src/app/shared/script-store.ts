 interface Scripts {
    name: string;
    src: string;
}  

export const ScriptStore: Scripts[] = [
    {name: 'ckeditor-basic', src: '../../../assets/ckeditor-basic/ckeditor.js'},
    {name: 'ckeditor-full', src: '../../../assets/ckeditor-full/ckeditor.js'},
    {name: 'jquery', src: '../../../assets/jquery/jquery.js'},
    {name: 'cdn-ckeditor-basic', src: 'https://cdn.ckeditor.com/4.8.0/basic/ckeditor.js'},
    {name: 'cdn-ckeditor-full', src: 'https://cdn.ckeditor.com/4.8.0/full/ckeditor.js'},
    {name: 'filepicker', src: 'https://api.filestackapi.com/filestack.js'},
    {name: 'rangeSlider', src: '../../../assets/js/ion.rangeSlider.min.js'},
    {name: 'main-del', src: '../../../assets/js/main-del.js'},
    {name: 'wow-js', src: '../../../assets/js/wow/wow.min.js'},
    {name: 'superfish-js', src: '../../../assets/js/superfish/superfish.min.js'},
    {name: 'hoverIntent-js', src: '../../../assets/js/superfish/hoverIntent.js'},
    {name: 'counterup-js', src: '../../../assets/js/counterup/counterup.min.js'},
    {name: 'waypoints-js', src: '../../../assets/js/waypoints/waypoints.min.js'},
    {name: 'easing-js', src: '../../../assets/js/easing/easing.min.js'},
    {name: 'google-api', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCo5LigHfJOQMGSUVEsiBhCi501fQS4IXY'},
    {name: 'quill-js', src: 'https://cdn.quilljs.com/1.0.0/quill.js'}
];