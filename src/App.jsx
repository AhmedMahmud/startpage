import { For } from 'solid-js';
import './App.css'
import gif from '/gif.gif'

function App() {
  const data = [
    {
      title: "University",
      items: [
        ["Scientia", "https://scientia.doc.ic.ac.uk/"],
        ["Panopto", "https://imperial.cloud.panopto.eu/Panopto/Pages/Sessions/List.aspx#folderID=%224ed96ace-5e4e-4533-a67f-b02100efe73e%22"],
        ["~", "#"],
        ["~", "#"],
      ],
    },
    {
      title: "Coding",
      items: [
        ["GitHub", "https://github.com/ahmedmahmud"],
        ["LeetCode", "https://leetcode.com"],
        ["~", "#"],
        ["~", "#"],
      ],
    },
    // {
    //   title: "Coding",
    //   items: [
    //     ["W3School", "https://www.w3schools.com/"],
    //     ["HackerRank", "https://hackerrank.com"],
    //     ["FreeCodeCamp", "https://FreeCodeCamp.org"],
    //   ],
    // },
    // {
    //   title: "Google",
    //   items: [
    //     ["Gmail", "https://mail.google.com/mail/u/0/"],
    //     ["Drive", "https://drive.google.com"],
    //     ["Maps", "https://maps.google.com"],
    //     ["Custom", "https://github.com/Nainish-Rai"],
    //   ],
    // },
  ];
  return (
    <>
      {/* <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li><a onclick="changeCSS('blue',0)">blue</a></li>
            <li><a onclick="changeCSS('cherry',0)">cherry</a></li>
            <li><a onclick="changeCSS('violet',0)">violet</a></li>
            <li><a onclick="changeCSS('green',0)">green</a></li>
            <li><a onclick="changeCSS('mesh-purple',0)">mesh-purple</a></li>
            <li><a onclick="changeCSS('orange',0)">orange</a></li>
            <li><a onclick="changeCSS('purple',0)">purple</a></li>
            <li><a onclick="changeCSS('white',0)">white</a></li>
            <li><a onclick="changeCSS('retro-gradient',0)">retro-gradient</a></li>
            <li><a onclick="changeCSS('summer-wave',0)">summer-wave</a></li>
            <li>
              <a onclick="changeCSS('Animated-Gradient',0)">animated-gradient</a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div class='flex w-screen h-screen pt-10 pl-10 pr-6 pb-6 justify-center items-center'>
        <div class="flex h-full w-[700px] relative">
          <div class="absolute inset-0 -translate-x-6 -translate-y-6 w-full bg-cyan-400 shadow-[0_0_30px] shadow-cyan-400"></div>
          <div class='absolute inset-0 h-full w-full bg-[rgba(35,35,35,0.9)] backdrop-blur-md shadow-[0_0_40px_rgb(0,0,0)]'></div>
          <div class='relative w-full'>
            <div class='flex h-full w-full'>
              <img src={gif} alt="Chilling" class='object-contain' />
              <div className='grow flex items-center'>

                <div class='flex flex-col gap-6 text-lg mx-auto w-fit text-white justify-center'>
                  <For each={data}>{({ title, items }) =>
                    <section class='flex flex-col gap-4'>
                      <h3 className='text-cyan-400 text-2xl font-semibold'>{title}</h3>
                      <ul class='list-disc'>
                        <For each={items}>{([text, url]) =>
                          <li>
                            <a class="group transition-all duration-300 ease-in-out" href={url}>
                              <span class="bg-left-bottom bg-gradient-to-r from-cyan-400 to-cyan-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                {text}
                              </span>
                            </a>
                          </li>
                        }</For>
                      </ul>
                    </section>
                  }</For>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="h-[90%] w-[90%] bg-slate-800/90 flex">
            <div class="content">
              <div class="image">
                <img
                  id="img"
                  src={gif}
                  alt="No image"
                />
              </div>
              <div id="links" class="links">
                <section>
                  <h3>Daily</h3>
                  <ul>
                    <li><a href="https://www.youtube.com/">Youtube</a></li>
                    <li><a href="https://github.com">Github</a></li>
                    <li><a href="https://web.whatsapp.com/">Whatsapp</a></li>
                    <li><a href="https://web.telegram.org/z/">Telegram</a></li>
                  </ul>
                </section>
                <section>
                  <h3>Social</h3>
                  <ul>
                    <li><a href="https://twitter.com/">Twitter</a></li>
                    <li><a href="https://www.reddit.com/">Reddit</a></li>
                    <li><a href="https://Instagram.com">Instagram</a></li>
                    <li><a href="https://discord.com/app">Discord</a></li>
                  </ul>
                </section>
                <section>
                  <h3>Coding</h3>
                  <ul>
                    <li><a href="https://www.w3schools.com/">W3School</a></li>
                    <li><a href="https://leetcode.com">LeetCode</a></li>
                    <li><a href="https://hackerrank.com">HackerRank</a></li>
                    <li><a href="https://FreeCodeCamp.org">FreeCodeCamp</a></li>
                  </ul>
                </section>
                <section>
                  <h3>Google</h3>
                  <ul>
                    <li><a href="https://mail.google.com/mail/u/0/">Gmail</a></li>
                    <li><a href="https://drive.google.com">Drive</a></li>
                    <li><a href="https://maps.google.com">Maps</a></li>
                    <li><a href="https://github.com/Nainish-Rai">Custom</a></li>
                  </ul>
                </section>
              </div>
            </div>
            <div class="search">
              <form onsubmit="return search()">
                <label for="search_box" autofocus>{">"} find / </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  name="search_box"
                  id="search_box"
                  autocomplete="off"
                  autofocus
                />
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
