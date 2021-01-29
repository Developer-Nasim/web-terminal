"use strict"
function allworks(){

    // inisilyzation of varrialble
    let minimize,cross,input,allCommands,resultin,aboutMe,allMenus,contactme,portfolio,terminal,hi_reply;
    minimize    = document.querySelector('.minimize')
    cross       = document.querySelector('.cross')
    terminal    = document.querySelector('.terminal')
    resultin    = document.querySelector('.result')
    input       = document.querySelector('input');
    allCommands = ['hi','allcmds','contact','about','portfolio','github','linkedin','facebook','twitter','clr'];
     
    aboutMe     = `<h5> Hey there,,,</h5><p>My Name is AJ Nasim from Bangladesh an experinced UX engineer / front-end developer also back-end developer with 2+ years of Experice,,, an obviously a passionate learner & a code lover, Well if you want to know more about my professional background or all of experinces then directly contact me Type <span style="color:aquamarine">"contact".</span></p><p>Type <span style="color:aquamarine"> "clr"</span> to clear this Terminal.</p>`;

    allMenus    = `<p style="color:#fce26e;margin-bottom: 5px;"><span style="color:#64f105">⇒</span> Available commands listed below. Type <span style="color:aquamarine">"clr"</span> to clear terminal.</p>
    <ul class="menus">
        <li><span>⪢ </span> about</li>
        <li><span>⪢ </span> portfolio</li>
        <li><span>⪢ </span> contact</li>
    </ul>
    <p style="margin-top: 10px;margin-bottom: 0">⊗ please don't press enter before typeing.</p>`;

    hi_reply  = `<p style="color:#fce26e;margin-bottom: 5px;"><span style="color:#64f105">⇒</span> Available commands listed below. Type <span style="color:aquamarine">"clr"</span> to clear terminal.</p>
    <h5> Hey,,,</h5><p>How is going..? thank you so much to visite this site,,, <br> Go ahead by following this commands.</p>
    <ul class="menus">
        <li><span>⪢ </span> about</li>
        <li><span>⪢ </span> portfolio</li>
        <li><span>⪢ </span> contact</li>
    </ul>
    <p style="margin-top: 10px;margin-bottom: 0">⊗ please don't press enter before typeing.</p>`;

    contactme   = `<p style="color:#fce26e;margin-bottom: 5px;"><span style="color:#64f105">⇒</span> Available commands listed below. Type <span style="color:aquamarine">"clr"</span> to clear terminal.</p>
    <ul class="menus">
        <li><span>⪢ </span> <a href="https://github.com/Developer-Nasim" target="_blank">Github</a></li>
        <li><span>⪢ </span> <a href="https://www.linkedin.com/in/aj-nasim/" target="_blank">LinkedIn</a></li>
        <li><span>⪢ </span> <a href="https://www.facebook.com/aj.nasim.9/" target="_blank">Facebook</a></li>
        <li><span>⪢ </span> <a href="https://twitter.com/ajnasim72" target="_blank">Twitter</a></li>
        <li><span>⪢ </span> <a href="mailto:ajnasim72@gmail.com">ajnasim72@gmail.com</a></li>
        <li><span>⪢ </span> <a href="tel:+8801405618060">+8801405618060</a></li>
    </ul>
    <p style="margin-top: 10px;margin-bottom: 0">⊗ please don't Type these <span style="color:aquamarine">E-mail and Number</span></p>`;

    portfolio   = `<p style="color:#fce26e;margin-bottom: 5px;"><span style="color:#64f105">⇒</span> Available commands listed below. Type <span style="color:aquamarine">"clr"</span> to clear terminal.</p>
    <ul class="menus">
        <li><span>⪢ </span>Github</li>
        <li><span>⪢ </span>Unfortuntly my main server is down so you will get few work in Github so please visit my github profile there are availbe almost 60-70 project for you... Type<span style="color:aquamarine">"github".</span>
        </li>
    </ul>
    <p style="margin-top: 10px;margin-bottom: 0">⊗ please don't press enter before typeing.</p>`;

   
    // When user will be press enter;
    window.addEventListener('keypress', (e) =>{if (e.key == 'Enter') {commandWork(e)}});

    // Command handling functions
    function commandWork(e){ 
        let alip = document.querySelectorAll('input'); 
        let inpVl = alip[alip.length - 1].value.toLowerCase().trim();
        let dcmd  = `<div style="margin-bottom: 15px;margin-top: 20px" class="type-here"><span><a href="#"><span>⪢</span>creator<span>@ajnasim</span> >> </a> <span style="color:red;margin-left:10px">${input.value}</span></span></div> `;
        if (inpVl !== "") {
            let fnd  = allCommands.some((vls)=>{
                return vls == inpVl;
            })

            switch(inpVl){
                case 'hi':
                    hi_rep();
                    break;
                case 'allcmds':
                    allcmd();
                    break;
                case 'menu':
                    menuAll();
                    break;
                case 'about':
                    nasim();
                    break;
                case 'contact':
                    contactMe();
                    break;
                case 'portfolio':
                    portfolios();
                    break;
                case 'github':
                    gitpr();
                    break;
                case ' linkedin':
                    linked();
                    break;
                case 'facebook':
                    fb();
                    break;
                case 'twitter':
                    twt();
                    break;
                case 'clr':
                    clearAll();
                    break;
                case 'clear':
                    clearAll();
                    break;
                default :
                    notFound();
                    break;
            }

            // Allcommands
            function allcmd(){
                let cmd = allCommands.map((vl,ix,arr) => {
                    return `<li><span>⪢ </span> ${vl}</li>`;
                })
                let dl = cmd.toString().replace(/,/gi," ");
                resultin.innerHTML += dcmd + `<p style="color:#fce26e;margin-bottom: 5px;"><span style="color:#64f105">⇒</span> Available commands listed below. Type <span style="color:aquamarine">"clr"</span> to clear terminal.</p><ul class="menus">${dl}</ul><p style="margin-top: 10px;margin-bottom: 0">⊗ please don't press enter before typeing.</p>`;
            }
            // Clear
            function clearAll(){
                resultin.innerHTML = " ";
            }
            // Reply of "hi" command
            function hi_rep(){
                resultin.innerHTML += dcmd + hi_reply;
            }
            // about command
            function nasim(){
                resultin.innerHTML += dcmd + aboutMe;
            }
            // menu command
            function menuAll(){
                resultin.innerHTML += dcmd + allMenus;
            }
            // contact command
            function contactMe(){
                resultin.innerHTML += dcmd + contactme;
            }
            // portfolio command
            function portfolios() {
                resultin.innerHTML += dcmd + portfolio;
            }
            // github command
            function gitpr() {
                let a = document.createElement('a');
                a.href = 'https://github.com/Developer-Nasim';
                a.setAttribute('target','_blank');
                a.click();
            }
            // linkedIn command
            function linked() {
                let a = document.createElement('a');
                a.href = 'https://github.com/Developer-Nasim';
                a.setAttribute('target','_blank');
                a.click();
            }
            // Facebook command
            function fb() {
                let a = document.createElement('a');
                a.href = 'https://www.facebook.com/aj.nasim.9/';
                a.setAttribute('target','_blank');
                a.click();
            }
            // twitter command
            function twt() {
                let a = document.createElement('a');
                a.href = 'https://twitter.com/ajnasim72';
                a.setAttribute('target','_blank');
                a.click();
            } 
            // not-found
            function notFound(){
                resultin.innerHTML += `<div style="margin-top: 10px;" class="type-here"><span><a href="#">creator<span>@ajnasim</span> >> </a> <span style="margin-left: 10px;color:#fce26e">${input.value}</span> </span></div><p sty="margin:0">Sorry no comands are found</p>`;
            }

            let alip = document.querySelectorAll('input');
            alip.forEach(alp => {
                alp.parentElement.parentElement.style.marginTop = "10px"; 
            }) 
            alip[alip.length - 1].parentElement.parentElement.style.marginTop = "20px";   
            e.target.value = '';
            terminal.scrollTop = terminal.offsetHeight + resultin.offsetHeight;
        } else if (inpVl == ''){
            resultin.innerHTML += `<div style="margin-top: 10px;" class="type-here"><span><a href="#">creator<span>@ajnasim</span> >></a> ${input.value} </span></div><p sty="margin:0">Type any command link <span style="color:aquamarine">"Hey"  "menu" or "allcmds"</span></p>`;
        } 

    } 
}
allworks()
// &dArr;