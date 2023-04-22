console.log(`my name is Leandro, I'm a software engineer based in the DMV area. I am open to new clients. email me @ leandro.a3001@gmail.com`)
// $('.carousel').carousel()
// function googleTranslateElementInit() {
    // new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'af,ar,am,az,bn,be,bs,bg,ca,ceb,co,cs,cy,da,de,nl,ny,zh-CN,zh-TW,fa,fi,fil,fr,fy,ga,gd,gl,gu,ha,haw,hmh,hmi,hml,hmm,hmn,he,hi,ht,hr,hy,hu,id,ig,is,it,ja,jvn,ka,kn,kk,km,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,pa,pt,pl,ps,ro,ru,el,en,eo,et,es,eu,sr,sm,sn,sd,si,sq,sk,sl,so,sv,sw,su,tg,ta,tt,te,th,tr,uk,ur,uz,vi,xh,yi,yo,zh,zu,za', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    //missing: Filipino, Hebrew, Javanese, Sesotho, 
    //https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes#Table_of_all_possible_two_letter_codes
    //https://r12a.github.io/app-subtags/
    //the script-> https://codepen.io/modernmatter/pen/XVqZpj
// }
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
function GoogleLanguageTranslatorInit() { new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages:'af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ml,ms,mt,mi,mr,mn,my,ne,no,ps,fa,pl,pt,pa,ro,ru,sr,sn,st,sd,si,sk,sl,sm,gd,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,uz,vi,cy,xh,yi,yo,zu', autoDisplay: false}, 'google_language_translator');}