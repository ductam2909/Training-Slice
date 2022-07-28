import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


var s=0;var k=3;
function handleSubmit(a) {
    const ss= [ "i have been an illustrator for over 15 years, but only recently been designing NFT’s. ","i have been an illustrator for over 15 years, but only recently been designing NFT’s. previously design manager at apple but now i am designing for th...","i have been an illustrator for over 15 years, but only recently been designing NFT’s. ","I have changed!4"];

    if(a===1){
            document.getElementById("demo").innerHTML= ss[s];
            document.getElementById("demo2").innerHTML= ss[s];
            s+=1;
            if(s>3) s=0;
    }
    if(a===2){
        document.getElementById("demo").innerHTML= ss[k];
        document.getElementById("demo2").innerHTML= ss[k];
        k-=1;
        if(k<0) k=3;
    }
  }
function Next(props){
    return(
      // <h1 onClick={props.onClick}>hhh</h1>
      <button className="btnnext" onClick={() => {
       props.onClick();
        handleSubmit(1);
      }}><img src="/assets/img/btn-next.jpg" alt="" /></button>
    );
  }
  function Prev(props){
    return(
      // <h1 onClick={props.onClick}>hhh</h1>
      <button className="btnpre" onClick={() => {
        props.onClick();
         handleSubmit(2);
       }}><img src="/assets/img/btn-pre.jpg" alt="" /></button>
    );
  }
  var s2=1;
 function toggleclick(){
  s2+=1;
  if(s2%2===0){
    document.getElementById("myID").classList.add("show-example");
  }else document.getElementById("myID").classList.remove("show-example");
 }
export default function Home() {
    const renderSlides = () =>
    [
        <div>
            <div className="content4-a">
        <div className="content4-a-left">
          <img src="/assets/img/content4a1.png" alt="" />
        </div>
        <div className="content4-a-right">
          <img src="/assets/img/art2.png" alt="" />
          <img src="/assets/img/art3.png" alt="" />
        </div>
      </div>
        <div className="user">
        <img src="/assets/img/Thumb.png" alt="" />
        <p>Mike Page</p>
        </div>
        </div>
      ,
      <div>
            <div className="content4-a">
        <div className="content4-a-left">
          <img src="/assets/img/content4a1.png" alt="" />
        </div>
        <div className="content4-a-right">
          <img src="/assets/img/art2.png" alt="" />
          <img src="/assets/img/art3.png" alt="" />
        </div>
      </div>
        <div className="user">
        <img src="/assets/img/Thumb.png" alt="" />
        <p>Mike Page</p>
        </div>
        </div>, <div>
            <div className="content4-a">
        <div className="content4-a-left">
          <img src="/assets/img/content4a1.png" alt="" />
        </div>
        <div className="content4-a-right">
          <img src="/assets/img/art2.png" alt="" />
          <img src="/assets/img/art3.png" alt="" />
        </div>
      </div>
        <div className="user">
        <img src="/assets/img/Thumb.png" alt="" />
        <p>Mike Page</p>
        </div>
        </div>
     ].map(num => (
      <div className="">
        {num}
      </div>
    ));

    const renderSlides2 = () =>
    [
        <div className="content5-a">
        <img src="/assets/img/img1.png" alt="" />
        <p>ethel holmes / nodejs, java, reactjs</p>
      </div>,
      <div className="content5-a">
        <img src="/assets/img/img2.png" alt="" />
        <p>ethel holmes / nodejs, java, reactjs</p>
      </div>,
      <div className="content5-a">
        <img src="/assets/img/img3.png" alt="" />
        <p>ethel holmes / nodejs, java, reactjs</p>
      </div>,
      <div className="content5-a">
      <img src="/assets/img/img1.png" alt="" />
      <p>ethel holmes / nodejs, java, reactjs</p>
    </div>
    ].map(num => (
      <div className="">
        {num}
      </div>
    ));
    const renderSlides3 = () =>
    [
        <div className="content5-a">
        <img src="/assets/img/img4.png" alt="" />
        <p>ethel holmes / nodejs, java, reactjs</p>
        </div>,
        <div className="content5-a">
            <img src="/assets/img/img5.png" alt="" />
            <p>ethel holmes / nodejs, java, reactjs</p>
        </div>,
        <div className="content5-a">
            <img src="/assets/img/img6.png" alt="" />
            <p>ethel holmes / nodejs, java, reactjs</p>
        </div>,
        <div className="content5-a">
        <img src="/assets/img/img5.png" alt="" />
        <p>ethel holmes / nodejs, java, reactjs</p>
        </div>
    ].map(num => (
      <div className="">
        {num}
      </div>
    ));

  return (
   <div>
     <div className="container">
    {/* <div class="header">Heder</div> */}
    <div className="header">
      <div id="toggle"onClick={toggleclick}>
        <i className="fa-solid fa-bars clsstpgle" />
      </div>
      <img src="/assets/img/logo.png" alt="" />
      <nav id='myID'>
        <ul id="mainmenu" onClick={toggleclick}>
          <li>Artists</li>
          <li>Developers</li>
          <li>sản phẩm</li>
          <li>cms & mods</li>
          <li>about us</li>
          <li><button className="singin">Sing in</button></li>
          <li><button className="singout">Sing Out</button></li>
          <li className="login">Login</li>
        </ul>
      </nav>
    </div>
    <div className="content">
      <div className="content1">
        <div className="content1-left">
          <h1>Fully doxxed &amp;</h1>
          <h2>kicka$$</h2>
          <h3>NINJAS OF THE METAVERSE</h3>
        </div>
        <img src="/assets/img/ninja.jpg" alt="" />
      </div>
      <div className="content1-p"><p>artist <span>moon dog</span></p></div>
      <div className="content2">
        <div className="content2-a">
          <h1>Artists</h1>
          <p>Proven and fully screened Web3 artists; from NFT artists to  virtual and augmented reality designers.</p>
          <button>search artists</button>
        </div>
        <img src="assets/img/line1.jpg" alt="" />
        <div className="content2-a">
          <h1>Developers</h1>
          <p>Seasoned software engineers, minting coders, and architects with expertise in the Web3 industry.</p>
          <button>find a developer</button>
        </div>
        <img src="assets/img/line1.jpg" alt="" />
        <div className="content2-a">
          <h1>CM’s &amp; mods</h1>
          <p>we can agree that Managing a community sucks! Find the best community managers and Discord mods in the industry.</p>
          <button>get community help</button>
        </div>
      </div>
      <div className="content3">
        <div className="content3-a">
          <h1>FIND YOUR PROJECTS</h1>
          <h2>CHOSEN ONES</h2>
        </div>
        <div className="content3-b">
          <img src="/assets/img/ninja1.png" alt="" />
          <p>you have no f%$king idea how to find good people in this psychotic web 3.0 space</p>
        </div>
        <div className="content3-c">
          <img src="/assets/img/ninja3.png" alt="" />
          <p>so you browse pre-qualified and screened ninjas of the metaverse</p>
        </div>
        <div className="content3-d">
          <img src="/assets/img/ninja4.png" alt="" />
          <p>you take the steps to setup a project with all your requirements</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical clssdot"></i>
        <div className="content3-e">
          <p>you interview them and invite them into your ranks for world demonation</p>
          <h1>LFG</h1>
          <img src="/assets/img/ninja2.png" alt="" />
          {/* <h4>Featured Artists</h4> */}
        </div>
      </div>
      
      <div className='content4'>
        <div className=''><p id="demo" >i have been an illustrator for over 15 years, but only recently been designing NFT’s. previously design manager at apple but now i am designing for th...</p></div>
        <p className="p-feature p-feature2">Featured developers</p>
        <Slider
        nextArrow={<Next type="next" />}
        prevArrow={<Prev type="prev" />}
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        variableWidth= {true}
        
      >
        {renderSlides()}
      </Slider>
      </div>
      <div className="content5">
      <div className=''><p id="demo2" >my skills range from developing more simple user interfaces to full scale back-end solutions for world renowned clients globally. I have worked for...</p></div>
        <p className="p-feature">Featured developers</p>
            <Slider
            nextArrow={<Next type="next" />}
            prevArrow={<Prev type="prev" />}
            dots={true}
            slidesToShow={1}
            slidesToScroll={1}
            variableWidth= {true}
        >
            {renderSlides2()}
        </Slider>
        </div>

        <div className="content6">
        <div className=''><p id="demo3" >when it comes to keeping a community in order I have the perfect skills. i have worked with many top projects and no how to handle both hype and normal p...</p></div>
        <p className="p-feature">Featured developers</p>
            <Slider
            nextArrow={<Next type="next" />}
            prevArrow={<Prev type="prev" />}
            dots={true}
            slidesToShow={1}
            slidesToScroll={1}
            variableWidth= {true}
        >
            {renderSlides3()}
        </Slider>
        </div>

        
        <div className="content7">
          <div className="content7-a">
            <h2>because web 3.0 is</h2>
            <h3>shady</h3>
            <h1>AF!</h1>
          </div>
          <div className="content7-b">
            <img src="/assets/img/ninja5.png" alt="" className="content7-imga" />
            <img src="/assets/img/ninja6.png" alt="" className="content7-imgb" />
          </div>
          <p>we hear story after story of resources hiding behind pfp’s and usernames, not showing their faces on video calls, providing average deliverables, and even worse.. scams, fraud, perverts and more! we will shake out baddies before you even get to them.</p>
        </div>


        <div className="content8">
          <h3>HOW WE SOLVE THIS...</h3>
          <div className="content8-a">
            <div className="content8-a1">
              <h1>1</h1>
              <h2>ninja skills review</h2>
              <p>after a minja has submitted their resume, portfolios and linkedin url, we handpick only the minjas who we think are the most well trained and metaverse ready to proceed to stage 2</p>
            </div>
            <div className="content8-a1 content8-a1-ct">
              <h1>2</h1>
              <h2>hard skills check</h2>
              <p>all the chosen ones then undergo a screening call (soft skills and language proficiency check), before we do a deep dive into their portfolio and references to make sure they are good enough to be a real life minja</p>
            </div>
            <div className="content8-a1 content8-a1-rg">
              <h1>3</h1>
              <h2>the final reckoning!</h2>
              <p>once they pass stage 2 we then use the greatest weapon of all, our intuition! we accept only those who we think are most passionate about web 3.0 and the metaverse, with work ethics of a true warrior</p>
            </div>
          </div>
          <img src="/assets/img/ninja7.png" alt="" className='imgninja7'/>
          <div>
          <img src="/assets/img/line3.jpg" alt="" className='line3' />
          </div>
          <div className="content8-b">
            <p>ok, you’ve heard enough and ready to hire some proper kicka$$ experts to build your project</p>
            <button>post a job</button>
          </div>
        </div>

       
        
    </div>
    
    {/* <div className="footer">footer</div> */}
  </div>
  <div className="content9">
      <div className="content9-a">
        <img src="/assets/img/ninja8.png" alt="" />
        <div className="content9-a1">
          <h2>are you a</h2>
          <h1>minja? </h1>
        </div>
      </div>
      <div className="content9-b">
        <div className="content9-b1">
          <h1>ya, an artist</h1>
          <p>you’re an artist who has created masterpieces for NFT collections, VR / ar experiences, or other web 3.0 projects</p>
          <button>apply now</button>
        </div>
        <img src="/assets/img/line2.jpg" alt="" />
        <div className="content9-b1">
          <h1>Developers</h1>
          <p>you’ve gone down the 3.0 coding rabbit hole and wondering why, but it’s too late to turn back and enjoy the pain</p>
          <button>sign me up</button>
        </div>
        <img src="/assets/img/line2.jpg" alt="" />
        <div className="content9-b1">
          <h1>ya, an artist</h1>
          <p>you dig talking to crazy people hidden behind pfps and weird names and know just how to keep these sheeples in line</p>
          <button>join now</button>
        </div>
      </div>
    </div>
    <div className='footer'>
    <img src="/assets/img/logo.png" alt="" />
    <div className='footer-1'>
      <div className='footer1b'>
      <p>The number 1 platform for finding fully doxxed and experienced web 3.0 designers, developers, community managers and mods</p>
      </div>
      <div className="footer1a">
        <h2>here to hire</h2>
        <p>hiring an artist hiring a developer hiring a CM / mod</p>
      </div>
      <div className="footer1a">
        <h2>here to apply</h2>
        <p>apply as an artist apply as a developer apply as a Cm / mod</p>
      </div>
      <div className="footer1a">
        <h2>other sh!t</h2>
        <p>about</p>
        <p>faqs</p>
        <p>contact</p>
      </div>
      <div className="footer1a clsother">
        <h2>follow us</h2>
        <div className='flow'>
        <i class="fa-solid fa-paper-plane"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-solid fa-m"></i>
        <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
    <div className="term"><p>© 2022. Terms of service. privacy policy. cookie policy.</p></div> 
    </div>
   </div>
  
  )
}
