import React, { useState } from 'react';
import './Internet.css'; // Import your CSS file
import IE from '../images/ie.png';
import MinMax from '../images/minmax.png';
import CSharp from '../images/Csharp.png';
import HTML from '../images/html.png';
import CSS from '../images/css.png';
import JS from '../images/js.png';
import Reeact from '../images/React.png';
import Angular from '../images/angular.png';
import SQL from '../images/sql.png';
import Maui from '../images/maui.png';
import AddFav from '../images/addfav.png';
import AddFriend from '../images/addfriend.png';
import AddGroup from '../images/addgroup.png';
import Block from '../images/block.png';
import ForwardFriend from '../images/forwardfriend.png';
import IM from '../images/im.png';
import Rank from '../images/rank.png';
import SM from '../images/sm.png';
import Me from '../images/me.png';
import Google from '../images/google.png';
import Backbtn from '../images/back.png';

const Internet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInternet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* IE Button */}
      <button onClick={toggleInternet} className="ie-button">
        <img className="ie-img" src={IE} alt="Internet Explorer" />
      </button>
      <p className="internet-title">Internet</p>

      {/* Internet Container */}
      {isOpen && (
        <div className="internet-container">
          <div className="internet-header">
            <div className="title">Internet Explorer</div>
            <button onClick={toggleInternet} className="close-button">
              <img height="50" width="70" src={MinMax} alt="Close" />
            </button>
          </div>
          <div className="internet-toolbar">
            <span className="back-button"><img src={Backbtn}></img></span>
            <div className="address-bar">
              <input type="text" value="http://www.myspace.com" readOnly />
            </div>
            <div className="ms-tab">MySpace</div>
            <div className='new-tab'>+</div>
          </div>
          <div className="internet-menu">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Favorites</span>
            <span>Tools</span>
            <span>Help</span>
          </div>
          <div className='ms-searchbar'>
            <div className='ms-address-bar'>
            <input type="text" value="" readOnly />
            </div>
            <input type='text' value='MySpace' readOnly />
            <div className='ms-search'>Search</div>
            <img src={Google} className='google' alt='google'/> 
          </div>  
          <div className='ms-toolbar-menu'>
            <span>Home</span>
            <span>Browse</span>
            <span>Search</span>
            <span>Invite</span>
            <span>Film</span>
            <span>Mail</span>
            <span>Blog</span>
            <span>Favorites</span>
            <span>Forum</span>
            <span>Groups</span>
            <span>Events</span>
            <span>Videos</span>
            <span>Music</span>
            <span>Comedy</span>
            <span>Classifieds</span>
          </div>  
          <div className="profile-container">
            <div className="header">
                <h1>Taylor</h1>
                <div className='profile-section'>
                <div className="profile-picture">
                    <img src={Me} alt="Profile" />
                </div>
                <div className="profile-info">
                    <p>Female<br />29 years old<br />Haddonfield, NEW JERSEY<br />United States</p>
                    <p>Last Login: 10/10/2007</p>
                    <p>Mood: <span className="mood">productive <span role="img" aria-label="smiley">😄</span></span></p>
                    <p>View My: <a href="#">Pics</a> | <a href="#">Videos</a></p>
                </div>
                </div>
                <div className="contacting-tom">
                <h2>Contacting Taylor</h2>
                <table>
                    <tbody>
                        <tr>
                            <td><img src={SM} alt="Send Message Icon" class="contact-icon" />Send Message</td>
                            <td><img src={ForwardFriend} alt="Forward Icon" class="contact-icon" />Forward to Friend</td>
                        </tr>
                        <tr>
                            <td><img src={AddFriend} alt="Send Message Icon" class="contact-icon" />Add to Friends</td>
                            <td><img src={AddFav} alt="Send Message Icon" class="contact-icon" />Add to Favorites</td>
                        </tr>
                        <tr>
                            <td><img src={IM} alt="Send Message Icon" class="contact-icon" />Instant Message</td>
                            <td><img src={Block} alt="Send Message Icon" class="contact-icon" />Block User</td>
                        </tr>
                        <tr>
                            <td><img src={AddGroup} alt="Send Message Icon" class="contact-icon" />Add to Group</td>
                            <td><img src={Rank} alt="Send Message Icon" class="contact-icon" />Rank User</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='url'><strong>MySpace URL:</strong><br></br>https://myspace.com/tayloroliver</div>
            </div>
            <div className="blogs">
            <div className='network'>Taylor is in your network!</div>
                <ul>
                    <li><strong>Taylor's latest blog entry</strong> <span className='view-more'>[Subscribe to this blog]</span></li>
                    <li>How I taught myself web development in 2022....<span className="view-more">(view more)</span></li>
                    <li>Why I feel like I would be a great fit at your company....<span className="view-more">(view more)</span></li>
                    <li>Getting my Bachelor of Science in Software Engineering....<span className="view-more">(view more)</span></li>
                    <li>Why I love the creativity of web development....<span className="view-more">(view more)</span></li>
                </ul>
            </div>

            <div className="interests">
                <h2>Interests</h2>
                <table>
                  <tr>
                    <td><strong>General</strong></td>
                    <td>Internet, cooking, beach days, traveling, concerts</td>
                  </tr>
                  <tr>
                    <td><strong>Music</strong></td>
                    <td>Taylor Swift, Zach Bryan, Luke Combs, Pop, Country</td>
                  </tr>
                  <tr>
                    <td><strong>Movies</strong></td>
                    <td>Forrest Gump, Shawshank Redemption, Wolf of Wall Street</td>
                  </tr>
                  <tr>
                    <td><strong>Television</strong></td>
                    <td>Below Deck, Love Island, My 600lb Life</td>
                  </tr>
                  <tr>
                    <td><strong>Goals</strong></td>
                    <td>To become a successful software engineer.</td>
                  </tr>
                </table>
            </div>

            <div className="blurb">
                <h2>Taylor's Blurbs</h2>
                <h3>About me:</h3>
                <p>Hey there, I'm Taylor! Welcome to my MySpace page! Fun fact: in 2007, I coded my very first website right here on MySpace! Designing my profile was one of my favorite things to do. Alongside the good old AIM messenger, these early social media days sparked my love for computers. </p>
                <h3>Who I'd like to meet:</h3>
                <p>I'd like to meet people who educate, inspire or entertain me...</p>
            </div>
            
            <div className='top-8'>
                <h3>Taylor's Top 8 Skills</h3>
                <div className="skills-grid">
                    <div className="skill-item">
                        <img className="icon" src={CSharp} height="45" width="55" alt="csharp" />
                        <p>C#</p>
                    </div>
                    <div className="skill-item">
                        <img className="icon" src={Maui} height="45" width="55" alt="maui" />
                        <p>.NET MAUI</p>
                    </div>
                    <div className="skill-item">
                        <img className="icon" src={Reeact} height="45" width="55" alt="Reeact" />
                        <p>React</p>
                    </div>
                    <div className="skill-item">
                        <img className="icon" src={JS} height="55" width="55" alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <img className="icon" src={Angular} height="45" width="55" alt="angular" />
                        <p>Angular</p>
                    </div>
                    <div className="skill-item">
                        <img className="icon" src={SQL} height="45" width="55" alt="sql" />
                        <p>SQL</p>
                    </div>
                    <div className="skill-item">
                        <img className="icon" src={HTML} height="55" width="55" alt="HTML" />
                        <p>HTML5</p>
                    </div>
                    <div className="skill-item">
                        <img className="icon" src={CSS} height="55" width="55" alt="CSS" />
                        <p>CSS3</p>
                    </div>
                </div>
            </div>

            

            </div>
        </div>    
      )}
    </div>
  );
};

export default Internet;
