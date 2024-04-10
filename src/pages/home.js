import React from 'react';
import '../style/frontpage.css';


class HomePage extends React.Component{

       render(){
        return(
           
        <div id="main-section">
            <div id="bg_image">
                <div style={{width: "1458px;", marginLeft: "20px;"}}>
                   <div class="row">
                     <div class="col-1"></div>
                     <div class="col-10">
                            <img src={"./images/logo.png"}alt="logo" id="logo"/>
                           {/* <!--logo complete--> */}
                            <div class="language-dropdown">
                             <span class="material-symbols-outlined position-absolute fs-6 fw-bold m-2 text-light">translate</span>
                             <select class="px-4 py-1 bg-dark text-light bg-opacity-75" style={{borderRadius: "5%;", marginTop: "-4px;"}} >
                               <option class="bg-light text-dark">English</option>
                               <option class="bg-light text-dark">हिंदी</option>
                           </select>
                            </div>
                             {/* <!--dropdown complete-->
                             <!--signin button--> */}
                             <button type="button" class="btn signin">Sign In</button> 
                         </div>
                     </div>
                     {/* <!--complete-->
                     <!--row-2--> */}
                     <div class="row">
                         <div class="col-2"></div>
                         <div class="col-8">
                            <h2 id="main-text"> Unlimited movies, TV shows and more </h2>
                            <h4 id="sub-text-1">Watch anywhere. Cancel anytime.</h4>
                            <h3 id="sub-text-2">Ready to watch? Enter your email to create or restart your membership.</h3>
                         </div>
                     </div>
                    {/* <!--row-2 done-->
                    <!--row-3--> */}
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                         <div class="form-floating mb-3 email-1" data-bs-theme="dark">
                             <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" style={{borderColor: "white;", opacity: "0.7;"}}/>
                             <label for="floatingInput">Email address</label>
                           </div>
                           <button type="button" class="btn start-button">Get Started &gt;</button>
                             
                         </div>
                      </div>  
                  </div>
                  <hr id="firstpage-hr"/>
            </div>
            
            {/* <!--page-1 done-->
                <!--page-2 start--> */}
                <div id="sections">
                    <div class="container row video-1-container">
                      <div class="col-6" style={{marginTop: "90px;"}}>
                            <h1 id="page2-mainText">Enjoy on your TV</h1>
                            <p id="page2-subText">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                      </div>
                      
                      <div class="col-6 ">
                          <img src={"./images/image.png"} alt="TV image" width="95%" class="ms-5" className='image-pos'/>
                          <div class="z-0 position-absolute" id="video-1">
                           <video src={"./images/video-1.m4v"} autoplay loop muted className='video-size-1'>
                           </video>
                          </div>
                      </div>
                  </div>
                  </div>
                  <hr id="sections-hr"/>
                   {/* <!--page-2 done-->
    
                    <!--page-3 start--> */}
                  <div id="sections">
                    <div class="container row" style={{margin: "9%;", marginTop: "2%;"}}>
                      <div class="col-6">
                          <img src={"./images/image-2.jpg"} alt="image" width="600px"/>
                          <div id="subimage">
                               <div id="image"></div>
                               <div id="stranger-text">
                                  <h3 id="text-1">Stranger Things</h3>
                                  <h2 id="text-2">Downloading...</h2>
                               </div>
                                <div id="download-icon">
                                    <img src={"./images/icon.gif"} alt="download gif" style={{width: "60px;"}}/>
                                </div>
                          </div>
                      </div>
                      
                      <div class="col-6 ">
                        <div class="d-inline-block" style={{marginTop: "90px;"}}>
                          <h1 id="page2-mainText">Download your shows to watch offline</h1>
                          <h4 id="page2-subText">Save your favourites easily and always have something to watch.</h4>
                      </div>
                      </div>
                  </div>
                  </div>
                  <hr id="sections-hr"/>
                 {/* <!--page-3 done-->
    
                  <!--page-4 start--> */}
                <div id="sections">
                    <div class="container row" style={{margin: "9%;", marginTop:"2%;"}}>
                      <div class="col-6" style={{marginTop: "90px;"}}>
                        <h1 id="page2-mainText">Watch everywhere</h1>
                        <h4 id="page2-subText">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
                      </div>
                      
                      <div class="col-6 ">
                          <img src={"./images/image-4.png"} alt="TV image" width="95%" class="ms-5" className="image-pos"/>
                          <div class="z-0 position-absolute" id="video-2">
                            <video src={"./images/video-2.m4v"} autoplay loop muted className='video-2-size'></video>
                           </div>
                      </div>
                  </div>
                  </div>
                  <hr id="sections-hr"/>
                   {/* <!--page-4 done-->
    
                    <!--page-5 start--> */}
                <div id="sections">
                    <div class="container row" style={{margin: "9%;", margintop: "2%;"}}>
                      <div class="col-6">
                        <div class="ms-5">
                          <img src={"./images/image-5.png"} alt="image" width="550px"/>
                      </div>
                     </div>
                      
                      <div class="col-6 ">
                        <div class="d-inline-block" style={{marginTop: "90px;"}}>
                          <h1 id="page2-mainText">Create profiles for kids</h1>
                                          <h4 id="page2-subText">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h4>
                      </div>
                      </div>
                  </div>
                  </div>
                  <hr id="sections-hr"/>
                   {/* <!--page-5 done-->
    
                    <!--page-6 start-->
                    <!--accordian--> */}
                    <div class="container accordian-container">
                     <div style={{margin: "auto;", width: "852px;"}}><h1 id="questions">Frequently Asked Questions</h1></div>
                     <div class="accordion" id="accordionExample" style={{marginTop: "50px;"}}>
                       <div class="accordion-item border border-black" style={{borderRadius: "0%;"}}>
                         <h2 class="accordion-header">
                           <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="accordian-textblock">
                               What is Netflix?
                           </button>
                         </h2>
                         <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                           <div class="accordion-body" id="accordian-textblock">
                               Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                  <br/><br/>
                                   You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                           </div>
                         </div>
                       </div>
                       <div class="accordion-item border border-black">
                         <h2 class="accordion-header">
                           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" id="accordian-textblock">
                               How much does Netflix cost?
                           </button>
                         </h2>
                         <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                           <div class="accordion-body" id="accordian-textblock">
                               Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                           </div>
                         </div>
                       </div>
                       <div class="accordion-item border border-black">
                         <h2 class="accordion-header">
                           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="accordian-textblock">
                               Where can I watch?
                           </button>
                         </h2>
                         <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                           <div class="accordion-body" id="accordian-textblock">
                               Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                   <br/><br/>
                                   You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                           </div>
                         </div>
                       </div>
                       <div class="accordion-item border border-black">
                           <h2 class="accordion-header">
                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" id="accordian-textblock">
                               How do I cancel?
                             </button>
                           </h2>
                           <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                             <div class="accordion-body" id="accordian-textblock">
                              Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                             </div>
                           </div>
                         </div>
                         <div class="accordion-item border border-black">
                           <h2 class="accordion-header">
                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" id="accordian-textblock">
                               What can I watch on Netflix?
                             </button>
                           </h2>
                           <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                             <div class="accordion-body" id="accordian-textblock">
                               Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                             </div>
                           </div>
                         </div>
                         <div class="accordion-item border border-black" style={{borderRadius: "0%;"}}>
                           <h2 class="accordion-header">
                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" id="accordian-textblock-2">
                               Is Netflix good for kids?
                             </button>
                           </h2>
                           <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                             <div class="accordion-body" id="accordian-textblock">
                              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                   <br/><br/>
                                   Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                             </div>
                           </div>
                         </div>
                         {/* <!--accordian done--> */}
                         <p id="sub-text-2" style={{marginTop: "30px;", marginLeft: "250px;"}}>Ready to watch? Enter your email to create or restart your membership.</p>
                         <div className='email-2'>
                         <div class="form-floating mb-3 email-1" data-bs-theme="dark">
                           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" style={{borderColor: "white;", opacity: "0.7;"}}/>
                           <label for="floatingInput">Email address</label>
                         </div>
                         <button type="button" class="btn start-button">Get Started &gt;</button>
                       </div>
                       </div>
                     </div>  
                     <hr id="sections-hr"/>
    
               {/* <!--Footer-part start--> */}
                <div class="container row link-section">
                  <div class="col-3">
                      <p id="hyperlink-text" class="d-inline-block">Questions? Call</p> 
                      <p class="d-inline-block"><a class="link-opacity-100" href="#" id="hyperlink-text">000-800-100-8343</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">FAQ</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Investor Relations</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Privacy</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Speed Test</a></p>
                  
                        <div class="language-dropdown-2">
                          <span class="material-symbols-outlined position-absolute fs-6 fw-bold m-2 text-light">translate</span>
                          <select class="px-4 py-1 bg-dark text-light bg-opacity-75" style={{borderRadius:" 5%;", marginTop: "-4px;"}} >
                            <option class="bg-light text-dark">English</option>
                            <option class="bg-light text-dark">हिंदी</option>
                      </select>
                         </div>
                       <br/> 
                       <p id="hyperlink-text">Netflix India</p> 
                   </div>
                  
                    <div class="col-3" style={{marginTop: "44px;"}}>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Help Centre</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Jobs</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Cookie Preferences</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Legal Notices</a></p>
                  </div>
                  <div class="col-3" style={{marginTop: "44px;"}}>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Account</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Ways to Watch</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Corporate Information</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Only on Netflix</a></p>
                  </div>
                  <div class="col-3" style={{marginTop: "44px;"}}>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Media Centre</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Terms of Use</a></p>
                      <p><a class="link-opacity-100" href="#" id="hyperlink-text">Contact Us</a></p>
                  </div>
                  </div>
                {/* <!--Footer-part done-->
                <!--page-6 done--> */}
             </div>
        
            
        )}}

export default HomePage;